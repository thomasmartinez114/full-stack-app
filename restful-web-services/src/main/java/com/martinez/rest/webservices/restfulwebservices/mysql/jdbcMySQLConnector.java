package com.martinez.rest.webservices.restfulwebservices.mysql;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;

public class jdbcMySQLConnector {

	public static void main(String[] args) {
		String jdbcUrl="jdbc:mysql://localhost:3306/nba_stats";
		String user="root";
		String pass="databas3";

		try {
			System.out.println("Connecting to database: "+jdbcUrl);
			
			// Connection to database
			Connection myConn= DriverManager.getConnection(jdbcUrl, user, pass);
			
			System.out.println("Connection to database is successful!");
			
			// Create a statement
			Statement myStmt = myConn.createStatement();
			
			// Execute SQL Query
			ResultSet result = myStmt.executeQuery("select * from stats");
			
			// Process the result set
			while (result.next()) {
				System.out.println(result.getString("firstName") + " " + result.getString("lastName") + " " + result.getString("position") + " " + result.getString("team") + " " + result.getString("pointsPerGame"));
			}
			myConn.close();
		}
		catch(Exception exc) {
			exc.printStackTrace();
		}

	}

}
