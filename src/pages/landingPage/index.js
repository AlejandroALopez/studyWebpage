import React from 'react';
import { connect } from 'react-redux';
import './style.scss';

// import { fetchConstants } from '../actions/constantsActions';

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // topics: 0,
    };
  }

  render() {
    return (
      <div className="landingPage-container">
        <div className="landingPage-header-container">
          <div className="landingPage-header-title">This is the landing page!</div>
        </div>
      </div>
    );
  }
}

export default connect(null, {
})(LandingPage);
