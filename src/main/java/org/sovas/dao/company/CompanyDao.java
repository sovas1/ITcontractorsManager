package org.sovas.dao.company;

import org.sovas.model.Company;

import java.util.List;

public interface CompanyDao {

    void addCompany(Company company);

    Company updateCompany(Company company);

    void deleteCompany(Long companyId);

    List<Company> getAllCompany();

    Company getCompany(Long companyId);

    Company addContractor(Long companyId, Long contractorId);

}
