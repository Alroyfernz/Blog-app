import React from "react";
import "./sidebar.scss";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";
import "./sidebar.scss";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar_Item">
        <span className="sidebar_Item_Title">About me</span>
        <img src="assets/person/1.jpeg" alt="" className="sidebar_Item_Image" />
        <p className="sidebar_Item_para">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi
          incidunt dolore amet praesentium expedita odit quos doloribus
          similique dolor magnam!
        </p>
      </div>
      <div className="sidebar_Item">
        <span className="sidebar_Item_Title">Categories</span>
        <ul className="sidebar_Item_List">
          <li className="sidebar_Item_List_Item">Life</li>
          <li className="sidebar_Item_List_Item">Music</li>
          <li className="sidebar_Item_List_Item">Style</li>
          <li className="sidebar_Item_List_Item">Sport</li>
          <li className="sidebar_Item_List_Item">Tech</li>
          <li className="sidebar_Item_List_Item">Cinema</li>
        </ul>
      </div>
      <div className="sidebar_Item">
        <span className="sidebar_Item_Title">follow us</span>
        <div className="sidebar_Social_Conatainer">
          <FaFacebookSquare className="social_Icons" />
          <FaTwitterSquare className="social_Icons" />
          <FaInstagramSquare className="social_Icons" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
