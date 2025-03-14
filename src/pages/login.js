import React, { useState } from "react";
import axios from "axios";
import "../CSS/login.css";

function Login({ setUser }) {
  const [isSignIn, setIsSignIn] = useState(false); // Toggle between Sign In and Login
  const [details, setDetails] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isSignIn) {
        // Sign In (Register) API Call
        const { data } = await axios.post(
          "http://localhost:5000/api/auth/register",
          {
            username: details.username,
            email: details.email,
            password: details.password,
          }
        );
        localStorage.setItem("token", data.token); // Store JWT in localStorage
        setUser({ token: data.token, role: data.role }); // Update user state
      } else {
        // Login API Call
        const { data } = await axios.post(
          "http://localhost:5000/api/auth/login",
          {
            email: details.email,
            password: details.password,
          }
        );
        localStorage.setItem("token", data.token); // Store JWT in localStorage
        setUser({ token: data.token, role: data.role }); // Update user state
      }
      setError(""); // Clear any previous errors
    } catch (err) {
      setError(
        isSignIn
          ? "Sign In failed. Please try again."
          : "Login failed. Please check your credentials."
      );
      console.error(isSignIn ? "Sign In failed" : "Login failed", err);
    }
  };

  return (
    <div className="container">
      <div><h1>
        Welcome to Your Own <br /> Personal Finance Tracker!
      </h1></div>
      <div>
      <div className="border">
        <form onSubmit={handleSubmit} className="form">
          {isSignIn && (
            <div>
              <label htmlFor="username">Enter Your Username</label>
              <input
                type="text"
                id="username"
                name="username"
                value={details.username}
                onChange={handleChange}
                required
              />
            </div>
          )}
          <div>
            <label htmlFor="email">Enter Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={details.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Enter Your Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={details.password}
              onChange={handleChange}
              required
            />
          </div>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <button type="submit">{isSignIn ? "Sign In" : "Login"}</button>
          <h6 onClick={() => setIsSignIn(!isSignIn)}>
            {isSignIn
              ? "Already have an account? Login"
              : "Don't have an account? Sign In"}
          </h6>
        </form>
      </div>
      </div>
    </div>
  );
}

export default Login;
