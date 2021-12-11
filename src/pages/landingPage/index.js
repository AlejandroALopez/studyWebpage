import React from 'react';
// import { connect } from 'react-redux';
import './style.scss';

// import { fetchConstants } from '../actions/constantsActions';

export default function LandingPage(props) {
  return (
    <div className="landingPage-container">
      <div className="landingPage-header-container">
        <div>Home</div>
        <div>Portfolio</div>
        <div>Libraries</div>
        <div>Resources</div>
        <div>More</div>
      </div>

      <div>Welcome to my website!</div>
      <div>
        About me
      </div>
    </div>
  );
}
