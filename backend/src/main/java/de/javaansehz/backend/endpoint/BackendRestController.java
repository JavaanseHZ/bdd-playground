package de.javaansehz.backend.endpoint;

import de.javaansehz.backend.endpoint.model.Calculation;
import de.javaansehz.backend.operation.PricingOperation;
import de.javaansehz.backend.persistance.BackendRepository;
import de.javaansehz.backend.persistance.CalculationDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.StreamSupport;

import static java.util.stream.Collectors.toList;

@RestController
@RequestMapping(path = "/api/contract")
public class BackendRestController {

    @Autowired
    BackendRepository backendRepository;
    @Autowired
    PricingOperation pricingOperation;

    @GetMapping()
    public List<Calculation> getPreviousFiveCalcuations() {
        return backendRepository.findTop5ByOrderByIdDesc().stream()
                .map(this::mapFromDto)
                .collect(toList());
    }

    @PostMapping("/calculate")
    public double calculate(@RequestBody Calculation calculation) {
        pricingOperation.calculatePremium(calculation);
        backendRepository.save(mapToDto(calculation));
        return calculation.getPremium();
    }

    private CalculationDto mapToDto(Calculation calculation) {
        CalculationDto calculationDto = new CalculationDto();
        calculationDto.setCountry(calculation.getCountry());
        calculationDto.setDateOfBirth(calculation.getDateOfBirth());
        calculationDto.setName(calculation.getName());
        calculationDto.setPremium(calculation.getPremium());
        return calculationDto;
    }

    private Calculation mapFromDto(CalculationDto calculationDto) {
        Calculation calculation = new Calculation();
        calculation.setCountry(calculationDto.getCountry());
        calculation.setDateOfBirth(calculationDto.getDateOfBirth());
        calculation.setName(calculationDto.getName());
        calculation.setPremium(calculationDto.getPremium());
        return calculation;
    }

}
