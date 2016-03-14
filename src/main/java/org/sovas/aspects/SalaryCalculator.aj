package org.sovas.aspects;

import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

@Aspect
@Component
public class SalaryCalculator {

    private final org.slf4j.Logger log = LoggerFactory.getLogger(this.getClass());

    @Before("contractorConstructor()")
    public void calculate() {
        log.debug("Constructor invoked");
    }


    @Pointcut("execution( org.sovas.model.Contractor.new(..))")
    public void contractorConstructor() {
    }

}
