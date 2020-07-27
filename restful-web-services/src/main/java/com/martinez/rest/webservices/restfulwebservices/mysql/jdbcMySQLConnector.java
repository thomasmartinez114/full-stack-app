package com.martinez.rest.webservices.restfulwebservices.mysql;

import java.sql.Connection;
import java.sql.DriverManager;

public class jdbcMySQLConnector {

	public static void main(String[] args) {
		String jdbcUrl="jdbc:mysql://localhost:3306/hb_student_tracker?useSSL=false";
		String user="";
		String pass="";

		try {
			System.out.println("Connecting to database: "+jdbcUrl);
			
			Connection myConn= DriverManager.getConnection(jdbcUrl, user, pass);
			
			System.out.println("Connection successful!!!");
			myConn.close();
		}
		catch(Exception exc) {
			exc.printStackTrace();
		}

	}

}
