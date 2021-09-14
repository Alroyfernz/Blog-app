import React from "react";
import "./post.scss";
const Post = () => {
  return (
    <div className="post">
      <img className="post_Image" src="assets/post/4.jpeg" alt="" />
      <div className="post_Info">
        <div className="post_Catergories">
          <span className="post_Catergory">Music</span>
          <span className="post_Catergory">life</span>
        </div>
        <span className="post_Title">Lorem ipsum dolor sit amet.</span>
        <hr />
        <span className="post_Date">1 hour ago</span>
      </div>
      <p className="post_Description">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias aperiam
        cum ipsam, animi quos saepe hic. Corrupti ipsam ratione quia. Lorem
        ipsum dolor sit amet consectetur, adipisicing elit. Quaerat sint magni
        impedit cum repudiandae? Ab tempora, a fugit itaque ipsam eos, ex eius
        incidunt nihil quae modi rem ducimus mollitia, vero consequatur quis.
        Eligendi laboriosam aperiam repellat consequuntur, tenetur soluta id sit
        debitis aliquid natus maiores delectus quam eveniet. Rerum.
      </p>
    </div>
  );
};

export default Post;
