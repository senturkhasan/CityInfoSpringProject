package com.city_evolitiondb.city_evolitiondb_pr.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.city_evolitiondb.city_evolitiondb_pr.model.City;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface CityRepository extends JpaRepository<City, Long>{

}
