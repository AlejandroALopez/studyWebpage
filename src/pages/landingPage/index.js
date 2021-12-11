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
        About me
      </div>
      <div className="skills">
        About me
      </div>
      <div className="work">
        About me
      </div>
      <div className="interests">
        About me
      </div>
      <div className="contact">
        About me
      </div>
    </div>
  );
}
