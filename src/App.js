import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Income from "./pages/Income";
import Expense from "./pages/Expense";
import Goals from "./pages/ProfitGoal";
import Admin from "./pages/AdminPage";
import Login from "./pages/login"; // Updated import for the adapted Login component


const App = () => {
  const [user, setUser] = useState(null);

  // Check for token on initial load
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setUser({ token, role: decoded.role }); // Set user state
      } catch (err) {
        console.error("Invalid token", err);
        localStorage.removeItem("token"); // Clear invalid token
      }
    }
  }, []);

  // Logout function
  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <Router>
      <div>
        <Navbar />
        <div style={{ marginLeft: "392px", padding: "20px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/incomes" element={<Incomes />} />
            <Route path="/expenses" element={<Expenses />} />
            <Route path="/goals" element={<Goals />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
