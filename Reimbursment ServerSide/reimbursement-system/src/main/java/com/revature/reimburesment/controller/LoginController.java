package com.revature.reimburesment.controller;

import java.io.IOException;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.log4j.Logger;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.revature.reimburesment.bean.User;
import com.revature.reimburesment.services.LoginService;

public class LoginController implements HttpController {

	private Logger log = Logger.getRootLogger();
	private LoginService loginservice = new LoginService();

	@Override
	public void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

		resp.addHeader("Access-Control-Allow-Origin", "http://localhost:4200");
		resp.addHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE, HEAD");
		resp.addHeader("Access-Control-Allow-Headers",
				"Origin, Methods, Credentials, X-Requested-With, Content-Type, Accept");
		resp.addHeader("Access-Control-Allow-Credentials", "true");
		resp.setContentType("application/json");
	}

	@Override
	public void doGet(HttpServletRequest req, HttpServletResponse resp) throws IOException, ServletException {

	}

	@Override
	public void doPost(HttpServletRequest req, HttpServletResponse resp) throws IOException, ServletException {
		// using JSON
		try {
			String json = req.getReader().lines().reduce((acc, cur) -> acc + cur).get();
			log.trace("json " + json);
			ObjectMapper om = new ObjectMapper();
			User credentials = (User) om.readValue(json, User.class);
			log.trace(credentials);
			User u = loginservice.login(credentials.getUsername(), credentials.getPassword());

			HttpSession sess = req.getSession();
			sess.setAttribute("userId", u);
			String responseJson = om.writeValueAsString(u);
			resp.getWriter().write(responseJson);

		} catch (Exception e) {
			e.printStackTrace();
		}

	}

	@Override
	public void doPut(HttpServletRequest req, HttpServletResponse resp) throws IOException, ServletException {
		// TODO Auto-generated method stub

	}

	@Override
	public void doDelete(HttpServletRequest req, HttpServletResponse resp) throws IOException, ServletException {
		// TODO Auto-generated method stub

	}

}
