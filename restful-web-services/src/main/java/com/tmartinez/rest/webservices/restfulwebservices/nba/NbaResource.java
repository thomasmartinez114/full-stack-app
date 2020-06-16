package com.tmartinez.rest.webservices.restfulwebservices.nba;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.tmartinez.rest.webservices.restfulwebservices.nba.Nba;

@RestController
public class NbaResource {
	
	@Autowired
	private NbaHardcodedService nbaService;
	
	
	@GetMapping("/players/{lastName}/nbas")
	public List<Nba> getAllNbas(@PathVariable String lastName) {
		return nbaService.findAll();
	}
}
