package de.javaansehz.backend;

import de.javaansehz.backend.endpoint.model.Calculation;
import de.javaansehz.backend.operation.PricingOperation;
import io.cucumber.java8.En;

import java.time.LocalDate;

import static org.assertj.core.api.Assertions.assertThat;

public class BerechungStepDefs implements En {

    private Calculation calculation = new Calculation();
    private PricingOperation pricingOperation = new PricingOperation();
    private double resultPremium;

    public BerechungStepDefs() {

        Given("ich möchte einen Vertrag berechnen", () -> {
            calculation = new Calculation();
        });

        Given("ich wohne in {string}", (String string) -> {
            calculation.setCountry(string);
        });

        Given("der Multiplikator für {string} ist {double}", (String string, Double double1) -> {
            pricingOperation.getCountries().put(string, double1);
        });

        Given("ich heiße {string}", (String string) -> {
            calculation.setName(string);
        });

        Given("ich bin {int} Jahre alt", (Integer int1) -> {
            LocalDate alter = LocalDate.now().minusYears(int1);
            calculation.setDateOfBirth(alter);
        });

        Given("der Sockelbetrag ist {double} Euro", (Double double1) -> {
            pricingOperation.setBasepremium(double1);
        });

        When("ich einen Vertrag berechne", () -> {
            resultPremium = pricingOperation.calculatePremium(calculation);
        });

        Then("soll ein Beitrag von {double} Euro ermittelt werden", (Double double1) -> {
            assertThat(resultPremium).isEqualTo(double1);
        });
    }
}