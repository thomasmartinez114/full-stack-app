package com.martinez.rest.webservices.restfulwebservices.mysql;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

public class jdbcMySQLConnector {

	public static void main(String[] args) {
		String jdbcUrl="jdbc:mysql://localhost:3306/nba_stats";
		String user="root";
		String pass="databas3";

		try {
			System.out.println("Connecting to database: "+jdbcUrl);
			
			Connection myConn= DriverManager.getConnection(jdbcUrl, user, pass);
			
			System.out.println("Connection to database is successful!");
			
			// Query to grab all data
			PreparedStatement statement = myConn.prepareStatement("select * from stats;");
			
			// Creating a variable to execute the query
			ResultSet result = statement.executeQuery();
			
			while(result.next())
			{
				System.out.println(result.getString(1) + " " + result.getString(2));
			}
			
			myConn.close();
		}
		catch(Exception exc) {
			exc.printStackTrace();
		}

	}

}
