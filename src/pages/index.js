import React from "react";
// import favicon from "../static/favicon.png";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "font-awesome/css/font-awesome.min.css";
// import "./index.css";

// import { Link } from "gatsby"
// import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"

// import Navigation from "../components/navigation";
import Cover from "../components/Cover";
import Profile from "../components/Profile";
import Skill from "../components/Skill";
import Project from "../components/Project";
import Blog from "../components/Blog";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";



// const IndexPage = () => (
//   <Layout>
//     <SEO title="Home" />
//     <h1>Hi people</h1>
//     <p>Welcome to your new Gatsby site.</p>
//     <p>Now go build something great.</p>
//     <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
//       <Image />
//     </div>
//     <Link to="/page-2/">Go to page 2</Link> <br />
//     <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
//   </Layout>
// )

const IndexPage = () => {
  return (
    <div>
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
