package com.revature.reimburesment.services;

import java.util.List;

import com.revature.reimburesment.bean.Reimbursment;
import com.revature.reimburesment.dao.ManagerDAO;
import com.revature.reimburesment.dao.ManagerDAOJDBC;

public class FiltteredTicketService {
	ManagerDAO filtTicket = new ManagerDAOJDBC();
	
	public List<Reimbursment> listTicketByState( int statusId){
		return filtTicket.listTicketByState(statusId);
	}

}
