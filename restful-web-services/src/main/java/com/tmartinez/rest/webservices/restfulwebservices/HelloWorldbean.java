package com.tmartinez.rest.webservices.restfulwebservices;

public class HelloWorldBean {
	
	private String message;
	
	public HelloWorldBean(String message) {
		this.message = message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	@Override
	public String toString() {
		return String.format("HelloWorldBean [message=%s]", message);
	}
	
}
