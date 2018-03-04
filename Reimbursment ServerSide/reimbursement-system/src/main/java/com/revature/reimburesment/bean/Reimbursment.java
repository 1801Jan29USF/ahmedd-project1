package com.revature.reimburesment.bean;

import java.sql.Timestamp;

public class Reimbursment {
	
	private int reimb_id;
	private double amount;
	private Timestamp submitted;
	private Timestamp resolved;
	private String  description;
	private int authorId;
	private int resolverId;
	private int statusId;
	private int typeId;
	
	public Reimbursment() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public Reimbursment( Timestamp resolved,  int resolverId, int statusId, int reimb_id) {
		
		this.resolved = resolved;
		
		this.resolverId = resolverId;
		this.statusId = statusId;
		this.reimb_id = reimb_id;
		
	}
	

	public Reimbursment(double amount, Timestamp submitted, String description, int authorId, int statusId,
			int typeId) {
		super();
		this.amount = amount;
		this.submitted = submitted;
		this.description = description;
		this.authorId = authorId;
		this.statusId = statusId;
		this.typeId = typeId;
	}



	public Reimbursment(int reimb_id, double amount, Timestamp submitted, Timestamp resolved, String description,
			int authorId, int resolverId, int statusId, int typeId) {
		super();
		this.reimb_id = reimb_id;
		this.amount = amount;
		this.submitted = submitted;
		this.resolved = resolved;
		this.description = description;
		this.authorId = authorId;
		this.resolverId = resolverId;
		this.statusId = statusId;
		this.typeId = typeId;
	}

	/**
	 * @return the reimb_id
	 */
	public int getReimb_id() {
		return reimb_id;
	}

	/**
	 * @param reimb_id the reimb_id to set
	 */
	public void setReimb_id(int reimb_id) {
		this.reimb_id = reimb_id;
	}

	/**
	 * @return the amount
	 */
	public double getAmount() {
		return amount;
	}

	/**
	 * @param amount the amount to set
	 */
	public void setAmount(double amount) {
		this.amount = amount;
	}

	/**
	 * @return the submitted
	 */
	public Timestamp getSubmitted() {
		return submitted;
	}

	/**
	 * @param submitted the submitted to set
	 */
	public void setSubmitted(Timestamp submitted) {
		this.submitted = submitted;
	}

	/**
	 * @return the resolved
	 */
	public Timestamp getResolved() {
		return resolved;
	}

	/**
	 * @param resolved the resolved to set
	 */
	public void setResolved(Timestamp resolved) {
		this.resolved = resolved;
	}

	/**
	 * @return the description
	 */
	public String getDescription() {
		return description;
	}

	/**
	 * @param description the description to set
	 */
	public void setDescription(String description) {
		this.description = description;
	}

	/**
	 * @return the authorId
	 */
	public int getAuthorId() {
		return authorId;
	}

	/**
	 * @param authorId the authorId to set
	 */
	public void setAuthorId(int authorId) {
		this.authorId = authorId;
	}

	/**
	 * @return the resolverId
	 */
	public int getResolverId() {
		return resolverId;
	}

	/**
	 * @param resolverId the resolverId to set
	 */
	public void setResolverId(int resolverId) {
		this.resolverId = resolverId;
	}

	/**
	 * @return the statusId
	 */
	public int getStatusId() {
		return statusId;
	}

	/**
	 * @param statusId the statusId to set
	 */
	public void setStatusId(int statusId) {
		this.statusId = statusId;
	}

	/**
	 * @return the typeId
	 */
	public int getTypeId() {
		return typeId;
	}

	/**
	 * @param typeId the typeId to set
	 */
	public void setTypeId(int typeId) {
		this.typeId = typeId;
	}

	/* (non-Javadoc)
	 * @see java.lang.Object#hashCode()
	 */
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		long temp;
		temp = Double.doubleToLongBits(amount);
		result = prime * result + (int) (temp ^ (temp >>> 32));
		result = prime * result + authorId;
		result = prime * result + ((description == null) ? 0 : description.hashCode());
		result = prime * result + reimb_id;
		result = prime * result + ((resolved == null) ? 0 : resolved.hashCode());
		result = prime * result + resolverId;
		result = prime * result + statusId;
		result = prime * result + ((submitted == null) ? 0 : submitted.hashCode());
		result = prime * result + typeId;
		return result;
	}

	/* (non-Javadoc)
	 * @see java.lang.Object#equals(java.lang.Object)
	 */
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Reimbursment other = (Reimbursment) obj;
		if (Double.doubleToLongBits(amount) != Double.doubleToLongBits(other.amount))
			return false;
		if (authorId != other.authorId)
			return false;
		if (description == null) {
			if (other.description != null)
				return false;
		} else if (!description.equals(other.description))
			return false;
		if (reimb_id != other.reimb_id)
			return false;
		if (resolved == null) {
			if (other.resolved != null)
				return false;
		} else if (!resolved.equals(other.resolved))
			return false;
		if (resolverId != other.resolverId)
			return false;
		if (statusId != other.statusId)
			return false;
		if (submitted == null) {
			if (other.submitted != null)
				return false;
		} else if (!submitted.equals(other.submitted))
			return false;
		if (typeId != other.typeId)
			return false;
		return true;
	}

	/* (non-Javadoc)
	 * @see java.lang.Object#toString()
	 */
	@Override
	public String toString() {
		return "Reimbursment [reimb_id=" + reimb_id + ", amount=" + amount + ", submitted=" + submitted + ", resolved="
				+ resolved + ", description=" + description + ", authorId=" + authorId + ", resolverId=" + resolverId
				+ ", statusId=" + statusId + ", typeId=" + typeId + "]";
	}
	
	
	
	
	
	
	
	

}
