package com.martinez.rest.webservices.restfulwebservices.mysql;

import com.martinez.rest.webservices.restfulwebservices.mysql.utilities.Util;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;


public class jdbcMySQLConnector {

	public static void main(String[] args) {
		try {
			System.out.println("Connecting to database: "+ Util.jdbcUrl);
			
			// Connection to database
			Connection myConn= DriverManager.getConnection(Util.jdbcUrl, Util.user, Util.pass);
			
			System.out.println("Connection to database is successful!");
			
			// Create a statement
			Statement myStmt = myConn.createStatement();
			

			
//			// inserting data to MySQL
//			String sql = "insert into stats "
//					+ " (firstName, lastName, position, team, pointsPerGame)"
//					+ " values ('Young', 'Trae', 'PG', 'ATL', '12.5')";
//
//			System.out.println("New value added");
//
//			myStmt.executeUpdate(sql);
//
//			// Execute SQL Query
//			ResultSet result = myStmt.executeQuery("select * from stats");
//
//			// Process the result set
//			while (result.next()) {
//				System.out.println(result.getString("firstName") + " " + result.getString("lastName") + " " + result.getString("position") + " " + result.getString("team") + " " + result.getString("pointsPerGame"));
//			}
			myConn.close();
		}
		catch(Exception exc) {
			exc.printStackTrace();
		}

	}

}
