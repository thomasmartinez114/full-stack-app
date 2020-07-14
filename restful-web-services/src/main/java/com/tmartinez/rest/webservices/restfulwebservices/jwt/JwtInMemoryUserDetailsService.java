package com.tmartinez.rest.webservices.restfulwebservices.jwt;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class JwtInMemoryUserDetailsService implements UserDetailsService {

  static List<JwtUserDetails> inMemoryUserList = new ArrayList<>();

  static {
    inMemoryUserList.add(new JwtUserDetails(1L, "in28minutes",
        "$2a$10$3zHzb.Npv1hfZbLEU5qsdOju/tk2je6W6PnNnY.c1ujWPcZh4PL6e", "ROLE_USER_2"));
    inMemoryUserList.add(new JwtUserDetails(2L, "tmartinez",
            "$2a$10$gKt2sTVYVliQekpN8X8oieOSqD6KZBMmXP5i1qhEDHiQPSar9.b6e", "ROLE_USER_2"));
    inMemoryUserList.add(new JwtUserDetails(3L, "jmartinez",
            "$2a$10$EEiFKqE7CjIvtBiXqD9pHO7dgQpMhNp1XNyGnVx3gqCOEQEFo7cju", "ROLE_USER_2"));
    
    	// $2a$10$7ulVjIwcd8k9BSKDruiacewy.X.UrN/YTjDQjzchUzPZV71eiqSEK

  }

  @Override
  public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
    Optional<JwtUserDetails> findFirst = inMemoryUserList.stream()
        .filter(user -> user.getUsername().equals(username)).findFirst();

    if (!findFirst.isPresent()) {
      throw new UsernameNotFoundException(String.format("USER_NOT_FOUND '%s'.", username));
    }

    return findFirst.get();
  }

}


