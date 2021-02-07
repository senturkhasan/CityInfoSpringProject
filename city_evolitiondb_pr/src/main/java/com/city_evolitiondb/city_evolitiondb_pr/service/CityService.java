package com.city_evolitiondb.city_evolitiondb_pr.service;

import java.util.List;

import com.city_evolitiondb.city_evolitiondb_pr.model.City;


public interface CityService {
	City createCity(City city);
	City updateCity(City city);
	List<City>getAllCity();
	City getCityById(long cityId );
	void deleteCity(long id);
}
