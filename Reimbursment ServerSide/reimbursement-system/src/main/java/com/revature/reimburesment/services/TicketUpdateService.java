package com.revature.reimburesment.services;

import java.sql.Timestamp;

import com.revature.reimburesment.dao.ManagerDAO;
import com.revature.reimburesment.dao.ManagerDAOJDBC;

public class TicketUpdateService {
	
	ManagerDAO updateTicket = new ManagerDAOJDBC();
	
	public void updateReimburesment(Timestamp time_resolved, int reimb_resolver, int reimbursement_status_id, int reimb_id) {
	 updateTicket.updateRequest(time_resolved, reimb_resolver, reimbursement_status_id, reimb_id);
	 
	}

}
