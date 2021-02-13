package com.savindu.exceprion;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 * this class handle exceptions type of ResourceNotFoundException and send Http
 * status of 404
 */
@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class ResourceNotFoundException extends Exception {
    /**
     *
     */
    private static final long serialVersionUID = 1L;

    /**
     * @param e
     */
    public ResourceNotFoundException(String e) {
        super(e);
    }
}
