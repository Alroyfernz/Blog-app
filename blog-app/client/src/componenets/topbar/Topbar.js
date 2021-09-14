import React from "react";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaSearch,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "./topbar.scss";
const topbar = () => {
  const user = false;
  return (
    <div className="top">
      <div className="top_Left">
        <FaFacebookSquare className="left_Icons" />
        <FaTwitterSquare className="left_Icons" />
        <FaInstagramSquare className="left_Icons" />
      </div>
      <div className="top_Center">
        <ul className="topList">
          <li className="topListItem">
            <Link
              className="link"
              to="/"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              HOME
            </Link>
          </li>
          <li className="topListItem">
            {" "}
            <Link
              className="link"
              to="/settings"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            {" "}
            <Link
              className="link"
              to="/"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              CONTACT
            </Link>
          </li>
          <li className="topListItem">
            {" "}
            <Link
              className="link"
              to="/write"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              WRITE
            </Link>
          </li>
          <li className="topListItem">
            {" "}
            {user && (
              <Link
                className="link"
                to="/"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                LOGOUT
              </Link>
            )}
          </li>
        </ul>
      </div>
      <div className="top_Right">
        {user ? (
          <img src="assets/person/8.jpeg" alt="userimg" className="userImage" />
        ) : (
          <ul className="topListHide">
            <li className="topListHide_Item">
              <Link
                style={{ textDecoration: "none", color: "inherit" }}
                to="/login"
              >
                LOGIN
              </Link>
            </li>
            <li className="topListHide_Item">
              <Link
                style={{ textDecoration: "none", color: "inherit" }}
                to="/register"
              >
                REGISTER
              </Link>
            </li>
          </ul>
        )}

        <FaSearch className="right_Icons" />
      </div>
    </div>
  );
};

export default topbar;
