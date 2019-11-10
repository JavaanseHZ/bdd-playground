package de.javaansehz.backend.persistance;

import javax.persistence.*;

@Entity
public class CountryDto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", updatable = false, nullable = false)
    private long id;

    private String name;

    public CountryDto() {}

    public CountryDto(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

}
