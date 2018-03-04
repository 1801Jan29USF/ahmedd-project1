package com.revature.reimburesment.services;

import com.revature.reimburesment.bean.User;
import com.revature.reimburesment.dao.UserDAO;
import com.revature.reimburesment.dao.UserDAOJDBC;

public class LoginService {
	
	//private LoginDOA loginDao = new LoginDAOJDBC();
	private UserDAO	loginDao = new UserDAOJDBC();
	
	public User login(String username, String password) {
		return loginDao.login(username, password);}
	
	

}
