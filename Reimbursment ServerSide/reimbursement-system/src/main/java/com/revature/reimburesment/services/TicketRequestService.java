package com.revature.reimburesment.services;

import java.sql.Timestamp;

import org.apache.log4j.Logger;
import org.apache.log4j.spi.RootLogger;

import com.revature.reimburesment.bean.Reimbursment;
import com.revature.reimburesment.bean.User;
import com.revature.reimburesment.dao.UserDAO;
import com.revature.reimburesment.dao.UserDAOJDBC;

public class TicketRequestService {
	

	
	private Logger log = Logger.getRootLogger();
	
	UserDAO newRequest = UserDAOJDBC.getdao();
    
	public int addRemburstment(double amount, String description, int authorId,int typeId) {
		
		return newRequest.addRemburstment(amount,  description, authorId,  typeId);
		
	}

}
