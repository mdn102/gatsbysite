import React from 'react';
import "./App.css";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const Contact = () => {

  return (
    <section id="contact" className="section">
      <h2 className="text-center">CONTACT</h2>
      <div className='contacts-parent-container'>
        <div className='contacts-content-container'>
          <a href="callto: live:nguyendm77_1" target="_blank" className={'resume-contact'} rel="no-opener no-referrer">Talk with me</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
