import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { emailChanged, passwordChanged, loginUser, signUpUser, loggined } from '../actions';
import { FacebookLoginButton, GoogleLoginButton, TwitterLoginButton } from 'react-social-login-buttons';
import CircularProgress from '@material-ui/core/CircularProgress';
import firebase from '../config/firebase';

class LoginForm extends Component {
  onEmailandPasswordLogin = () => {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  };

  onEmailandPasswordSignUp = () => {
    const { email, password } = this.props;
    this.props.signUpUser({ email, password });
  };

  onButtonPress = () => {
    if (this.props.formText === 'ログイン') {
      this.onEmailandPasswordLogin();
    } else {
      this.onEmailandPasswordSignUp();
    }
  };

  onEmailChange = email => {
    this.props.emailChanged(email.target.value);
  };

  onPasswordChane = text => {
    this.props.passwordChanged(text.target.value);
  };

  googleLogin = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithRedirect(provider);
  };

  facebookLogin = () => {
    const provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithRedirect(provider);
  };

  twitterLogin = () => {
    const provider = new firebase.auth.TwitterAuthProvider();
    firebase.auth().signInWithRedirect(provider);
  };

  renderErrorMessage = () => {
    const { error } = this.props;
    if (error === 'auth/user-not-found') {
      return 'ユーザー情報が登録されていません。';
    } else if (error === 'auth/wrong-password') {
      return 'パスワードが間違っています。';
    } else if (error === 'auth/invalid-email') {
      return 'メールアドレスが正しくありません。';
    } else if (error === 'auth/weak-password') {
      return 'パスワードは少なくとも6文字以上必要です。';
    } else if (error === 'auth/email-already-in-use') {
      return 'このメールアドレスは既に登録されています。';
    }
  };

  render() {
    return (
      <div>
        <GoogleLoginButton onClick={this.googleLogin} align="center" iconSize={'20'} size={'40px'}>
          <span style={{ fontSize: 16 }}>Googleで{this.props.formText}</span>
        </GoogleLoginButton>
        <TwitterLoginButton onClick={this.twitterLogin} align="center" iconSize={'20px'} size={'40px'}>
          <span style={{ fontSize: 16 }}>Twitterで{this.props.formText}</span>
        </TwitterLoginButton>
        <FacebookLoginButton onClick={this.facebookLogin} align="center" iconSize={'20px'} size={'40px'}>
          <span style={{ fontSize: 16 }}>Facebookで{this.props.formText}</span>
        </FacebookLoginButton>
        <div style={{ textAlign: 'center', marginTop: 20 }}>または</div>
        <form style={{ textAlign: 'center' }} noValidate autoComplete="off">
          <div>
            <TextField
              id="standard-email"
              label="メールアドレス"
              value={this.props.email}
              onChange={this.onEmailChange}
              margin="normal"
            />
          </div>
          <div>
            <TextField
              id="standard-password"
              label="パスワード"
              type="password"
              value={this.props.password}
              onChange={this.onPasswordChane}
              margin="normal"
            />
          </div>
          <div style={{ color: '#fa755a' }}>{this.renderErrorMessage()}</div>
          {this.props.loading ? (
            <CircularProgress style={{ marginTop: 5 }} />
          ) : (
            <Button style={{ margin: 20 }} onClick={this.onButtonPress} variant="contained" color="primary">
              {this.props.formText}
            </Button>
          )}
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return {
    email: auth.email,
    password: auth.password,
    error: auth.error,
    loading: auth.loading,
  };
};

export default connect(mapStateToProps, {
  emailChanged,
  passwordChanged,
  loginUser,
  loggined,
  signUpUser,
})(LoginForm);
