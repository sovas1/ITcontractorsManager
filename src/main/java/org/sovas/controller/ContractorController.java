package org.sovas.controller;

import org.sovas.dao.contractor.ContractorDao;
import org.sovas.model.Contractor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ContractorController {

    @Autowired
    private ContractorDao contractorDao;

    @RequestMapping(value = "/contractor", method = RequestMethod.GET)
    public List<Contractor> getAllContractors() { return contractorDao.getAllContractors(); }

    @RequestMapping(value = "/contractor/{contractorId}", method = RequestMethod.GET)
    public String getContractor(@PathVariable Long contractorId) { return contractorDao.getContractor(contractorId).toString(); }

    @RequestMapping(value = "/contractor", method = RequestMethod.POST)
    public void addContractor(@RequestBody Contractor contractor) { contractorDao.addContractor(contractor); }

    @RequestMapping(value = "/contractor", method = RequestMethod.PUT)
    public Contractor updateContractor(@RequestBody Contractor contractor) { return contractorDao.updateContractor(contractor); }

    @RequestMapping(value = "/contractor/{contractorId}", method = RequestMethod.DELETE)
    public void deleteContractor(@PathVariable Long contractorId) { contractorDao.deleteContractor(contractorId); }

}
