import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.sovas.model.Company;
import org.sovas.model.Contractor;

import java.util.ArrayList;

public class JUnitModelsTest {

    Company company = new Company();
    Contractor contractorOne = new Contractor();
    Contractor contractorTwo = new Contractor();
    Contractor contractorThree = new Contractor();

    @Before
    public void initialize() {

        company.setContractorsList(new ArrayList<>());

        contractorOne.setMonthlySalary(10000);
        contractorTwo.setMonthlySalary(10000);
        contractorThree.setMonthlySalary(10000);

        company.addContractor(contractorOne);
        company.addContractor(contractorTwo);
        company.addContractor(contractorThree);
    }

    @Test
    public void salaryCalc() {
        Assert.assertEquals(360000, company.getAnnualSalarySum(), 0.0);
    }

}
