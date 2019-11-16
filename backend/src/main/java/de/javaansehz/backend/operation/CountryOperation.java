package de.javaansehz.backend.operation;

import de.javaansehz.backend.persistance.BackendRepository;
import de.javaansehz.backend.persistance.CountryDto;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.util.Map;

@Component
@EnableConfigurationProperties
@ConfigurationProperties(prefix = "data")
public class CountryOperation {

    private BackendRepository backendRepository;

    public CountryOperation (BackendRepository backendRepository) {
        this.backendRepository = backendRepository;
    }

    private Map<String, Double> countries;

    @PostConstruct
    void loadCountries() {
        countries.keySet().stream()
                .map(CountryDto::new)
                .forEach(backendRepository::save);
    }

    public Map<String, Double> getCountries() {
        return countries;
    }

    public void setCountries(Map<String, Double> countries) {
        this.countries = countries;
    }
}
