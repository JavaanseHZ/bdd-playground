package de.javaansehz.backend.endpoint;

import de.javaansehz.backend.endpoint.model.Calculation;
import de.javaansehz.backend.endpoint.model.Country;
import de.javaansehz.backend.operation.PricingOperation;
import de.javaansehz.backend.persistance.BackendRepository;
import de.javaansehz.backend.persistance.CountryDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static java.util.stream.Collectors.toList;

@RestController
@RequestMapping(path = "/api")
public class BackendRestController {

    @Autowired
    BackendRepository backendRepository;
    @Autowired
    PricingOperation pricingOperation;

    @GetMapping("/countries")
    public List<Country> getCountries() {
        return backendRepository.findAll().stream()
                .map(this::mapFromDto)
                .collect(toList());
    }

    @PostMapping("/contract/calculate")
    public double calculate(@RequestBody Calculation calculation) {
        pricingOperation.calculatePremium(calculation);
        return calculation.getPremium();
    }

    private Country mapFromDto(CountryDto countryDto) {
        Country country = new Country();
        country.setName(countryDto.getName());
        return country;
    }

}
