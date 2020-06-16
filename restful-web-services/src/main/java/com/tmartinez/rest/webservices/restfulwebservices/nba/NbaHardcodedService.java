package com.tmartinez.rest.webservices.restfulwebservices.nba;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class NbaHardcodedService {
	
	private static List<Nba> nbas = new ArrayList();
	private static int idCounter = 0;
	
	static {
		nbas.add(new Nba(++idCounter, "tmartinez", "My favorite player is Paul Pierce", new Date(), false));
		nbas.add(new Nba(++idCounter, "tmartinez", "My favorite player is Kobe Bryant", new Date(), false));
		nbas.add(new Nba(++idCounter, "tmartinez", "My favorite player is LeBron James", new Date(), false));
	}
	
	public List<Nba> findAll() {
		return nbas;
	}

}
