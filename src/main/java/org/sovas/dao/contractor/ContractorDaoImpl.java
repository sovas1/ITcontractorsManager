package org.sovas.dao.contractor;

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
public class ContractorDaoImpl implements ContractorDao {

    private Logger log = LoggerFactory.getLogger(this.getClass());

    @Autowired
    private ContractorRepository contractorRepository;

    @Autowired
    private CompanyRepository companyRepository;

    @Override
    public void addContractor(Contractor contractor) {
        contractorRepository.save(contractor);
        log.debug("Contractor saved successfully");
    }

    @Override
    public Contractor updateContractor(Contractor contractor) {
        Contractor oldContractor = contractorRepository.findOne(contractor.getContractorId());
        oldContractor.setContractorName(contractor.getContractorName());
        oldContractor.setCompany(contractor.getCompany());
        oldContractor.setContractorId(contractor.getContractorId());
        oldContractor.setTechnology(contractor.getTechnology());
        oldContractor.setYearsOfExperience(contractor.getYearsOfExperience());
        oldContractor.setMonthlySalary(contractor.getMonthlySalary());
        log.debug("{} updated", oldContractor);
        return contractorRepository.saveAndFlush(oldContractor);
    }

    @Override
    public void deleteContractor(Long contractorId) {
        Contractor contractor = contractorRepository.findOne(contractorId);
        Company company;
        if(contractor.getCompany() != null) {

            Long companyId = contractor.getCompany().getCompanyId();
            company = companyRepository.findOne(companyId);

            //removing contractor from list in company
            company.getContractorsList().remove(contractor);
            company.getIdList().remove(contractorId);
        }


        contractorRepository.delete(contractorId);
        log.debug("Contractor with id {} deleted successfully", contractorId);
    }

    @Override
    public List<Contractor> getAllContractors() {
        return contractorRepository.getAllContractors();
    }

    @Override
    public Contractor getContractor(Long contractorId) {
        return contractorRepository.getOne(contractorId);
    }

    @Override
    public List<Contractor> searchByTechnology(String technology) {
        log.debug("List: ", contractorRepository.searchByTechnology(technology));
        return contractorRepository.searchByTechnology(technology);
    }
}
