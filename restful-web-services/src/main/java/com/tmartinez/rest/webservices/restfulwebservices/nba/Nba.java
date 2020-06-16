package com.tmartinez.rest.webservices.restfulwebservices.nba;

//import java.util.Date;

public class Nba {

	private long id;
	private String firstName;
	private String lastName;
	private String position;
	private String team;
	private double pointPerGame;

	public Nba(long id, String firstName, String lastName, String position, String team, double pointsPerGame) {
		super();
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.position = position;
		this.team = team;
		this.pointPerGame = pointsPerGame;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getPosition() {
		return position;
	}

	public void setPosition(String position) {
		this.position = position;
	}

	public String getTeam() {
		return team;
	}

	public void setTeam(String team) {
		this.team = team;
	}

	public double getPointPerGame() {
		return pointPerGame;
	}

	public void setPointPerGame(float pointPerGame) {
		this.pointPerGame = pointPerGame;
	}

//	private long id;
//	private String username;
//	private String descripiton;
//	private Date targetDate;
//	private boolean isdone;
//
//	public Nba(long id, String username, String descripiton, Date targetDate, boolean isdone) {
//		super();
//		this.id = id;
//		this.username = username;
//		this.descripiton = descripiton;
//		this.targetDate = targetDate;
//		this.isdone = isdone;
//	}
//
//	public long getId() {
//		return id;
//	}
//
//	public void setId(long id) {
//		this.id = id;
//	}
//
//	public String getUsername() {
//		return username;
//	}
//
//	public void setUsername(String username) {
//		this.username = username;
//	}
//
//	public String getDescripiton() {
//		return descripiton;
//	}
//
//	public void setDescripiton(String descripiton) {
//		this.descripiton = descripiton;
//	}
//
//	public Date getTargetDate() {
//		return targetDate;
//	}
//
//	public void setTargetDate(Date targetDate) {
//		this.targetDate = targetDate;
//	}
//
//	public boolean isIsdone() {
//		return isdone;
//	}
//
//	public void setIsdone(boolean isdone) {
//		this.isdone = isdone;
//	}

}
