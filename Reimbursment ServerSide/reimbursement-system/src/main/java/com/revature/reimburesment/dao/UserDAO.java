package com.revature.reimburesment.dao;

import java.util.List;

import com.revature.reimburesment.bean.Reimbursment;
import com.revature.reimburesment.bean.User;

public interface UserDAO {

	List<Reimbursment> listTicketsAuthor(int userId);

	int addRemburstment(double amount, String description, int authorId, int typeId);

	User login(String username, String password);

	
}
