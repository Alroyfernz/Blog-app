import React from "react";
import "./register.scss";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <div className="register">
      <span className="register_Title">register</span>
      <form className="register_Form">
        <label>Username</label>
        <input type="text" placeholder="Enter you Username..." />
        <label>Email</label>
        <input type="email" placeholder="Enter you email..." />

        <label>Password</label>
        <input type="passoword" placeholder="Enter you password..." />

        <button className="register_Button">Register</button>
      </form>
      <button className="register_login_Button">
        <Link style={{ textDecoration: "none", color: "inherit" }} to="/login">
          Login
        </Link>
      </button>
    </div>
  );
};

export default Register;
