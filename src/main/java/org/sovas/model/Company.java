package org.sovas.model;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
public class Company {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(nullable = false)
    private String name;

    //@JsonIgnore
    @OneToMany(mappedBy = "company", cascade = CascadeType.ALL)
    private List<Contractor> contractorsList;

    public boolean addContractor(Contractor contractor) {
        return contractorsList.add(contractor);
    }

    @Override
    public String toString() {
        return "Company{" +
                "name='" + name + '\'' +
                ", id=" + id +
                '}';
    }
}
