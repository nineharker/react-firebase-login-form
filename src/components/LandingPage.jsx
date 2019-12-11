import React, { Component } from 'react';
import LoginForm from './LoginForm';

class LandingPage extends Component {
  render() {
    return (
      <div>
        LandingPage
        <LoginForm formText={'ログイン'} />
      </div>
    );
  }
}

export default LandingPage;
