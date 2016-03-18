package org.sovas.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import javax.persistence.*;
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

    //@JsonIgnore
    @OneToMany(mappedBy = "company", cascade = CascadeType.ALL)
    private List<Contractor> contractorsList;

    public boolean addContractor(Contractor contractor) {
        annualSalarySum += contractor.getMonthlySalary() * 12;
        return contractorsList.add(contractor);
    }

    @Override
    public String toString() {
        return "Company{" +
                "name='" + companyName + '\'' +
                ", id=" + companyId +
                '}';
    }
}
