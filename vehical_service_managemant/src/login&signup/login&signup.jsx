import React, { Component } from "react";
import Signup from "./signup.jsx";
import Login from "./login.jsx";

class Loginsignup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signinclick: true
    };
  }
  signup = () => {
    this.setState({ signinclick: false });
  };
  signin = () => {
    this.setState({ signinclick: true });
  };

  render() {
    if (this.state.signinclick) {
      return <Login signup={this.signup} />;
    } else {
      return <Signup signin={this.signin} />;
    }
  }
}

export default Loginsignup;
