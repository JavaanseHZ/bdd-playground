package de.javaansehz.backend.persistance;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BackendRepository extends CrudRepository<CalculationDto, Long> {
    List<CalculationDto> findTop5ByOrderByIdDesc();
}
