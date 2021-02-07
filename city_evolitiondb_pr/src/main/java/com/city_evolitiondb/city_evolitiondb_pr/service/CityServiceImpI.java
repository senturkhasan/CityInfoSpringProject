package com.city_evolitiondb.city_evolitiondb_pr.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.city_evolitiondb.city_evolitiondb_pr.exception.ResourceNotFoundException;
import com.city_evolitiondb.city_evolitiondb_pr.model.City;
import com.city_evolitiondb.city_evolitiondb_pr.repository.CityRepository;

@Service
@Transactional
public class CityServiceImpI implements CityService{
	
	@Autowired
	private CityRepository cityRepository;
	
	
	@Override
	public City createCity(City city) {
		return cityRepository.save(city);
	}
	@Override
	public City updateCity(City city) {
		Optional <City> productDb = this.cityRepository.findById(city.getId());
		
		if(productDb.isPresent()) {
			City cityUpdate =productDb.get();
			cityUpdate.setId(city.getId());
			cityUpdate.setArea(city.getArea());
			cityUpdate.setCityName(city.getCityName());
			cityUpdate.setCityTown(city.getCityTown());
			cityRepository.save(cityUpdate);
			return cityUpdate; 
		}else {
			throw new ResourceNotFoundException("Record not found with id:"+city.getId()); 
		}
		
	}

	@Override
	public List<City> getAllCity() {
		
		return this.cityRepository.findAll();
	}

	@Override
	public City getCityById(long citytId) {
		Optional <City> cityDb = this.cityRepository.findById(citytId);
		if(cityDb.isPresent()) {
			return cityDb.get();
		}else {
			throw new ResourceNotFoundException("Record not found with id:"+citytId); 
		}
	}

	@Override
	public void deleteCity(long cityId) {
		Optional <City> cityDb = this.cityRepository.findById(cityId);
		if(cityDb.isPresent()) {
			cityRepository.delete(cityDb.get());
		}else {
			throw new ResourceNotFoundException("Record not found with id:"+cityId); 
		}
		
	}

}
