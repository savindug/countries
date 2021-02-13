package com.savindu;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class CountriesApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(CountriesApiApplication.class, args);
	}

	/**
	 * implement WebMvcConfigurer to add cores configuration only to allow access
	 * from origin http://127.0.0.1:4200
	 */
	// @Configuration
	// public class AppConf implements WebMvcConfigurer {

	// @Override
	// public void addCorsMappings(CorsRegistry registry) {
	// registry.addMapping("/**")
	// .allowedOrigins("http://localhost:4200")
	// .allowedMethods("*");
	// }
	// }

}
