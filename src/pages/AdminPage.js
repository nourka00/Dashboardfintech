import React, { useState, useEffect } from "react";
import Sidebar from "../components/Navbar";
import AdminCard from "../components/AdminCard";
import "../CSS/AdminPage.css";

const API_URL = "http://localhost:5000/api/admins";

const AdminPage = () => {
  const [admins, setAdmins] = useState([
    { name: "Admin1", email: "Admin1@Gmail.Com" },
    { name: "Admin2", email: "Admin2@Gmail.Com" },
  ]);
  const [newAdmin, setNewAdmin] = useState({ name: "", email: "" });

   // Fetch admins from backend
   useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setAdmins(data))
      .catch((error) => console.error("Error fetching admins:", error));
  }, []);



  const handleAddAdmin = () => {
    if (newAdmin.name && newAdmin.email) {
      setAdmins([...admins, newAdmin]);
      setNewAdmin({ name: "", email: "" });
    }
  };

    // // Add admin to backend
    // const handleAddAdmin = async () => {
    //   if (newAdmin.name && newAdmin.email) {
    //     try {
    //       const response = await fetch(API_URL, {
    //         method: "POST",
    //         headers: { "Content-Type": "application/json" },
    //         body: JSON.stringify(newAdmin),
    //       });
    //       if (response.ok) {
    //         const addedAdmin = await response.json();
    //         setAdmins([...admins, addedAdmin]);
    //         setNewAdmin({ name: "", email: "" });
    //       }
    //     } catch (error) {
    //       console.error("Error adding admin:", error);
    //     }
    //   }
    // };

  const handleDeleteAdmin = (email) => {
    setAdmins(admins.filter((admin) => admin.email !== email));
  };


  // // Delete admin from backend
  // const handleDeleteAdmin = async (email) => {
  //   try {
  //     const response = await fetch(`${API_URL}/${email}`, {
  //       method: "DELETE",
  //     });
  //     if (response.ok) {
  //       setAdmins(admins.filter((admin) => admin.email !== email));
  //     }
  //   } catch (error) {
  //     console.error("Error deleting admin:", error);
  //   }
  // };


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