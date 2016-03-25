import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.sovas.model.Company;
import org.sovas.model.Contractor;

import java.util.ArrayList;
import java.util.List;

public class JUnitModelsTest {

    Company company;
    List<Contractor> contractorList;

    @Before
    public void initialize() {

        company = new Company();
        contractorList = new ArrayList<>();

        company.setContractorsList(new ArrayList<>());

        for(int i = 0; i < 3; i++){
            contractorList.add(new Contractor());
            contractorList.get(i).setMonthlySalary(10000);
            company.addContractor(contractorList.get(i));
        }

    }

    @Test
    public void salaryCalc() {
        Assert.assertEquals(360000, company.getAnnualSalarySum(), 0.0);
    }

}
