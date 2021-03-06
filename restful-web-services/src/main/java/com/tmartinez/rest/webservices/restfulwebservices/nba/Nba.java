package com.tmartinez.rest.webservices.restfulwebservices.nba;

//import java.util.Date;

public class Nba {

	private long id;
//	private String username;
	private String firstName;
	private String lastName;
	private String position;
	private String team;
	private String pointsPerGame;
	
	protected Nba() {
		
	}

	public Nba(long id, String firstName, String lastName, String position, String team, String pointsPerGame) {
		super();
		this.id = id;
//		this.username = username;
		this.firstName = firstName;
		this.lastName = lastName;
		this.position = position;
		this.team = team;
		this.pointsPerGame = pointsPerGame;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}
	
//	public String getUsername() {
//		return username;
//	}
//
//	public void setUsername(String username) {
//		this.username = username;
//	}

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

	public String getPointsPerGame() {
		return pointsPerGame;
	}

	public void setPointsPerGame(String pointsPerGame) {
		this.pointsPerGame = pointsPerGame;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + (int) (id ^ (id >>> 32));
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Nba other = (Nba) obj;
		if (id != other.id)
			return false;
		return true;
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
