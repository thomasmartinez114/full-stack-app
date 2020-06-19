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
		nbas.add(new Nba(++idCounter, "LeBron", "James", "SF", "LAL", 25.0));
		nbas.add(new Nba(++idCounter, "Kobe", "Bryant", "SG", "LAL", 27.0));
		nbas.add(new Nba(++idCounter, "Jayson", "Tatum", "SF", "BOS", 22.0));
		nbas.add(new Nba(++idCounter, "Zion", "Williamson", "PF", "NOP", 25.0));
	}
	
	public List<Nba> findAll() {
		return nbas;
	}

}

//private long id;
//private String firstName;
//private String lastName;
//private String position;
//private String team;
//private double pointPerGame;