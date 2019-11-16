package de.javaansehz.backend.endpoint.validaton;

import javax.validation.Constraint;
import javax.validation.Payload;
import java.lang.annotation.*;

@Target({ElementType.METHOD, ElementType.FIELD, ElementType.PARAMETER})
@Retention(RetentionPolicy.RUNTIME)
@Documented
@Constraint(validatedBy = { AgeInRangeValidator.class })
public @interface AgeInRange {
    String message() default "Age not in Range";
 
    Class<?>[] groups() default {};
 
    Class<? extends Payload>[] payload() default {};
 
    int min() default Integer.MIN_VALUE;

    int max() default Integer.MAX_VALUE;
}