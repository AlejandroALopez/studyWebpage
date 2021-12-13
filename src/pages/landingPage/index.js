import React from 'react';
// import { connect } from 'react-redux';
import './style.scss';

// import { fetchConstants } from '../actions/constantsActions';

export default function LandingPage(props) {
  return (
    <div className="landingPage-container">
      <div className="landingPage-header">
        <div className="landingPage-header-name">Alejandro Lopez</div>
        <div className="landingPage-header-navigation">
          <div>HOME</div>
          <div>ABOUT ME</div>
          <div>SKILLS</div>
          <div>WORK</div>
          <div>INTERESTS</div>
          <div>CONTACT</div>
        </div>
      </div>
      <div className="homepage">
        <p className="intro">
          Hello! I am
          {' '}
          <span>Alejandro Lopez</span>
          , and welcome to my personal website!
        </p>
        <p className="intro-2">
          Here, you will get to know more about me and what I do as a
          {' '}
          <span>Software Developer</span>
        </p>
      </div>
      <div className="aboutme">
        <div className="aboutme-info">
          <i className="fas fa-globe-americas fa-3x" />
          <p>Peru</p>
        </div>
        <div className="aboutme-info">
          <i className="fas fa-graduation-cap fa-3x" />
          <p>Computer Science</p>
        </div>
      </div>
      <div className="skills">
        Skills
      </div>
      <div className="work">
        Work
      </div>
      <div className="interests">
        Interests
      </div>
      <div className="contact">
        <p className="contact-title">Contact info</p>
        <div className="contact-info">
          <i className="far fa-envelope fa-3x" />
          <p>lopez.alejandro@dali.dartmouth.edu</p>
        </div>
        <div className="contact-info">
          <i className="fas fa-mobile-alt fa-3x" />
          <p>(+51) 957-605-311</p>
        </div>
        <div className="contact-buttons">
          <i className="fab fa-linkedin fa-5x" />
          <i className="fab fa-github fa-5x" />
        </div>
      </div>
    </div>
  );
}
