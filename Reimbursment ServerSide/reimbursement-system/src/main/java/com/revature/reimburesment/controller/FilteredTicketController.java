package com.revature.reimburesment.controller;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.log4j.Logger;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.revature.reimburesment.bean.Reimbursment;
import com.revature.reimburesment.bean.User;
import com.revature.reimburesment.services.FiltteredTicketService;

public class FilteredTicketController implements HttpController {

	private Logger log = Logger.getRootLogger();
	FiltteredTicketService ft = new FiltteredTicketService();

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
		Reimbursment reimbId = (Reimbursment) om.readValue(json, Reimbursment.class);
		log.trace(reimbId);
		List<Reimbursment> u = ft.listTicketByState(reimbId.getStatusId());

		HttpSession sess = req.getSession();
		sess.setAttribute("statusId", u);
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
