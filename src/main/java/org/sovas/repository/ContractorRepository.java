package org.sovas.repository;

import org.sovas.model.Contractor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ContractorRepository extends JpaRepository<Contractor,Long> {
    @Query("FROM Contractor")
    List<Contractor> getAllContractors();
}
