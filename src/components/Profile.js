import React from 'react';
import "./App.css";
import "./index.css";
import Skillstack from './Skillstack';
import profile from "../images/ic_profile_img.jpg";
import twitter from "../images/ic_twitter.png";
import github from "../images/ic_github.png";
import linkedin from "../images/ic_linkedin.png";
import email from '../images/ic_email.png';
import resume from '../images/ic_resume.png';



const Profile = () => {
  return (
    <section id="profile" className="section">
      <h2 className="text-center">PROFILE</h2>
      <div className={'dashboard-header-container'}>
        <div className={'dashboard-banner-overlay'}></div>
        <div className={'dashboard-profile-div'}>
          <div className={'dashboard-profile-img-container'}>
            <img src={profile} className={'dashboard-profile-img'} alt="" />
            <div className={'social-profile-container'}>
              <a href="./resume.pdf" target="_blank" rel="noopener noreferrer"><img src={resume} className={'contact-social-img'} alt="" /></a>
              <a href="mailto:nguyendm77@gmail.com" target="_blank" rel="noopener noreferrer"><img src={email} className={'contact-social-img'} alt="" /></a>
              <a href="https://www.linkedin.com/in/minh-nguyen-292b4976/" target="_blank" rel="noopener noreferrer"><img src={linkedin} className={'contact-social-img'} alt="" /></a>
              <a href="https://github.com/minhd-nguyen" target="_blank" rel="noopener noreferrer"><img src={github} className={'contact-social-img'} alt="" /></a>
              <a href="https://twitter.com/minh_dnguyen" target="_blank" rel="noopener noreferrer"><img src={twitter} className={'contact-social-img'} alt="" /></a>
            </div>
          </div>
          <div className={'dashboard-profile-details-container'}>
            <p className={'dashboard-profile-name-label'}>Introduction:</p>
            <p className={'dashboard-profile-deatils'}>
              Hello, World !
              </p>
            <p className={'dashboard-profile-deatils'}>
              I'm Minh Nguyen, software engineer experiences with the latest front-end and back-end programming languages, tools, and methodologies including: HTML, CSS, SASS, JavaScript, jQuery, Postgres, MongoDB, Ruby, Ruby on Rails, AngularJS, NodeJS, ReactJS, WordPress, Git, GitHub, and Agile/Scrum.
              </p>
            <p className={'dashboard-profile-name-label'}>Background: </p>
            <p className={'dashboard-profile-deatils'}>
              My foundation is senior experiences, results-oriented, high-energy, hands-on professional and a successful record of accomplishments in the hardware computer, medical device as well as in aerospace industries.
              </p>
            <p className={'dashboard-profile-deatils'}>
              Coding is not only the job, it’s also my passionate and an essential part of my life.
              Practicing coding have been daily habit of my life, I believe that the future will be created from what I am doing today.
              </p>
            <p className={'dashboard-profile-name-label'}>Technologies: </p>
            <Skillstack />
          </div>
        </div>
        <img className={'dashboard-banner-img'} alt="" />
      </div>
    </section>
  );
};

export default Profile;
