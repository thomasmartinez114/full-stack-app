package com.tmartinez.rest.webservices.restfulwebservices;

import org.springframework.web.bind.annotation.RestController;

//Controller
@RestController
public class HelloWorldController {
	
	//GET
	//URI - /hello-world
	//method - "Hello world"
	public String helloWorld() {
		return "Hello World";
	}

}
