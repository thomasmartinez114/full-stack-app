package net.codejava;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class JavaMySQLTest {

	public static void main(String[] args) {
		String url = "jdbc:mysql://localhost:3306/db_name";
		String username = "root";
		String password = "Password123#";
		
		try {
			Connection connection = DriverManager.getConnection(url, username, password);
			
			System.out.println("Connected to the database!");
		} catch (SQLException e) {
			System.out.println("Oops, error!");
			e.printStackTrace();
		}
	}

}
