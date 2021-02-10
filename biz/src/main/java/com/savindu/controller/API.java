package com.savindu.controller;

import com.savindu.util.JpaCountryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api")
public class API {

    @Autowired
    JpaCountryRepository jcr;

    @GetMapping("/")
    public String home(){
        return "hello";
    }
}
