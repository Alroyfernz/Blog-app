import React, { useContext } from "react";
import Sidebar from "../../componenets/sidebar/Sidebar";
import "./setting.scss";
import { BiUserCircle } from "react-icons/bi";
import { Context } from "../../context/Context";
const Setting = () => {
  const { user } = useContext(Context);

  return (
    <div className="settings">
      <div className="settings_Wrapper">
        <div className="settings_Title">
          <span className="settings_UpdateTitle">Update your account</span>
          <span className="settings_DeleteTitle">Delete your account</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img src="assets/person/4.jpeg" alt="userimg" />

            <label htmlFor="fileInput">
              <BiUserCircle className="settingsPPIcon" />
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
          </div>
          <label>Username</label>
          <input type="text" placeholder={user.username} />
          <label>Email</label>
          <input type="email" placeholder={user.email} />
          <label>Password</label>
          <input type="password" />
          <button className="settingsSubmit">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
};

export default Setting;
