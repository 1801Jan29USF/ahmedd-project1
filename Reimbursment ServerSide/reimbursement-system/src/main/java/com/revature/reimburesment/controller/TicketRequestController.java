package com.revature.reimburesment.controller;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.log4j.Logger;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.revature.reimburesment.bean.Reimbursment;
import com.revature.reimburesment.bean.User;
import com.revature.reimburesment.dao.UserDAO;
import com.revature.reimburesment.dao.UserDAOJDBC;
import com.revature.reimburesment.services.TicketRequestService;

public class TicketRequestController implements HttpController {

	private Logger log = Logger.getRootLogger();
	private TicketRequestService tr = new TicketRequestService();
	private static Reimbursment  r = new Reimbursment();
	UserDAO newRequest = UserDAOJDBC.getdao();

	@Override
	public void doGet(javax.servlet.http.HttpServletRequest req, HttpServletResponse resp)
			throws IOException, ServletException {
		// TODO Auto-generated method stub

	}

	@Override
	public void doPost(javax.servlet.http.HttpServletRequest req, HttpServletResponse resp)
			throws IOException, ServletException {
		log.trace(r.getAmount() + r.getDescription()+ r.getTypeId() + r.getAuthorId());

		String json = req.getReader().lines().reduce((acc, cur) -> acc + cur).get();
		log.trace("json " + json);
		ObjectMapper om = new ObjectMapper();
		Reimbursment newTicket = (Reimbursment) om.readValue(json, Reimbursment.class);
		log.trace(newTicket);
		
		
		int u = tr.addRemburstment(newTicket.getAmount(), newTicket.getDescription(), newTicket.getAuthorId(),
				newTicket.getTypeId());
		log.trace(r.getAmount() + r.getDescription()+ r.getTypeId() + r.getAuthorId());

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
	public void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// TODO Auto-generated method stub

	}

}
