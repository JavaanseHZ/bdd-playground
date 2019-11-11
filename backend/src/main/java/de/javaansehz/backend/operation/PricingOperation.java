package de.javaansehz.backend.operation;

import de.javaansehz.backend.endpoint.model.Calculation;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.Period;

@Service
public class PricingOperation {

    public double calculatePremium(Calculation calculation) {
        double premium = 30;
        premium = applyDateOfBirthMultiplier(calculation.getDateOfBirth(), premium);
        premium = applyCountryMultiplier(calculation.getCountry(), premium);
        return premium;
    }

    private double applyDateOfBirthMultiplier(LocalDate dateOfBirth, double premium) {
        int years = Period.between(dateOfBirth, LocalDate.now()).getYears();
        return premium + years;
    }

    private double applyCountryMultiplier(String country, double premium) {
        switch (country) {
            case "Deutschland":
                return premium * 3;
            default:
                return premium * 4;
        }
    }
}
