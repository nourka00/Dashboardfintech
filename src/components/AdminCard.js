import React from "react";

const AdminCard = ({ name, email, onDelete }) => {
  return (
    <div className="admin-card">
      <div className="admin-info">
        <div className="admin-icon"></div>
        <div>
          <p className="admin-name">{name}</p>
          <p className="admin-email">{email}</p>
        </div>
      </div>
      <button className="delete-btn" onClick={onDelete}>Delete</button>
    </div>
  );
};

export default AdminCard;