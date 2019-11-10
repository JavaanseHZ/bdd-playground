package de.javaansehz.backend.persistance;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BackendRepository extends JpaRepository<CountryDto, Long> {
}
