package com.martinez.rest.webservices.restfulwebservices.mysql;

import java.sql.Connection;
import java.sql.DriverManager;

public class jdbcMySQLConnector {

	public static void main(String[] args) {
		String jdbcUrl="jdbc:mysql://localhost:3306/stats_players";
		String user="root";
		String pass="databas3";

		try {
			System.out.println("Connecting to database: "+jdbcUrl);
			
			Connection myConn= DriverManager.getConnection(jdbcUrl, user, pass);
			
			System.out.println("Connection to database is successful!");
			myConn.close();
		}
		catch(Exception exc) {
			exc.printStackTrace();
		}

	}

}
