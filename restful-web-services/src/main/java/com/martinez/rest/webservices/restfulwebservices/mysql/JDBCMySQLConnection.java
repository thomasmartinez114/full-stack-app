package com.martinez.rest.webservices.restfulwebservices.mysql;

import java.sql.DriverManager;
import com.mysql.jdbc.Connection;

public class JDBCMySQLConnection {
	Connection conn = null;
	
	try {
		conn = (Connection)DriverManager.getConnection("jdbc:mysql:/localhost:3306//player_stats","root","<password>");
		
		if (conn!=null)
		{
			System.out.println("Connection to Database successfull!");
		}
	} catch (Exception e)
	{
		System.out.println("Connection FAILED to database");
	}
}
