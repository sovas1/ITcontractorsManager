package org.sovas.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Data
public class Company {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long companyId;

    @Column(nullable = false)
    private String companyName;

    @Column
    @JsonProperty(access = JsonProperty.Access.READ_ONLY)
    private double annualSalarySum;

    @OneToMany(mappedBy = "company", cascade = CascadeType.ALL)
    private List<Contractor> contractorsList;

    @Column
    @JsonProperty(access = JsonProperty.Access.READ_ONLY)
    @ElementCollection(targetClass=Long.class)
    private List<Long> idList = new ArrayList<>();

    public void addContractor(Contractor contractor) {
        annualSalarySum += contractor.getMonthlySalary() * 12;
        contractorsList.add(contractor);
        idList.add(contractor.getContractorId());
    }

    public void updateAnnualSalarySum(Contractor contractor){
        annualSalarySum -= contractor.getMonthlySalary() * 12;
    }

    @Override
    public String toString() {
        return "Company{" +
                "name='" + companyName + '\'' +
                ", id=" + companyId +
                '}';
    }
}
