package de.javaansehz.backend.endpoint.model;

import de.javaansehz.backend.endpoint.validaton.AgeInRange;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;

public class Calculation {

    @NotEmpty(message = "Bitte Namen angeben!")
    private String name;
    @NotNull(message = "Bitte Geburtsdatum angeben!")
    @AgeInRange(min=18, max=65, message = "Alter nicht zwischen 18 und 65!")
    private LocalDate dateOfBirth;
    @NotEmpty(message = "Bitte Wohnort angeben!")
    private String country;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public LocalDate getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(LocalDate dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

}
