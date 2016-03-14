package org.sovas.controller;

import org.sovas.dao.company.CompanyDao;
import org.sovas.model.Company;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CompanyController {

    @Autowired
    private CompanyDao companyDao;

    @RequestMapping(value = "/company", method = RequestMethod.GET)
    public List<Company> getAllCompany() { return companyDao.getAllCompany(); }

    @RequestMapping(value = "/company/{companyId}", method = RequestMethod.GET)
    public Company getCompany(@PathVariable Long companyId) { return companyDao.getCompany(companyId); }

    @RequestMapping(value = "/company", method = RequestMethod.POST)
    public void addCompany(@RequestBody Company company) { companyDao.addCompany(company); }

    @RequestMapping(value = "/company", method = RequestMethod.PUT)
    public Company updateCompany(@RequestBody Company company) { return companyDao.updateCompany(company); }

    @RequestMapping(value = "/company/{companyId}", method = RequestMethod.DELETE)
    public void deleteCompany(@PathVariable Long companyId) { companyDao.deleteCompany(companyId); }

    @RequestMapping(value = "/company/{companyId}/contractor/{memberId}", method = RequestMethod.PUT)
    public Company addContractor(@PathVariable Long companyId, @PathVariable Long memberId) {
        return companyDao.addContractor(companyId, memberId);
    }

}
