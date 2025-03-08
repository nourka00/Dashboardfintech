import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Income from "./pages/Income";
import Expense from "./pages/Expense";
import Goals from "./pages/ProfitGoal";
import Admin from "./pages/AdminPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div style={{ marginLeft: "392px", padding: "20px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/incomes" element={<Income />} />
            <Route path="/expenses" element={<Expense />} />
            <Route path="/goals" element={<Goals />} />
            {/* <Route path="/admin" element={<Admin />} /> */}
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
