package de.javaansehz.backend;

import de.javaansehz.backend.endpoint.model.ErrorMessage;

import java.util.List;

public class ErrorResponse {
    private List<ErrorMessage> errors;

    public List<ErrorMessage> getErrors() {
        return errors;
    }

    public void setErrors(List<ErrorMessage> errors) {
        this.errors = errors;
    }
}