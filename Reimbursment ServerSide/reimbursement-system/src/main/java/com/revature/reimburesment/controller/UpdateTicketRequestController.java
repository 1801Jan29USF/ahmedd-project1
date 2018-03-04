package com.revature.reimburesment.controller;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.catalina.servlet4preview.http.HttpServletRequest;
import org.apache.log4j.Logger;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.revature.reimburesment.bean.Reimbursment;
import com.revature.reimburesment.dao.ManagerDAO;
import com.revature.reimburesment.dao.ManagerDAOJDBC;

public class UpdateTicketRequestController implements HttpController{

	private Logger log = Logger.getRootLogger();
	ManagerDAO updateTkt = new ManagerDAOJDBC();
	
	@Override
	public void doGet(javax.servlet.http.HttpServletRequest req, HttpServletResponse resp)
			throws IOException, ServletException {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void doPost(javax.servlet.http.HttpServletRequest req, HttpServletResponse resp)
			throws IOException, ServletException {
		String json = req.getReader().lines().reduce((acc, cur) -> acc + cur).get();
		log.trace("json " + json);
		ObjectMapper om = new ObjectMapper();
		Reimbursment up = (Reimbursment) om.readValue(json, Reimbursment.class);
		log.trace(up);
		Reimbursment u = updateTkt.updateRequest(up.getResolved(), up.getResolverId(), up.getStatusId(), up.getReimb_id());

		HttpSession sess = req.getSession();
		sess.setAttribute("reimbId", u);
		String responseJson = om.writeValueAsString(u);
		resp.getWriter().write(responseJson);
		
	}

	@Override
	public void doPut(javax.servlet.http.HttpServletRequest req, HttpServletResponse resp)
			throws IOException, ServletException {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void doDelete(javax.servlet.http.HttpServletRequest req, HttpServletResponse resp)
			throws IOException, ServletException {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void service(javax.servlet.http.HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		
	}

	

}
