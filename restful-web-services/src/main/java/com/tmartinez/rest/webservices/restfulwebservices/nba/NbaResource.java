package com.tmartinez.rest.webservices.restfulwebservices.nba;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

//import com.tmartinez.rest.webservices.restfulwebservices.nba.Nba;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class NbaResource {
	
	@Autowired
	private NbaHardcodedService nbaService;
	
	
	@GetMapping("/nba/stats")
	public List<Nba> getAllNbas(){
//		Thread.sleep(3000);
		return nbaService.findAll();
	}
	
	@GetMapping("/nba/stats/{id}")
	public Nba getNba(@PathVariable long id){
//		Thread.sleep(3000);
		return nbaService.findById(id);
	}
	
	
	// DELETE
	// /nba/stats/{id}
	@DeleteMapping("nba/stats/{id}")
	public ResponseEntity<Void> deleteNba(@PathVariable long id) {
		
		Nba nba = nbaService.deleteById(id);
		if(nba!=null) {
			return ResponseEntity.noContent().build();
		}
		
		return ResponseEntity.notFound().build();
	}
	
}
