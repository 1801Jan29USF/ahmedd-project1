package com.revature.reimburesment.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

import org.apache.log4j.Logger;

import com.revature.reimburesment.bean.Reimbursment;
import com.revature.reimburesment.bean.User;
import com.revature.reimbursement.util.ConnectionUtil;

public class ManagerDAOJDBC implements ManagerDAO {

	private Logger log = Logger.getRootLogger();
	private ConnectionUtil connUtil = ConnectionUtil.getConnectionUtil();

//	public static void main(String[] args) {
//		// User user = new User("ahmded", "password", "ahmed", "dalaq",
//		// "adalaq@gmail.com", 1);
//		ManagerDAO d = new ManagerDAOJDBC();
//		Timestamp timestamp = new Timestamp(System.currentTimeMillis());
//
//		//d.updateRequest(timestamp, 10, 2, 19);
//		// d.listTicketsResolver();
//		// d.listTicketByState(2);
//
//		System.out.println("successful");
//	}

	@Override
	public Reimbursment updateRequest(Timestamp time_resolved, int reimb_resolver, int reimbursement_status_id,
			int reimb_id) {
		Reimbursment resolve = new Reimbursment(time_resolved, reimb_resolver, reimbursement_status_id, reimb_id);

		log.trace("Attempting to get connection to db");
		try (Connection conn = connUtil.getConnection()) {

			log.trace("connection established with db");
			PreparedStatement ps = conn.prepareStatement(
					"UPDATE ers_reimburesement SET time_resolved = ?, reimb_resolver = ?, reimbursement_status_id = ? "
							+ "Where reimb_id =?");

			ps.setTimestamp(1, resolve.getResolved());
			ps.setInt(2, resolve.getResolverId());
			ps.setInt(3, resolve.getStatusId());
			ps.setInt(4, resolve.getReimb_id());

			ps.executeUpdate();
			System.out.println("good : " + resolve.toString());
			log.trace("updated ");

			return null;

		} catch (SQLException e) {
			log.warn("failed to get tickets list");
			e.printStackTrace();
		}
		return null;
	}

	@Override
	public List<Reimbursment> listTicketsResolver() {

		log.trace("Attempting to get connection to db");
		try (Connection conn = connUtil.getConnection()) {
			List<Reimbursment> allTickets = new ArrayList<>();
			log.trace("connection established with db, creating prepared Prep-statement");
			PreparedStatement ps = conn.prepareStatement("SELECT * FROM ers_reimburesement ");
			// ps.setInt(1, userId);
			ResultSet rs = ps.executeQuery();
			while (rs.next()) {
				Reimbursment tickets = new Reimbursment(rs.getInt("reimb_id"), rs.getDouble("amount"),
						rs.getTimestamp("time_submitted"), rs.getTimestamp("time_resolved"),
						rs.getString("description"), rs.getInt("author"), rs.getInt("reimb_resolver"),
						rs.getInt("reimbursement_status_id"), rs.getInt("reimbursement_type_id"));
				allTickets.add(tickets);
				System.out.println("Tickets: " + tickets.toString());
			}
			return allTickets;

		} catch (SQLException e) {
			log.warn("failed to get tickets list");
			e.printStackTrace();
		}
		return null;

	}

	@Override
	public List<Reimbursment> listTicketByState(int statusId) {
		log.trace("Attempting to get connection to db");
		try (Connection conn = connUtil.getConnection()) {
			List<Reimbursment> allTickets = new ArrayList<>();
			log.trace("connection established with db, creating prepared Prep-statement");
			PreparedStatement ps = conn
					.prepareStatement("SELECT * FROM ers_reimburesement  " + "WHERE  reimbursement_status_id = ? ");
			ps.setInt(1, statusId);
			ResultSet rs = ps.executeQuery();
			while (rs.next()) {
				Reimbursment tickets = new Reimbursment(rs.getInt("reimb_id"), rs.getDouble("amount"),
						rs.getTimestamp("time_submitted"), rs.getTimestamp("time_resolved"),
						rs.getString("description"), rs.getInt("author"), rs.getInt("author"),
						rs.getInt("reimbursement_status_id"), rs.getInt("reimbursement_type_id"));
				allTickets.add(tickets);
				System.out.println("Tickets: " + tickets.toString());
			}
			return allTickets;

		} catch (SQLException e) {
			log.warn("failed to get tickets list");
			e.printStackTrace();
		}
		return null;
	}

}
