package com.revature.reimburesment.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.apache.log4j.Logger;

import com.revature.reimburesment.bean.Reimbursment;
import com.revature.reimburesment.bean.User;
import com.revature.reimbursement.util.ConnectionUtil;

public class UserDAOJDBC implements UserDAO {

	private Logger log = Logger.getRootLogger();
	private ConnectionUtil connUtil = ConnectionUtil.getConnectionUtil();
	private static User user = new User();
	private static Reimbursment r = new Reimbursment();
	private static UserDAO uDao = new UserDAOJDBC();

	public static UserDAO getdao() {
		return uDao;
	}

	// @Override
	// public int addUser(String username, String password, String firstName, String
	// lastName, String email, int roleId) {
	//
	//// User s = new User(username, password, firstName, lastName, email, roleId);
	//
	// log.trace("Attempting to get connection to db");
	// try (Connection conn = connUtil.getConnection()) {
	// log.trace("connection established with db, creating prepared
	// Prep-statement");
	// PreparedStatement ps = conn.prepareStatement("INSERT INTO users ( Username,
	// Pasword, first_name,last_name,email,user_role_id)"
	// + " VALUES (?,?,?,?,?,?)", new String[] { "userid" });
	//
	// ps.setString(1, user.getUsername());
	// ps.setString(2, user.getPassword());
	// ps.setString(3, user.getFirstName());
	// ps.setString(4, user.getLastName());
	// ps.setString(5, user.getEmail());
	// ps.setLong(6, user.getRoleId());
	//
	// int rowsInserted = ps.executeUpdate();
	// log.debug("query inserted " + rowsInserted + " rows into the db");
	// ResultSet rs = ps.getGeneratedKeys();
	// if (rs.next()) {
	// user.setUserId(rs.getInt(1));
	// return rs.getInt(1);
	//
	// }
	//
	// } catch (SQLException e) {
	// log.warn("failed to add new user");
	// e.printStackTrace();
	// }
	// return 0;
	//
	// }

	@Override
	public int addRemburstment(double amount, String description, int authorId, int typeId) {
		Date date = new Date();
		log.trace("Attempting to get connection to db");
		try (Connection conn = connUtil.getConnection()) {
			log.trace("connection established with db");
			PreparedStatement ps = conn.prepareStatement(
					"INSERT INTO ers_reimburesement (amount, TIME_SUBMITTED, DESCRIPTION,AUTHOR, REIMBURSEMENT_STATUS_ID,REIMBURSEMENT_TYPE_ID) "
							+ "VALUES (?,?,?,?,?,?)");

			log.trace("somehing ");
			ps.setDouble(1, r.getAmount());
			ps.setTimestamp(2, new Timestamp(date.getTime()));

			ps.setString(3, r.getDescription());
			ps.setInt(4, 15);

			ps.setInt(5, 1);
			ps.setInt(6, 1);

			// log.trace(user);
			log.trace(r);
			int rowsInserted = ps.executeUpdate();

			log.debug("query inserted " + rowsInserted + " rows into the db");
			// ResultSet rs = ps.getGeneratedKeys();
			// if (rs.next()) {
			// r.setReimb_id(rs.getInt(1));
			// return rs.getInt(1);
			// }

		} catch (SQLException e) {
			log.warn("failed to add reimbursment");
			e.printStackTrace();
		}
		return 0;

	}

	@Override
	public List<Reimbursment> listTicketsAuthor(int userId) {

		log.trace("Attempting to get connection to db");
		try (Connection conn = connUtil.getConnection()) {
			List<Reimbursment> pastTickets = new ArrayList<>();
			log.trace("connection established with db, creating prepared Prep-statement");
			PreparedStatement ps = conn.prepareStatement("SELECT * FROM ers_reimburesement  " + "WHERE author = ?");

			ps.setInt(1, userId);
			ResultSet rs = ps.executeQuery();
			while (rs.next()) {
				Reimbursment tickets = new Reimbursment(rs.getInt("reimb_id"), rs.getDouble("amount"),
						rs.getTimestamp("time_submitted"), rs.getTimestamp("time_resolved"),
						rs.getString("description"), rs.getInt("author"), rs.getInt("reimb_resolver"),
						rs.getInt("reimbursement_status_id"), rs.getInt("reimbursement_type_id"));
				pastTickets.add(tickets);
				System.out.println("status: " + tickets.toString());
			}
			return pastTickets;

		} catch (SQLException e) {
			log.warn("failed to get tickets list");
			e.printStackTrace();
		}
		return null;
	}

	@Override
	public User login(String username, String password) {
		log.trace("Attempting to get connection to db");
		try (Connection conn = connUtil.getConnection()) {
			log.trace("connection established with db");
			PreparedStatement ps = conn.prepareStatement("SELECT * FROM users WHERE Username = ? AND Pasword = ?");

			ps.setString(1, username);
			ps.setString(2, password);
			log.trace("login successful");
			ResultSet rs = ps.executeQuery();

			if (rs.next()) {
				user = new User(rs.getInt("USERID"), rs.getString("Username"), rs.getString("Pasword"),
						rs.getString("first_name"), rs.getString("last_name"), rs.getString("email"),
						rs.getInt("user_role_id"));
				log.trace(user);
				return user;
			}

		} catch (SQLException e) {
			log.warn("failed to login");
			e.printStackTrace();
		}
		return null;

	}

}
