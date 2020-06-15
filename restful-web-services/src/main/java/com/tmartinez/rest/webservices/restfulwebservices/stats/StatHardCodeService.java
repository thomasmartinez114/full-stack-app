package com.tmartinez.rest.webservices.restfulwebservices.stats;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class StatHardCodeService {
	
	private static List<Stat> stats = new ArrayList();
	private static int idCounter = 0;
	
	static {
		stats.add(new Stat(++idCounter, "tmartinez", "My Favorite Player is Michael Redd", new Date(), false));
		stats.add(new Stat(++idCounter, "tmartinez", "My Favorite Player is Kevin Garnett", new Date(), false));
		stats.add(new Stat(++idCounter, "tmartinez", "My Favorite Player is Paul Pierce", new Date(), false));
	}
	
	public List<Stat> findAll() {
		return stats;
	}

}
