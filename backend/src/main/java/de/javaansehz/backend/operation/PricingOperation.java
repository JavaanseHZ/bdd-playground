package de.javaansehz.backend.operation;

import de.javaansehz.backend.endpoint.model.Calculation;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.Period;

@Service
public class PricingOperation {

    public void calculatePremium(Calculation calculation) {
        int years = Period.between(LocalDate.now(), calculation.getDateOfBirth()).getYears();
        int premium = years * 2;
        premium = applyCountryMultiplier(calculation.getCountry(), premium);
        calculation.setPremium(premium);
    }

    private int applyCountryMultiplier(String country, int premium) {
        switch (country) {
            case "Deutschland":
                return premium * 3;
            default:
                return premium * 4;
        }
    }
}
