import React from "react";
import "./login.scss";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="login">
      <span className="login_Title">Login</span>
      <form className="login_Form">
        <label>Email</label>
        <input type="email" placeholder="Enter you email..." />

        <label>Password</label>
        <input type="passoword" placeholder="Enter you password..." />
        <button className="login_Button">Login</button>
      </form>
      <button className="login_register_Button">
        <Link
          style={{ textDecoration: "none", color: "inherit" }}
          to="/register"
        >
          REGISTER
        </Link>
      </button>
    </div>
  );
};

export default Login;
