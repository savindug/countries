package com.savindu.util;

import com.savindu.model.Country;
import org.springframework.data.jpa.repository.JpaRepository;

public interface JpaCountryRepository extends JpaRepository<Country, Integer> {

}
