package de.javaansehz.backend.endpoint.errorhandling;

import de.javaansehz.backend.endpoint.model.ErrorMessage;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@ControllerAdvice
public class ValidationResultErrorHandler
  extends ResponseEntityExceptionHandler {

    @Override
    protected ResponseEntity<Object>
    handleMethodArgumentNotValid(MethodArgumentNotValidException ex,
                                 HttpHeaders headers,
                                 HttpStatus status, WebRequest request) {
        Map<String, Object> body = new LinkedHashMap<>();
        List<ErrorMessage> errorMessages = ex.getBindingResult().getFieldErrors()
                .stream()
                .map(this::createMessage)
                .collect(Collectors.toList());
        body.put("errors", errorMessages);

        return new ResponseEntity<>(body, headers, status);
    }

    private ErrorMessage createMessage(FieldError fieldError) {
        return new ErrorMessage(
                fieldError.getField(),
                fieldError.getDefaultMessage());
    }


}
