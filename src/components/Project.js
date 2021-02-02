import React from 'react';
import "./App.css";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-tiny-fab/dist/styles.css';

import githubIcon from '../images/icon_github_white.png';
import webIcon from '../images/icon_web_site.png';

const Project = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-grid">
        <div className="card">
          <div className="image">
            <img src="https://res.cloudinary.com/djhte2ard/image/upload/v1603343046/project11_fcjqhs.png" alt="project1" />
            <img src="https://res.cloudinary.com/djhte2ard/image/upload/v1603343046/project12_pgnj88.png" alt="project1" />
          </div>
          <div className="details">
            <div className="center">
              <h1>Blackjack</h1>
              <span>Game</span>
              <p>A popular game were created with simple rule just for fun and relaxing.</p>
              <ul>
                <li><a href="https://github.com/minhd-ngguyen/blackjack-game" target="_blank" rel="noopener noreferrer"><img src={githubIcon} alt="github icon" /></a></li>
                <li><a href="https://minhd-nguyen.github.io/blackjack-game/" target="_blank" rel="noopener noreferrer"><img src={webIcon} alt="" /></a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="image">
            <img src="https://res.cloudinary.com/djhte2ard/image/upload/v1603343058/project21_b0gh70.png" alt="project2" />
            <img src="https://res.cloudinary.com/djhte2ard/image/upload/v1603343059/project22_eoznve.png" alt="project2" />
          </div>
          <div className="details">
            <div className="center">
              <h1>myMelody</h1>
              <span>Spotify API</span>
              <p>An react app to search the song, artist or album. You also can create your favorite song or event.</p>
              <ul>
                <li><a href="https://github.com/minhd-nguyen/myMelody" target="_blank" rel="noopener noreferrer"><img src={githubIcon} alt="" /></a></li>
                <li><a href="https://mindmelody.herokuapp.com/" target="_blank" rel="noopener noreferrer"><img src={webIcon} alt="" /></a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="image">
            <img src="https://res.cloudinary.com/djhte2ard/image/upload/v1603343049/project31_arxjbd.png" alt="project3" />
            <img src="https://res.cloudinary.com/djhte2ard/image/upload/v1603343048/project32_r7jggj.png" alt="project3" />
          </div>
          <div className="details">
            <div className="center">
              <h1>Stay Inside</h1>
              <span>Full Stack</span>
              <p>A social app help to meet up safety in Covid-19 outbreak.</p>
              <ul>
                <li><a href="https://github.com/minhd-nguyen/stay-inside-frontend" target="_blank" rel="noopener noreferrer"><img src={githubIcon} alt="" /></a><span>Frontend</span></li>
                <li><a href="https://github.com/minhd-nguyen/stay-inside-backend" target="_blank" rel="noopener noreferrer"><img src={githubIcon} alt="" /></a><span>Backend</span></li>
                <li><a href="https://stay-inside-meet-up.netlify.app/" target="_blank" rel="noopener noreferrer"><img src={webIcon} alt="" /></a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="image">
            <img src="https://res.cloudinary.com/djhte2ard/image/upload/v1603343058/project41_yavmfx.png" alt="project4" />
            <img src="https://res.cloudinary.com/djhte2ard/image/upload/v1603343060/project42_pfqoji.png" alt="project4" />
          </div>
          <div className="details">
            <div className="center ">
              <h1>Terra</h1>
              <span>Education</span>
              <p>An education app for kid to learn how the recycle trash impact to their environment. </p>
              <ul>
                <li><a href="https://github.com/minhd-nguyen/terra" target="_blank" rel="noopener noreferrer"><img src={githubIcon} alt="" /></a></li>
                <li><a href="https://terra-ten.vercel.app/" target="_blank" rel="noopener noreferrer"><img src={webIcon} alt="" /></a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="image">
            <img src="https://res.cloudinary.com/djhte2ard/image/upload/v1603343058/project51_plbrty.png" alt="project5" />
            <img src="https://res.cloudinary.com/djhte2ard/image/upload/v1603343059/project52_bru9i4.png" alt="project5" />
          </div>
          <div className="details">
            <div className="center">
              <h1>COVID-19 tracker</h1>
              <span>D3</span>
              <p>Analyze data with D3 to keep track the status of COVID-19 worldwide & US.</p>
              <ul>
                <li><a href="https://github.com/minhd-nguyen/covid-tracker" target="_blank" rel="noopener noreferrer"><img src={githubIcon} alt="" /></a></li>
                <li><a href="https://covid-tracker-iota-nine.vercel.app/" target="_blank" rel="noopener noreferrer"><img src={webIcon} alt="" /></a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="card ">
          <div className="image">
            <img src="https://res.cloudinary.com/djhte2ard/image/upload/v1603343053/project61_m1ku8s.png" alt="project6" />
            <img src="https://res.cloudinary.com/djhte2ard/image/upload/v1603343058/project62_go7egg.png" alt="project6" />
          </div>
          <div className="details">
            <div className="center">
              <h1>Note sticker</h1>
              <span>React app</span>
              <p>An react app to create note useful in various purpose.</p>
              <ul>
                <li><a href="https://github.com/minhd-nguyen/note-sticker" target="_blank" rel="noopener noreferrer"><img src={githubIcon} alt="" /></a></li>
                <li><a href="https://note-sticker.herokuapp.com/" target="_blank" rel="noopener noreferrer"><img src={webIcon} alt="" /></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
