package de.javaansehz.backend.persistance;

import javax.persistence.*;

@Entity
public class CountryDto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", updatable = false, nullable = false)
    private long id;

    private String name;
    private String flagUri;

    public CountryDto() {}

    public CountryDto(String name, String flagUri) {
        this.name = name;
        this.flagUri = flagUri;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getFlagUri() {
        return flagUri;
    }

    public void setFlagUri(String flagUri) {
        this.flagUri = flagUri;
    }
}
