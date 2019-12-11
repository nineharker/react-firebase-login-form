import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import history from './history';
import LandingPage from './components/LandingPage';
import LoginedPage from './components/LoginedPage';
import NavBar from './components/NavBar';

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <NavBar />
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/logined" exact component={LoginedPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
