import React from "react";
import { GrFormAdd } from "react-icons/gr";
import "./write.scss";
const Write = () => {
  return (
    <div className="write">
      <img src="assets/post/2.jpeg" alt="" className="write_Image" />
      <form className="write_Form">
        <div className="write_Form_Group">
          <label htmlFor="fileInput">
            <GrFormAdd className="write_Icon" />
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <input
            type="text"
            className="write_Input"
            autoFocus={true}
            placeholder="Title"
          />
        </div>
        <div className="write_Form_Group">
          <textarea
            placeholder="Tell your story..."
            type="text"
            className="write_Input write_Text"
          ></textarea>
        </div>
        <button className="write_Submit">Publish</button>
      </form>
    </div>
  );
};

export default Write;
