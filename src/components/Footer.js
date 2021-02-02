import React from 'react';
// import "./App.css";
// import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import email from './images/ic_email.png';
import twitter from "./images/ic_twitter.png";
import github from "./images/ic_github.png";
import linkedin from "./images/ic_linkedin.png";
import resume from './images/ic_resume.png';

const Footer = () => {
  return (
    <div className={'contacts-contents-container'}>
      <div className={'contacts-social-container'}>
        <a href="./resume.pdf" target="_blank" rel="noopener noreferrer"><img src={resume} className={'contact-social-img'} alt="" /></a>
        <a href="mailto:nguyendm77@gmail.com" target="_blank" rel="noopener noreferrer"><img src={email} className={'contact-social-img'} alt="" /></a>
        <a href="https://www.linkedin.com/in/minh-nguyen-292b4976/" target="_blank" rel="noopener noreferrer"><img src={linkedin} className={'contact-social-img'} alt="" /></a>
        <a href="https://github.com/minhd-nguyen" target="_blank" rel="noopener noreferrer"><img src={github} className={'contact-social-img'} alt="" /></a>
        <a href="https://twitter.com/minh_dnguyen" target="_blank" rel="noopener noreferrer"><img src={twitter} className={'contact-social-img'} alt="" /></a>
      </div>
      <div className={'contacts-footer-div'}></div>
      <p className={'contacts-footer-text'}>Developed by Minh Nguyen {new Date().getFullYear()}.</p>
      <img className={'contacts-banner-img'} alt="" />
    </div>
  );
};
export default Footer;
