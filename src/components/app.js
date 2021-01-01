import React from 'react';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import ReactModal from 'react-modal';

// import { fetchConstants } from '../actions/constantsActions';
import LandingPage from '../pages/landingPage';

ReactModal.setAppElement('#main');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // topics: 0,
    };
  }

  render() {
    return (
      <Router>
        <div id="app">
          <Switch>
            <Route exact path="/" component={LandingPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
