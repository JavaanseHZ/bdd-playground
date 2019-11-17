package de.javaansehz.backend;

import de.javaansehz.backend.endpoint.model.Calculation;
import io.cucumber.java8.En;
import org.springframework.test.web.servlet.MvcResult;

import java.time.LocalDate;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;

public class ValidationStepDefs extends MvcContextSpringbootTest implements En  {

    private MvcResult result;
    private Calculation calculation = new Calculation();

    private LocalDate dateOfBirth = LocalDate.now().minusYears(30);
    private String name = "Max Meyer";
    private String country = "Deutschland";

    public ValidationStepDefs() {

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

        When("ich einen Vertrag berechne", () -> {
            result = mockMvc.perform(
                        post("/api/calculate")
                        .contentType("application/json")
                        .content(objectMapper.writeValueAsString(calculation))
                    ).andReturn();
        });

        Then("soll ein Hinweis zur Korrektur für den/das {string} erscheinen", (String string) -> {
            result.getResponse().getContentAsString();
        });

        But("kein Hinweis zum {string} erscheinen", (String string) -> {
            result.getResponse().getContentAsString();
        });
    }
}