package com.savindu.controller;

import com.savindu.model.Country;
import com.savindu.util.JpaCountryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/rest/v2")
public class API {

    @Autowired
    JpaCountryRepository jcr;

    @GetMapping("/")
    public String home(){
        return "hello";
    }

    @PostMapping("/country")
    public ResponseEntity<Country> create(@RequestBody Country country){
        try {
            Country _country = jcr
                    .save(new Country(country.getName()));
            return new ResponseEntity<>(_country, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/countries")
    public ResponseEntity<List<Country>> getAllTutorials(@RequestParam(required = false) String name) {
        try {
            List<Country> countryList = new ArrayList<Country>();

            if (name == null)
                jcr.findAll().forEach(countryList::add);

            if (countryList.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }

            return new ResponseEntity<>(countryList, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
