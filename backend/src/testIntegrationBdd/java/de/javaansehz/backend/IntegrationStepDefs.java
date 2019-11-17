package de.javaansehz.backend;

import com.fasterxml.jackson.core.type.TypeReference;
import de.javaansehz.backend.endpoint.model.Calculation;
import de.javaansehz.backend.endpoint.model.Country;
import io.cucumber.datatable.DataTable;
import io.cucumber.java8.En;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.test.web.servlet.MvcResult;

import java.time.LocalDate;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertDoesNotThrow;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;

public class IntegrationStepDefs extends CompleteContextSpringbootTest implements En  {

    Logger logger = LoggerFactory.getLogger(IntegrationStepDefs.class);

    private MvcResult result;
    private Calculation calculation = new Calculation();

    private LocalDate dateOfBirth = LocalDate.now().minusYears(30);
    private String name = "Max Meyer";
    private String country = "Deutschland";

    public IntegrationStepDefs() {

        Given("ich gebe kein(e?n?) {string} an", (String string) -> {
            switch (string) {
                case "Namen":
                    name = null;
                    break;
                case "Geburtsdatum":
                    dateOfBirth = null;
                    break;
                case "Wohnort":
                    country = null;
                    break;
            }
        });

        Given("ich habe alle anderen Angaben korrekt eingegeben", () -> {
            calculation.setName(name);
            calculation.setDateOfBirth(dateOfBirth);
            calculation.setCountry(country);
        });

        Given("ich bin {int} Jahre alt", (Integer int1) -> {
            dateOfBirth = LocalDate.now().minusYears(int1);
            calculation.setDateOfBirth(dateOfBirth);
        });

        When("ich einen Vertrag berechne", () -> {
            result = mockMvc.perform(
                        post("/api/contract/calculate")
                        .contentType("application/json")
                        .content(objectMapper.writeValueAsString(calculation))
                    ).andReturn();
            logger.info("response: " + result.getResponse().getContentAsString());
        });

        Then("soll ein Hinweis zur Korrektur für den/das {string} erscheinen", (String string) -> {
            logger.info("response: " + result.getResponse().getContentAsString());
            ErrorResponse errorResponse = assertDoesNotThrow(() -> objectMapper.readValue(result.getResponse().getContentAsString(), ErrorResponse.class));

            switch (string) {
                case "Namen":
                    assertThat(errorResponse.getErrors())
                            .extracting("field")
                            .contains("name");
                    break;
                case "Geburtsdatum":
                    assertThat(errorResponse.getErrors())
                            .extracting("field")
                            .contains("dateOfBirth");
                    break;
                case "Wohnort":
                    assertThat(errorResponse.getErrors())
                            .extracting("field")
                            .contains("country");
                    break;
            }
        });

        Then("soll kein Hinweis erscheinen", () -> {
            logger.info(result.getResponse().getContentAsString());
            assertDoesNotThrow(() -> objectMapper.readValue(result.getResponse().getContentAsString(), Double.class));
        });

        But("kein Hinweis zum {string} erscheinen", (String string) -> {
            logger.info(result.getResponse().getContentAsString());
            ErrorResponse errorResponse = assertDoesNotThrow(() -> objectMapper.readValue(result.getResponse().getContentAsString(), ErrorResponse.class));
            switch (string) {
                case "Namen":
                    assertThat(errorResponse.getErrors())
                            .extracting("field")
                            .doesNotContain("name");
                    break;
                case "Geburtsdatum":
                    assertThat(errorResponse.getErrors())
                            .extracting("field")
                            .doesNotContain("dateOfBirth");
                    break;
                case "Wohnort":
                    assertThat(errorResponse.getErrors())
                            .extracting("field")
                            .doesNotContain("country");
                    break;
            }
        });

        When("ich einen Wohnort auswählen möchte", () -> {
            result = mockMvc.perform(
                    get("/api/countries")
                            .contentType("application/json")
            ).andReturn();
            logger.info("response: " + result.getResponse().getContentAsString());
        });

        Then("sollen folgende auswählbar sein:", (DataTable dataTable) -> {
            List<Country> resultCountries = objectMapper.readValue(result.getResponse().getContentAsString(), objectMapper.getTypeFactory().constructCollectionType(List.class, Country.class));
            assertThat(resultCountries)
                    .extracting("name")
                    .containsExactlyElementsOf(dataTable.asList());
        });
    }
}