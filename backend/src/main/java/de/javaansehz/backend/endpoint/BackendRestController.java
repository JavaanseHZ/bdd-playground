package de.javaansehz.backend.endpoint;

import de.javaansehz.backend.endpoint.model.Calculation;
import de.javaansehz.backend.endpoint.model.Country;
import de.javaansehz.backend.operation.PricingOperation;
import de.javaansehz.backend.persistance.BackendRepository;
import de.javaansehz.backend.persistance.CountryDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

import static java.util.stream.Collectors.toList;

@RestController
@RequestMapping(path = "/api")
public class BackendRestController {

    @Autowired
    BackendRepository backendRepository;

    @Autowired
    PricingOperation pricingOperation;

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/countries")
    public List<Country> getCountries() {
        return backendRepository.findAll().stream()
                .map(this::mapFromDto)
                .collect(toList());
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/contract/calculate")
    public double calculate(@Valid @RequestBody Calculation calculation) {
        return pricingOperation.calculatePremium(calculation);
    }

    private Country mapFromDto(CountryDto countryDto) {
        Country country = new Country();
        country.setName(countryDto.getName());
        return country;
    }
}
