package com.tmartinez.rest.webservices.restfulwebservices.nba;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

//import com.tmartinez.rest.webservices.restfulwebservices.nba.Nba;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class NbaResource {
	
	@Autowired
	private NbaHardcodedService nbaService;
	
	
	@GetMapping("/nba/stats")
	public List<Nba> getAllNbas() {
		return nbaService.findAll();
	}
	
//	@GetMapping("/{username}/players/nbas")
//	public List<Nba> getAllNbas(@PathVariable String username) {
//		return nbaService.findAll();
//	}
}
