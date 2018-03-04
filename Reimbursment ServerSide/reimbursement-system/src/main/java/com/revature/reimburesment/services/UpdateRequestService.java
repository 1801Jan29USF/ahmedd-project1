package com.revature.reimburesment.services;

import java.sql.Timestamp;

import com.revature.reimburesment.dao.ManagerDAO;
import com.revature.reimburesment.dao.ManagerDAOJDBC;

public class UpdateRequestService {
	
	ManagerDAO updateRequest = new ManagerDAOJDBC();
	
	public void updateRequest(Timestamp time_resolved, int reimb_resolver, int reimbursement_status_id, int reimb_id) {
		
	}

}
