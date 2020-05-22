package net.codejava;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class JavaMySQLTest {

	public static void main(String[] args) {
		String url = "jdbc:mysql://localhost:3306/db_name";
		String username = "root";
		String password = "Password123#";
		
		try {
			Connection connection = DriverManager.getConnection(url, username, password);
			System.out.println("Connected to the database!");
			
/*			// Add new row of data to DB
			String sql = "INSERT INTO customer (firstname, lastname) VALUES (?, ?)";
			PreparedStatement statement = connection.prepareStatement(sql);
			statement.setString(1,  "Nasir"); // this will be placed in 1st ?
			statement.setString(2,  "Jones"); // this will be place in 2nd ?
			
			int rows = statement.executeUpdate();
			if (rows > 0) {
				System.out.println("A row has been inserted.");
				}
				
				statement.close();
*/
			
			// Selecting the data
			String sql = "SELECT * FROM customer";
			Statement statement = connection.createStatement();
			ResultSet result = statement.executeQuery(sql);
			
			int count = 0;
			
			while (result.next()) {
				String firstName = result.getString("firstname");
				String lastName = result.getString("lastname");
				count++;
				System.out.println("Customer " + count + ": " + firstName + " " + lastName);
			}
			
			connection.close();
			
		} catch (SQLException e) {
			System.out.println("Oops, error!");
			e.printStackTrace();
		}
	}

}
