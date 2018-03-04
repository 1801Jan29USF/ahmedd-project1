package com.revature.reimburesment.dao;

import java.sql.Timestamp;
import java.util.List;

import com.revature.reimburesment.bean.Reimbursment;

public interface ManagerDAO {

	Reimbursment updateRequest(Timestamp time_resolved, int reimb_resolver, int reimbursement_status_id,int reimb_id  );

	List<Reimbursment> listTicketsResolver();

	List<Reimbursment> listTicketByState(int statusId);


}
