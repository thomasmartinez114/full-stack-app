package net.codejava;

import java.sql.Connection;
import java.sql.DriverManager;

public class JavaMySQLTest {

	public static void main(String[] args) {
		String url = "jdbc:mysql://localhost:3306/db_name";
		String username = "root";
		String password = 'Password123#';
		
		Connection connection = DriverManager.getConnection(url, username, password);
	}

}
