import React from 'react';
import "./App.css";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const Skill = () => {

  return (
    <section id="services" className="services py-5 max-wrapper">
      <div className="container">
        <div className="row flex-wrap-container">
          <div className="col-lg-4 text-center">
            <div className="services-item">
              <img src="https://img.icons8.com/color/40/000000/html-5.png" alt="html icon" />
              <h5 className="text-dark mb-3">HTML5</h5>
            </div>
          </div>
          <div className="col-lg-4 text-center">
            <div className="services-item">
              <img src="https://img.icons8.com/dusk/40/000000/css3.png" alt="css icon" />
              <h5 className="mb-3 text-dark">CSS3</h5>
            </div>
          </div>
          <div className="col-lg-4 text-center">
            <div className="services-item">
              <img src="https://img.icons8.com/color/40/000000/javascript.png" alt="js icon" />
              <h5 className="mb-3 text-dark">Javascript</h5>
            </div>
          </div>
          <div className="col-lg-4 text-center">
            <div className="services-item">
              <img src="https://img.icons8.com/ios-filled/40/000000/jquery.png" alt="jquery icon" />
              <h5 className="mb-3 text-dark">JQuery</h5>
            </div>
          </div>
          <div className="col-lg-4 text-center">
            <div className="services-item">
              <img src="https://img.icons8.com/officel/40/000000/react.png" alt="react icon" />
              <h5 className="mb-3 text-dark">React.js</h5>
            </div>
          </div>
          <div className="col-lg-4 text-center">
            <div className="services-item">
              <img src="https://img.icons8.com/color/40/000000/python.png" alt="python icon" />
              <h5 className="mb-3 text-dark">Python</h5>
            </div>
          </div>
          <div className="col-lg-4 text-center">
            <div className="services-item">
              <img src="https://img.icons8.com/color/40/000000/nodejs.png" alt="nodejs icon" />
              <h5 className="mb-3 text-dark">NodeJS - Express</h5>
            </div>
          </div>
          <div className="col-lg-4 text-center">
            <div className="services-item">
              <img src="https://img.icons8.com/dusk/40/000000/webpack.png" alt="webpack icon" />
              <h5 className="mb-3 text-dark">Webpack</h5>
            </div>
          </div>
          <div className="col-lg-4 text-center">
            <div className="services-item">
              <img src="https://img.icons8.com/nolan/40/sql.png" alt="sql icon" />
              <h5 className="mb-3 text-dark">SQL</h5>
            </div>
          </div>
          <div className="col-lg-4 text-center">
            <div className="services-item">
              <img src="https://img.icons8.com/color/40/000000/mongodb.png" alt="mongodb icon" />
              <h5 className="mb-3 text-dark">Mongo DB</h5>
            </div>
          </div>
          <div className="col-lg-4 text-center">
            <div className="services-item">
              <img src="https://img.icons8.com/nolan/40/github.png" alt="github icon" />
              <h5 className="mb-3 text-dark">Github</h5>
            </div>
          </div>
          <div className="col-lg-4 text-center">
            <div className="services-item">
              <img src="https://img.icons8.com/color/40/000000/sass.png" alt="sass icon" />
              <h5 className="mb-3 text-dark">SASS</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
