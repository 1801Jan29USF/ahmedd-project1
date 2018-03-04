package com.revature.reimburesment.services;

import java.util.List;

import com.revature.reimburesment.bean.Reimbursment;
import com.revature.reimburesment.dao.UserDAO;
import com.revature.reimburesment.dao.UserDAOJDBC;

public class EmpPastTciketService {
	
	private UserDAO ticketDao = new UserDAOJDBC();
	
	public List<Reimbursment> listTicketsAuthor(int userId) {
		return  ticketDao.listTicketsAuthor(userId);
	
	

}

}
