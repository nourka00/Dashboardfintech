import React, { useState } from "react";
import Sidebar from "../components/Navbar";
import AdminCard from "../components/AdminCard";
import "../CSS/adminPage.css";

const AdminPage = () => {
  const [admins, setAdmins] = useState([
    { name: "Admin1", email: "Admin1@Gmail.Com" },
    { name: "Admin2", email: "Admin2@Gmail.Com" },
  ]);
  const [newAdmin, setNewAdmin] = useState({ name: "", email: "" });

  const handleAddAdmin = () => {
    if (newAdmin.name && newAdmin.email) {
      setAdmins([...admins, newAdmin]);
      setNewAdmin({ name: "", email: "" });
    }
  };

  const handleDeleteAdmin = (email) => {
    setAdmins(admins.filter((admin) => admin.email !== email));
  };

  return (
    <div className="container">
      <Sidebar />
      <div className="content">
        <h2 className="page-title">Admins Page</h2>
        <div className="admin-list">
          {admins.map((admin, index) => (
            <AdminCard
              key={index}
              name={admin.name}
              email={admin.email}
              onDelete={() => handleDeleteAdmin(admin.email)}
            />
          ))}
        </div>
        <div className="add-admin">
          <h3>Add Admin</h3>
          <input
            type="text"
            placeholder="Enter Her/His Name"
            value={newAdmin.name}
            onChange={(e) => setNewAdmin({ ...newAdmin, name: e.target.value })}
          />
          <input
            type="email"
            placeholder="Enter Her/His Email"
            value={newAdmin.email}
            onChange={(e) => setNewAdmin({ ...newAdmin, email: e.target.value })}
          />
          <button onClick={handleAddAdmin}>Add Admin</button>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;