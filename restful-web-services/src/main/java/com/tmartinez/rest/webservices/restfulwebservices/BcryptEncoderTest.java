package com.tmartinez.rest.webservices.restfulwebservices;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class BcryptEncoderTest {

	public static void main(String[] args) {
		BCryptPasswordEncoder encoder = new BcryptPasswordEncoder();
		String encodedString = encoder.encode("password1234@@");
		
		// TODO Auto-generated method stub

	}

}
