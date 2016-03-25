package org.sovas.repository;

import org.sovas.model.Company;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface CompanyRepository  extends JpaRepository<Company,Long>{
    @Query("from Company")
    List<Company> getAllCompany();
}
