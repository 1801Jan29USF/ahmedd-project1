package com.revature.reimburesment.front.controller;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.catalina.servlets.DefaultServlet;
import org.apache.log4j.Logger;

import com.revature.reimburesment.controller.EmployeePastTicketController;
import com.revature.reimburesment.controller.FilteredTicketController;
import com.revature.reimburesment.controller.LoginController;
import com.revature.reimburesment.controller.ManagerViewTicketsController;
import com.revature.reimburesment.controller.TicketRequestController;
import com.revature.reimburesment.controller.UpdateTicketRequestController;

public class DispatcherServlet extends DefaultServlet {

	private Logger log = Logger.getRootLogger();


	EmployeePastTicketController empPastTkt = new EmployeePastTicketController();
	LoginController login = new LoginController();
	FilteredTicketController filtTkt = new FilteredTicketController();
	
	ManagerViewTicketsController manTick = new ManagerViewTicketsController();
	TicketRequestController tktRequest = new TicketRequestController();
	UpdateTicketRequestController udpateTkt = new UpdateTicketRequestController();

	protected void service(HttpServletRequest request, HttpServletResponse response)
            throws IOException, ServletException {    
        super.service(request, response);
        response.addHeader("Access-Control-Allow-Origin", "http://localhost:4200");
       response.addHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE, HEAD");
       response.addHeader("Access-Control-Allow-Headers","Origin, Methods, Credentials, X-Requested-With, Content-Type, Accept");
       response.addHeader("Access-Control-Allow-Credentials", "true");
       response.setContentType("application/json");
    }
	
	@Override
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws IOException, ServletException {
		
		log.trace(request.getParameter("username"));
		String url = request.getPathInfo();
		log.trace("Get request made with path " + url);
		if (url.startsWith("/static/")) {
			super.doGet(request, response);
			return;
		} else if(url.equals("/page")) {
			request.getRequestDispatcher("/static/dist/index.html").forward(request, response);
		} else {
			if (url.startsWith("/login")) {
				login.doGet(request, response);
			}  else if (url.startsWith("/requestTicket")) {
				tktRequest.doGet(request, response);
			} else if (url.startsWith("/viewPastTickets")) {
				empPastTkt.doGet(request, response);
			} else if (url.startsWith("/updateRequest")) {
				udpateTkt.doGet(request, response);
			} else if (url.startsWith("/managerViewTicket")) {
				manTick.doGet(request, response);
			} else if (url.startsWith("/filteredTickets")) {
				filtTkt.doGet(request, response);
			} else {
				log.trace("url not mapped");
				request.getRequestDispatcher("static/index.html").forward(request, response);
			}
		}

	}

	@Override
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws IOException, ServletException {
		log.trace(request.getParameter("username"));
		String url = request.getPathInfo();
		log.trace("Post request made with path " + url);
		
			if (url.startsWith("/login")) {
				super.doPost(request, response);
				login.doPost(request, response);
				return;
			} else if (url.startsWith("/reimburesment")) {
				tktRequest.doPost(request, response);
			} else if (url.startsWith("/viewPastTickets")) {
				empPastTkt.doPost(request, response);
			} else if (url.startsWith("/updateRequest")) {
				udpateTkt.doPost(request, response);
			} else if (url.startsWith("/managerViewTicket")) {
				manTick.doPost(request, response);
			} else if (url.startsWith("/filteredTickets")) {
				filtTkt.doPost(request, response);
			} else {
				log.trace("url not mapped");
				request.getRequestDispatcher("static/index.html").forward(request, response);
			}
		

	}

}
