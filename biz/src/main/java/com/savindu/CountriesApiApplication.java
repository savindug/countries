package com.savindu;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class CountriesApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(CountriesApiApplication.class, args);
	}

	// @Configuration
	// public class AppConf implements WebMvcConfigurer {

	// 	@Override
	// 	public void addCorsMappings(CorsRegistry registry) {
	// 		registry.addMapping("/**")
	// 				.allowedOrigins("http://localhost:4200")
	// 				.allowedMethods("*");
	// 	}
	// }

}
