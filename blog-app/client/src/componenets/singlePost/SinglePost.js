import React from "react";
import "./singlePost.scss";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
const SinglePost = () => {
  return (
    <div className="singlePost">
      <div className="singlePost_Wrapper">
        <img src="assets/post/2.jpeg" alt="" className="singlePost_Image" />
        <h1 className="singlePost_Title">
          Lorem ipsum dolor sit.
          <div className="singlePost_Edit">
            <FiEdit style={{ color: "teal" }} className="singlePost_Icons" />
            <MdDelete
              style={{ color: "tomato" }}
              className="singlePost_Icons"
            />
          </div>
        </h1>
        <div className="singlePost_Info">
          <span className="singlePost_Author">
            Author: <b> Alroy</b>
          </span>
          <span className="singlePost_Date">1 hour ago</span>
        </div>
        <p className="singlePost_Description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          blanditiis maiores, ex quos dolor consequatur vero accusamus unde
          recusandae non aspernatur officia architecto ipsa corporis dolore
          eaque adipisci provident, repellat dolorum saepe! Officiis doloremque,
          id tempore cupiditate consequuntur, molestias, dolorem temporibus
          sequi sint aperiam dicta? Dignissimos veniam perferendis quaerat
          recusandae nostrum sequi modi eligendi consequatur aspernatur maxime,
          nam dolore. Laboriosam voluptatibus sit ut reprehenderit hic!
          Doloribus neque voluptas temporibus quae expedita, maxime nesciunt
          harum vel quam tempore amet aliquam voluptatem nemo, dolore facilis.
          Voluptatum tenetur eum debitis magnam iusto quasi a delectus! Harum
          ipsum itaque beatae maxime, nulla soluta tempora? Lorem ipsum, dolor
          sit amet consectetur adipisicing elit. Sapiente doloribus eligendi cum
          aspernatur ab impedit placeat quos quisquam nam facere facilis amet
          odio, quas excepturi at consectetur laudantium quasi consequatur, quis
          id nesciunt perspiciatis aut vel odit! Nisi quam eius repudiandae,
          tempore, quia quo neque repellat reprehenderit deleniti officia nobis!
        </p>
      </div>
    </div>
  );
};

export default SinglePost;
