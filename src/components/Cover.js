import React from 'react';
import "./App.css";
import "./css/index.css";
import poster from "./images/fullstack_poster.png";


const Cover = () => {

  state = {
    loading: true
  }

  componentDidMount() {
    if (this.video) {
      this.video.addEventListener("loadeddata", () => {
        this.setState({ loading: false });
      });
    }
  }

  componentWillUnmount() {
    if (this.video) {
      this.video.removeEventListener("loadeddata", () => {
      });
    }
  }

  return (
    <div className="home-parent-container">
      <video autoPlay loop muted poster={poster}>
        <img className={'home-banner-img'} alt="" src={poster} />
        <source src="https://res.cloudinary.com/djhte2ard/video/upload/v1599667813/dev_background_purctc.mp4" type="video/mp4" />
      </video>
      <div className={'dashboard-down-arrow-container'}>
        <a href="./resume.pdf" target="_blank" rel="no-opener no-referrer" className={'resume-container'}><span>HIRING ME TODAY</span></a>
      </div>
    </div>
  );
};

export default Cover;
