import React from "react";
import userImage from "../assets/userprofile.png";
import "../CSS/navbar.css";
import { NavLink } from "react-router-dom";

function Navbar({ user, onLogout }) {
  return (
    <div className="navbar">
      <h3>
        Finance Tracker <br /> System
      </h3>
      <div className="sidebar">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/incomes"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Incomes
        </NavLink>
        <NavLink
          to="/expenses"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Expenses
        </NavLink>
        <NavLink
          to="/goals"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Profit Goals
        </NavLink>
        <NavLink
          to="/admin"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Admin Page
        </NavLink>
      </div>

      <div className="user-profile">
        <div className="imguser">
          <img src={userImage} alt="User Profile" />
        </div>
        <div className="userinfo">
          <p className="user">{user ? "User" : "Guest"}</p>
          <p>{user ? "user@email.com" : ""}</p>
        </div>
        
        {user && (
          <button className="logout-button" onClick={onLogout}>
            Logout
            </button>
      
          )}
         
      </div>
    </div>
  );
}

export default Navbar;
