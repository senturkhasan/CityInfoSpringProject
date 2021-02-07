package com.city_evolitiondb.city_evolitiondb_pr.model;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Id;
import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
@Entity(name="city")// işaretlediğiniz sınıflar için, veritabanında tabloları ve sütunlarını otomatik oluşturur.
@Table(name="CITY")
public class City {
	@Id
	@GeneratedValue(strategy =GenerationType.AUTO)
	private long id;
	
	public String getArea() {
		return area;
	}

	public void setArea(String area) {
		this.area = area;
	}

	@Column(name="city_name")
	private String cityName;
	
	@Column(name="city_town")
	private String cityTown;
	
	@Column(name="area")
	private String area;
	
	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getCityName() {
		return cityName;
	}

	public void setCityName(String cityName) {
		this.cityName = cityName;
	}

	public String getCityTown() {
		return cityTown;
	}

	public void setCityTown(String cityTown) {
		this.cityTown = cityTown;
	}
}
