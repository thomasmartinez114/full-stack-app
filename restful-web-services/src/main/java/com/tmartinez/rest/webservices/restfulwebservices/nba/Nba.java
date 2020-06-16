package com.tmartinez.rest.webservices.restfulwebservices.nba;

import java.util.Date;

public class Nba {
	private long id;
	private String username;
	private String descripiton;
	private Date targetDate;
	private boolean isdone;

	public Nba(long id, String username, String descripiton, Date targetDate, boolean isdone) {
		super();
		this.id = id;
		this.username = username;
		this.descripiton = descripiton;
		this.targetDate = targetDate;
		this.isdone = isdone;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getDescripiton() {
		return descripiton;
	}

	public void setDescripiton(String descripiton) {
		this.descripiton = descripiton;
	}

	public Date getTargetDate() {
		return targetDate;
	}

	public void setTargetDate(Date targetDate) {
		this.targetDate = targetDate;
	}

	public boolean isIsdone() {
		return isdone;
	}

	public void setIsdone(boolean isdone) {
		this.isdone = isdone;
	}

}
