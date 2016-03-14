package org.sovas.dao.contractor;

import org.sovas.model.Contractor;

import java.util.List;

public interface ContractorDao {

    void addContractor(Contractor contractor);

    Contractor updateContractor(Contractor contractor);

    void deleteContractor(Long contractorId);

    List<Contractor> getAllContractors();

    Contractor getContractor(Long contractorId);

    List<Contractor> searchByTechnology(String technology);
}
