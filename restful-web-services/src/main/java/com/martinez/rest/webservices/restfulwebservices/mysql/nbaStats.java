package com.martinez.rest.webservices.restfulwebservices.mysql;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class nbaStats {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idPlayer;
    private String firstName;
    private String lastName;
    private String position;
    private String team;
    private float pointsPerGame;
     
    protected PlayerStats() {
    }
 
    protected PlayerStats(String firstName, String lastName, String position, String team, float pointsPerGame) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.position = position;
        this.team = team;
        this.pointsPerGame = pointsPerGame;
    }
 
    // getters and setters are hidden for brevity
 
    @Override
    public String toString() {
        return idPlayer + ". " + lastName + ", " + firstName + " " + position + " " + team + " " + pointsPerGame;     
    }  
}
