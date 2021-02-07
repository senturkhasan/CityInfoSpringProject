package com.city_evolitiondb.city_evolitiondb_pr.exception;

import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus
public class ResourceNotFoundException  extends RuntimeException{
	
	private static final long serialVersionUID=1L;
	public ResourceNotFoundException (String message) {
		super(message);
	}
	public ResourceNotFoundException (String message,Throwable throwable) {
		super(message,throwable);
	}
}
