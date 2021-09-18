import React, { useContext, useState } from "react";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaSearch,
  FaBars,
} from "react-icons/fa";
import { CgClose } from "react-icons/cg";
import { Link } from "react-router-dom";
import { Logout } from "../../context/Actions";
import { Context } from "../../context/Context";
import "./topbar.scss";
const Topbar = () => {
  const [open, setOpen] = useState(true);
  const PF = "http://localhost:5000/images/";
  const { user, dispatch } = useContext(Context);
  const handleLogout = () => {
    dispatch(Logout());
  };
  return (
    <div className="top open">
      <div className="top_Left open">
        <FaFacebookSquare className="left_Icons" />
        <FaTwitterSquare className="left_Icons" />
        <FaInstagramSquare className="left_Icons" />
      </div>
      <div className="top_Center open">
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
                onClick={handleLogout}
              >
                LOGOUT
              </Link>
            )}
          </li>
        </ul>
      </div>
      <div className="top_Right open">
        {user ? (
          <img
            src={`${PF}/16319860493636.jpeg`}
            alt="userimg"
            className="userImage"
          />
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
      <div className="top_toggle">
        <h2>Blog app</h2>

        {open ? (
          <CgClose style={{ zIndex: 999, color: "white" }} />
        ) : (
          <FaBars className="top_toggle_Icon" />
        )}
      </div>
    </div>
  );
};

export default Topbar;
