package de.javaansehz.backend.endpoint.validaton;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;
import java.time.LocalDate;

public class AgeInRangeValidator implements ConstraintValidator<AgeInRange, LocalDate> {
 
    private int min;
    private int max;
 
    @Override
    public void initialize(AgeInRange constraintAnnotation) {
        this.min = constraintAnnotation.min();
        this.max = constraintAnnotation.max();
    }
 
    @Override
    public boolean isValid(LocalDate value, ConstraintValidatorContext context) {
        LocalDate minDate = LocalDate.now().minusYears(max);
        LocalDate maxDate = LocalDate.now().minusYears(min);
        return value == null
                || value.isEqual(minDate)
                || value.isEqual(maxDate)
                || (value.isAfter(minDate) && value.isBefore(maxDate));
    }
}