package org.sovas.repository;

import org.sovas.model.Contractor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ContractorRepository extends JpaRepository<Contractor,Long> {
    @Query("from Contractor")
    List<Contractor> getAllContractors();

    @Query("select c from Contractor c where c.technology = :technology")
    List<Contractor> searchByTechnology(@Param("technology") String technology);
}
