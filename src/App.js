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
import Incomes from "./pages/Incomes";
import Expenses from "./pages/Expenses";
import Goals from "./pages/profitGoals";
import Admin from "./pages/Admin";
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
      <Navbar user={user} onLogout={logout} /> {/* Navbar with logout button */}
      <div style={{ marginLeft: "392px", padding: "20px" }}>
        <Routes>
          {/* Public Route: Login */}
          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <Login setUser={setUser} />}
          />

          {/* Protected Routes */}
          <Route
            path="/"
            element={user ? <Home /> : <Navigate to="/login" />}
          />
          <Route
            path="/incomes"
            element={user ? <Incomes /> : <Navigate to="/login" />}
          />
          <Route
            path="/expenses"
            element={user ? <Expenses /> : <Navigate to="/login" />}
          />
          <Route
            path="/goals"
            element={user ? <Goals /> : <Navigate to="/login" />}
          />
          <Route
            path="/admin"
            element={user?.role === "admin" ? <Admin /> : <Navigate to="/" />}
          />

          {/* Fallback Route */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
