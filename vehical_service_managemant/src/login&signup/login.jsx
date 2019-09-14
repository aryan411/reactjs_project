import React, { Component } from "react";
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usrname: "",
      password: ""
    };
  }

  changeusr = event => {
    console.log(event);
    this.setState({ usrname: event.target.value });
  };
  changepass = event => {
    console.log(event);
    this.setState({ password: event.target.value });
  };
  chageclear = () => {
    this.setState({ usrname: "", password: "" });
    document.getElementById("pass").value = "";
    document.getElementById("usr").value = "";
    console.log(this.state.password + "      " + this.state.usrname);
  };
  render() {
    return (
      <div className="loginblock">
        <form>
          <label htmlFor="uname" className="loginlabel">
            <b>Username</b>
          </label>
          <br />
          <input
            type="text"
            placeholder="Enter Username"
            id="usr"
            className="usrpass"
            name="uname"
            ref="usr"
            onChange={this.changeusr}
          />
          <br />
          <label htmlFor="psw" className="loginlabel">
            <b>Password</b>
          </label>
          <br />
          <input
            type="password"
            placeholder="Enter Password"
            id="pass"
            className="usrpass"
            name="psw"
            ref="pass"
            onChange={this.changepass}
          />
          <br />
          <button onClick={this.chageclear} type="button" className="cancelbtn">
            Cancel
          </button>
          <button
            //onClick={this.props.changeusrpass}
            type="button"
            className="loginbt"
          >
            Login
          </button>
          <button type="button" onClick={this.props.signup}>
            signup
          </button>
        </form>

        <label>
          <input type="checkbox" name="remember" defaultChecked /> Remember me
        </label>
        <br />
        <span className="psw">
          Forgot <a href="https://github.com">password?</a>
        </span>
      </div>
    );
  }
}
