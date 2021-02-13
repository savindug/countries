package com.savindu.Repository;

import com.savindu.model.Country;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * extend JpaCountryRepository in order to retrieve the default data access layer crud functions
 * save()
 * findAll()
 * findById()
 * delete()
 */
public interface JpaCountryRepository extends JpaRepository<Country, Long> {

}
