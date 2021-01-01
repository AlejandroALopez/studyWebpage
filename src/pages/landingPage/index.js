import React from 'react';
import { connect } from 'react-redux';

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
      <div id="landingPage-container">
        <div>
          <p>This is the landing page! </p>
        </div>
      </div>
    );
  }
}

export default connect(null, {
})(LandingPage);
