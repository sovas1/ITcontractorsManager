package org.sovas.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class Contractor {

    @Id
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String technology;

    private Byte yearsOfExperience;

    @ManyToOne
    @JoinColumn(name = "contractorId")
    @JsonIgnore
    private Company company;

    @Override
    public String toString() {
        return "Contractor{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", technology='" + technology + '\'' +
                ", yearsOfExperience=" + yearsOfExperience +
                '}';
    }
}
