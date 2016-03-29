package org.sovas.dao.company;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.sovas.model.Company;
import org.sovas.model.Contractor;
import org.sovas.repository.CompanyRepository;
import org.sovas.repository.ContractorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CompanyDaoImpl implements CompanyDao {

    private final Logger log = LoggerFactory.getLogger(this.getClass());

    @Autowired
    private CompanyRepository companyRepository;

    @Autowired
    private ContractorRepository contractorRepository;

    @Override
    public void addCompany(Company company) {
        companyRepository.save(company);
        log.debug("Company saved successfully");
    }

    @Override
    public Company updateCompany(Company company) {
        Company oldCompany = companyRepository.findOne(company.getCompanyId());
        oldCompany.setCompanyName(company.getCompanyName());
        log.debug("{} updated", oldCompany);
        return companyRepository.saveAndFlush(oldCompany);
    }

    @Override
    public void deleteCompany(Long companyId) {
        companyRepository.delete(companyId);
        log.debug("Company with id {} deleted successfully", companyId);
    }

    @Override
    public List<Company> getAllCompany() {
        return companyRepository.getAllCompany();
    }

    @Override
    public Company getCompany(Long companyId) {
        return companyRepository.findOne(companyId);
    }

    @Override
    public Company addContractor(Long companyId, Long contractorId) {
        Company company = companyRepository.findOne(companyId);
        Contractor contractor = contractorRepository.findOne(contractorId);

        boolean hasThisContractorAlready = false;
        for (Contractor c : company.getContractorsList()) {
            if(c.getContractorId() == contractorId) {
                hasThisContractorAlready = true;
                break;
            }
        }

        if(hasThisContractorAlready){
            log.debug("Assignment failed because this company has that contractor already on list");
            return null;
        }

        contractor.setCompany(company);
        company.addContractor(contractor);
        log.debug("{} updated", company);
        log.debug("{} updated", contractor);

        return companyRepository.saveAndFlush(company);
    }
}
