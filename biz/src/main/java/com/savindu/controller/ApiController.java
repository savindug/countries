package com.savindu.controller;

import com.savindu.exceprion.ResourceNotFoundException;
import com.savindu.model.Country;
import com.savindu.Repository.JpaCountryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/rest/v2")
public class ApiController {

    @Autowired
    JpaCountryRepository jpaCountryRepository;

    @GetMapping("/")
    public String home() {
        return "hello";
    }

    /**
     * route for post country data
     * @param country
     * @return
     * @throws ResourceNotFoundException
     */
    @PostMapping("/country")
    public ResponseEntity<Country> createCountry(@RequestBody Country country) throws ResourceNotFoundException {
        Country _country = jpaCountryRepository.save(
                new Country(country.getName(), country.getRegion(), country.getCurrency(), country.getCountryCode()));
        return new ResponseEntity<>(_country, HttpStatus.CREATED);

    }

    /**
     * route for get all country data
     * @return
     */
    @GetMapping("/countries")
    public ResponseEntity<Iterable<Country>> getAllCountries() {
        return ResponseEntity.ok().body(jpaCountryRepository.findAll());
    }

    /**
     * route for get specific country data
     * @param id
     * @return
     * @throws ResourceNotFoundException
     */
    @GetMapping("/country/{id}")
    public ResponseEntity<Country> getCountry(@PathVariable(value = "id") long id) throws ResourceNotFoundException {
        Country _country = jpaCountryRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Country not found"));
        return ResponseEntity.ok().body(_country);
    }

    /**
     * route for update country data
     * @param id
     * @param country
     * @return
     * @throws ResourceNotFoundException
     */
    @PutMapping("/country/{id}")
    public ResponseEntity<Country> updateCountry(@PathVariable(value = "id") long id, @RequestBody Country country)
            throws ResourceNotFoundException {
        Country _country = jpaCountryRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Country not found"));

        _country.setName(country.getName());
        _country.setRegion(country.getRegion());
        _country.setCurrency(country.getCurrency());
        _country.setCountryCode(country.getCountryCode());
        jpaCountryRepository.save(_country);

        return ResponseEntity.ok().body(_country);
    }

    /**
     * route for delete specific country data
     * @param id
     * @return
     * @throws Exception
     */
    @DeleteMapping("/country/{id}")
    public ResponseEntity<Country> deleteCountry(@PathVariable(value = "id") long id) throws Exception {
        Country _country = jpaCountryRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Country not found"));

        jpaCountryRepository.delete(_country);
        return new ResponseEntity<>(_country, HttpStatus.OK);
    }

}
