package de.javaansehz.backend.operation;

import de.javaansehz.backend.persistance.BackendRepository;
import de.javaansehz.backend.persistance.CountryDto;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.util.List;

@Component
@EnableConfigurationProperties
@ConfigurationProperties(prefix = "data")
public class CountryOperation {

    private BackendRepository backendRepository;

    public CountryOperation (BackendRepository backendRepository) {
        this.backendRepository = backendRepository;
    }

    private List<String> countries;

    @PostConstruct
    void loadCountries() {
        countries.stream()
                .map(CountryDto::new)
                .forEach(backendRepository::save);
    }

    public List<String> getCountries() {
        return countries;
    }

    public void setCountries(List<String> countries) {
        this.countries = countries;
    }
}
