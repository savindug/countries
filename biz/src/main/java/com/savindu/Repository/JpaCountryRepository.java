package com.savindu.Repository;

import com.savindu.model.Country;
import org.springframework.data.jpa.repository.JpaRepository;

public interface JpaCountryRepository extends JpaRepository<Country, Long> {

}
