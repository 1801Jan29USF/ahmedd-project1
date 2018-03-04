package com.revature.reimburesment.services;

import java.util.List;

import com.revature.reimburesment.bean.Reimbursment;
import com.revature.reimburesment.dao.ManagerDAO;
import com.revature.reimburesment.dao.ManagerDAOJDBC;

public class MangerViewTicketService {
	
	ManagerDAO manAllTicket = new ManagerDAOJDBC();
	
	public List<Reimbursment> listTicketsResolver() {
		return manAllTicket.listTicketsResolver();
		
	}

}
