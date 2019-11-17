package de.javaansehz.backend.operation;

import de.javaansehz.backend.endpoint.model.Calculation;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.Period;
import java.util.HashMap;
import java.util.Map;

@Service
@EnableConfigurationProperties
@ConfigurationProperties(prefix = "data")
public class PricingOperation {

    private double basepremium;
    private Map<String, Double> countries;

    public double calculatePremium(Calculation calculation) {
        double premium = basepremium;
        premium = applyDateOfBirthMultiplier(calculation.getDateOfBirth(), premium);
        premium = applyCountryMultiplier(calculation.getCountry(), premium);
        return premium;
    }

    private double applyDateOfBirthMultiplier(LocalDate dateOfBirth, double premium) {
        int years = Period.between(dateOfBirth, LocalDate.now()).getYears();
        return premium + ((years / 10) * 7);
    }

    private double applyCountryMultiplier(String country, double premium) {
        Double multiplier = countries.getOrDefault(country, countries.get("Sonstige"));
        BigDecimal result = BigDecimal.valueOf(multiplier).multiply(BigDecimal.valueOf(premium));
        return result.doubleValue();
    }

    public Map<String, Double> getCountries() {
        if(countries == null) {
            countries = new HashMap<>();
        }
        return countries;
    }

    public void setCountries(Map<String, Double> countries) {
        this.countries = countries;
    }

    public double getBasepremium() {
        return basepremium;
    }

    public void setBasepremium(double basepremium) {
        this.basepremium = basepremium;
    }
}
