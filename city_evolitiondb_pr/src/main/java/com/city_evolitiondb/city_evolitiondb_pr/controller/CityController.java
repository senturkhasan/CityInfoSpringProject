package com.city_evolitiondb.city_evolitiondb_pr.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.city_evolitiondb.city_evolitiondb_pr.model.City;
import com.city_evolitiondb.city_evolitiondb_pr.service.CityService;

@CrossOrigin(origins="http://localhost:3000")
@RestController
public class CityController {
	
	@Autowired
	private CityService cityService;
	
	@GetMapping("/cities")
	public ResponseEntity<List<City>> getAllCity(){
		return ResponseEntity.ok().body(cityService.getAllCity());
	}
	@GetMapping("/cities/{id}")
	public ResponseEntity<City> getAllCityById(@PathVariable long id){
		return ResponseEntity.ok().body(cityService.getCityById(id));
	}	
	@PostMapping("/cities")
	public ResponseEntity<City> createCity(@RequestBody City city){
		ResponseEntity<City> _responseEntity = null;
		List<City> city_list;
		city_list=cityService.getAllCity();
		
		if (!city_list.isEmpty()) {
			for (int i =0;i<city_list.size(); i++) {
				
				if (city.getCityName().equals(city_list.get(i).getCityName())&& 
				    city.getCityTown().equals(city_list.get(i).getCityTown())) {
					_responseEntity = null;
					
				}else {
					_responseEntity=ResponseEntity.ok().body(this.cityService.createCity(city));
				}
				
			}
			
		
		}else
		{
			_responseEntity=ResponseEntity.ok().body(this.cityService.createCity(city));
			
		}

		
	  return _responseEntity;
	}
	
	@PutMapping("/cities/{id}")
	public ResponseEntity<City> updateCity(@PathVariable long id, @RequestBody City city){
		city.setId(id);
		return ResponseEntity.ok().body(this.cityService.updateCity(city));
		
	}
	@DeleteMapping("/cities/{id}")
	public HttpStatus deleteCity(@PathVariable long id){
		this.cityService.deleteCity(id);
		return HttpStatus.OK;
		
	}
}
