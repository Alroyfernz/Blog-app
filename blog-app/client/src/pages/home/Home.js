import React, { useEffect, useState } from "react";
import Header from "../../componenets/header/Header";
import Posts from "../../componenets/posts/Posts";
import Sidebar from "../../componenets/sidebar/Sidebar";
import "./home.scss";
import axios from "axios";
import { useLocation } from "react-router";
const Home = () => {
  const [posts, setPosts] = useState();
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get("/posts" + search);
      setPosts(response.data);
    };

    fetchPosts();
  }, []);
  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </>
  );
};

export default Home;
