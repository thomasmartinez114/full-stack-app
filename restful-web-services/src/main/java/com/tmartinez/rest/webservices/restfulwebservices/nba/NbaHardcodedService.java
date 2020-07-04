package com.tmartinez.rest.webservices.restfulwebservices.nba;

import java.util.ArrayList;
//import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class NbaHardcodedService {
	
	private static List<Nba> nbas = new ArrayList();
	private static int idCounter = 0;
	
	static {
		nbas.add(new Nba(++idCounter, "LeBron", "James", "SF", "LAL", "23.6"));
		nbas.add(new Nba(++idCounter, "Kobe", "Bryant", "SG", "LAL", "24.8"));
		nbas.add(new Nba(++idCounter, "Jayson", "Tatum", "SF", "BOS", "25.0"));
		nbas.add(new Nba(++idCounter, "Zion", "Williamson", "PF", "NOP", "15.0"));
		nbas.add(new Nba(++idCounter, "Ja", "Morant", "PG", "MEM", "18.5"));
	}
	
	public List<Nba> findAll() {
		return nbas;
	}
	
	// Updating & Saving Nba
	public Nba save(Nba nba) {
		if(nba.getId()==-1 || nba.getId()==0) {
			nba.setId(++idCounter);
			nbas.add(nba);
		} else {
			 deleteById(nba.getId());
			 nbas.add(nba);
		}
		return nba;
	}
	
	public Nba deleteById(long id) {
		Nba nba = findById(id);
		
		if(nba==null) return null;
		
		if(nbas.remove(nba)) {
			return nba;
		}
		return null;
	}

	public Nba findById(long id) {
		for (Nba nba:nbas) {
			if(nba.getId() == id) {
				return nba;
			}
		}
		return null;
	}
	
	

}

//private long id;
//private String firstName;
//private String lastName;
//private String position;
//private String team;
//private double pointPerGame;