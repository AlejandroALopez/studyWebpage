import React from 'react';
import { Link } from 'react-scroll';
import cv from '../../assets/cv.pdf';
// import { connect } from 'react-redux';
import './style.scss';

// import { fetchConstants } from '../actions/constantsActions';

export default function LandingPage(props) {
  return (
    <div className="landingPage-container">
      <div className="landingPage-header">
        <div className="landingPage-header-name">Alejandro Lopez</div>
        <div className="landingPage-header-navigation">
          <div>
            <Link to="homepage" spy smooth offset={50} duration={500}>HOME</Link>
          </div>
          <div>
            <Link to="aboutme" spy smooth offset={50} duration={500}>ABOUT ME</Link>
          </div>
          <div>
            <Link to="skills" spy smooth offset={50} duration={500}>SKILLS</Link>
          </div>
          <div>
            <Link to="work" spy smooth offset={50} duration={500}>WORK</Link>
          </div>
          <div>
            <Link to="interests" spy smooth offset={50} duration={500}>INTERESTS</Link>
          </div>
          <div>
            <Link to="contact" spy smooth offset={50} duration={500}>CONTACT</Link>
          </div>
        </div>
      </div>
      <div className="homepage" id="homepage">
        <img className="homepage-image" alt="profile_img" src="src/assets/profile.jpeg" />
        <div className="intro-container">
          <p className="intro">
            Hello! I am
            {' '}
            <span>Alejandro Lopez</span>
            {' '}
            and I am a
            {' '}
            <span>Full-Stack Developer</span>
          </p>
          <div className="intro-buttons-container">
            <button type="button" className="intro-button">
              Contact me
            </button>
            <a className="intro-button" href={cv} target="_blank" rel="noreferrer">
              <p>My resume</p>
            </a>
          </div>
        </div>
      </div>
      <div className="aboutme" id="aboutme">
        <div className="aboutme-info">
          <i className="fas fa-globe-americas fa-3x" />
          <p>Peru</p>
        </div>
        <div className="aboutme-info">
          <i className="fas fa-graduation-cap fa-3x" />
          <p>Computer Science</p>
        </div>
      </div>
      <div className="skills" id="skills">
        <p className="skills-title">Skilled in:</p>
        <div className="skills-list">
          <div>
            <p className="skills-tech">React Native</p>
            <div className="skills-bar-background">
              <div className="skills-bar" id="p90" />
            </div>
          </div>
          <div>
            <p className="skills-tech">React</p>
            <div className="skills-bar-background">
              <div className="skills-bar" id="p80" />
            </div>
          </div>
          <div>
            <p className="skills-tech">HTML5 (HTML + CSS + JS)</p>
            <div className="skills-bar-background">
              <div className="skills-bar" id="p80" />
            </div>
          </div>
          <div>
            <p className="skills-tech">NodeJS</p>
            <div className="skills-bar-background">
              <div className="skills-bar" id="p70" />
            </div>
          </div>
          <div>
            <p className="skills-tech">Python</p>
            <div className="skills-bar-background">
              <div className="skills-bar" id="p60" />
            </div>
          </div>
          <div>
            <p className="skills-tech">Unity</p>
            <div className="skills-bar-background">
              <div className="skills-bar" id="p50" />
            </div>
          </div>
        </div>
      </div>
      <div className="work" id="work">
        Work
      </div>
      <div className="interests" id="interests">
        Interests
      </div>
      <div className="contact" id="contact">
        <p className="contact-title">Contact info</p>
        <div className="contact-info">
          <i className="far fa-envelope fa-3x" />
          <p>alejandro.a.lopez.cochachi.23@dartmouth.edu</p>
        </div>
        <div className="contact-info">
          <i className="fas fa-mobile-alt fa-3x" />
          <p>(603) 277 - 8656</p>
        </div>
        <div className="contact-buttons">
          <i className="fab fa-linkedin fa-5x" />
          <i className="fab fa-github fa-5x" />
        </div>
      </div>
    </div>
  );
}
