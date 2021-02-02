import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";


import Navigator from "../components/Navigator";
import Cover from "../components/Cover";
import Profile from "../components/Profile";
import Skill from "../components/Skill";
import Project from "../components/Project";
import Blog from "../components/Blog";
import Contact from "../components/Contact";
import Footer from "../components/Footer";



const IndexPage = () => {
  return (
    <div>
      <Navigator />
      <Cover />
      <Profile />
      <Skill />
      <Project />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
};


export default IndexPage;
