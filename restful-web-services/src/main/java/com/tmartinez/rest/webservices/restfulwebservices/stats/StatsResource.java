package com.tmartinez.rest.webservices.restfulwebservices.stats;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.tmartinez.rest.webservices.restfulwebservices.stats.Stats;

@RestController
public class StatsResource {
	
	@Autowired
	private StatHardCodeService statService;
	
	@GetMapping("/users/{username}/stats")
	public List<Stats> getAllStats(@PathVariable String username){
		return statService.findAll();
		
	}
}
