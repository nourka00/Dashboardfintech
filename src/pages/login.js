import React, { useState } from "react";
import "../CSS/login.css"

function Login() {
  const [details, setDetails] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted details: ", details);
  };

  return (
      <div className="container">
          <h1>Welcome to Your Own 
               <br /> Personal Finance Tracker!</h1>
          <div className="border">
         
          <form onSubmit={handleSubmit} className="form">
        <div>
          <label htmlFor="name">Enter Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={details.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Enter Your Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={details.email}
            onChange={handleChange}
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
          />
        </div>
        <button type="submit">Sign In</button>
        <h6>You Already Have An Account?</h6>
        <button type="login">Login</button>
              </form>
          </div>
    </div>
  );
}

export default Login;
