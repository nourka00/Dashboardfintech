import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { jwtDecode } from "jwt-decode"; // Updated import
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Incomes from "./pages/Income";
import Expenses from "./pages/Expense";
import Goals from "./pages/ProfitGoal";
import Admin from "./pages/AdminPage";
import Login from "./pages/login";


const App = () => {
  const [user, setUser] = useState(null);

  // Check for token on initial load
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded = jwtDecode(token); // Updated usage
        setUser({ token, role: decoded.role });
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
      <Navbar user={user} onLogout={logout} />
      <div style={{ marginLeft: "392px", padding: "20px" }}>
        <Routes>
          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <Login setUser={setUser} />}
          />
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
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;