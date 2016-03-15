package org.sovas;

import org.sovas.model.Contractor;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ApplicationStarter {

    public static void main(String[] args) {
        SpringApplication.run(ApplicationStarter.class, args);
        Contractor contractor = new Contractor();
        System.out.println(contractor.toString());
    }

}
