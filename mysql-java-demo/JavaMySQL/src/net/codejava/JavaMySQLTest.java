package net.codejava;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class JavaMySQLTest {

	public static void main(String[] args) {
		String url = "jdbc:mysql://localhost:3306/db_name";
		String username = "root";
		String password = "Password123#";
		
		try {
			Connection connection = DriverManager.getConnection(url, username, password);
			System.out.println("Connected to the database!");
			
			// Add new row of data to DB
			String sql = "INSERT INTO customer (firstname, lastname) VALUES (?, ?)";
			PreparedStatement statement = connection.prepareStatement(sql);
			statement.setString(1,  "Thomas"); // this will be placed in 1st ?
			statement.setString(2,  "Martinez"); // this will be place in 2nd ?
			
			int rows = statement.executeUpdate();
			if (rows > 0) {
				System.out.println("A row has been inserted.");
			}
			
			statement.close();
			connection.close();
			
		} catch (SQLException e) {
			System.out.println("Oops, error!");
			e.printStackTrace();
		}
	}

}
