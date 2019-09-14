import React, { Component } from "react";

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usrname: "",
      password: "",
      email: "",
      name: ""
    };
  }
  changename = event => {
    console.log(event);
    this.setState({ name: event.target.value });
  };
  changeusrname = event => {
    console.log(event);
    this.setState({ usrname: event.target.value });
  };
  changepass = event => {
    console.log(event);
    this.setState({ password: event.target.value });
  };
  chandeemail = event => {
    console.log(event);
    this.setState({ email: event.target.value });
  };
  changeclear = () => {
    this.setState({ usrname: "", password: "", email: "", name: "" });
    document.getElementById("psw").value = "";
    document.getElementById("usrname").value = "";
    document.getElementById("Name").value = "";
    document.getElementById("email").value = "";
  };

  render() {
    return (
      <div className="signupclass">
        <form>
          <h1>Sign Up</h1>
          <label htmlFor="Name">
            <b>Name</b>
          </label>
          <br />
          <input
            type="text"
            placeholder="Enter Your Name"
            name="Name"
            id="Name"
            onChange={this.changename}
            required
          />
          <br />
          <label htmlFor="usrname">
            <b>User Name</b>
          </label>
          <br />
          <input
            type="text"
            placeholder="Enter Username or Email"
            name="usrname"
            id="usrname"
            onChange={this.changeusrname}
            required
          />
          <br />
          <label htmlFor="email">
            <b>Email</b>
          </label>
          <br />
          <input
            type="text"
            placeholder="Enter Email"
            name="email"
            id="email"
            onChange={this.chandeemail}
            required
          />
          <br />
          <label htmlFor="psw">
            <b>Password</b>
          </label>
          <br />
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            id="psw"
            onChange={this.changepass}
            required
          />
          <br />
          <label htmlFor="psw-repeat">
            <b>Repeat Password</b>
          </label>
          <br />
          <input
            type="password"
            placeholder="Repeat Password"
            name="psw-repeat"
            id="psw-repeat"
            required
          />
          <br />
          <label>
            <input
              type="checkbox"
              checked="checked"
              name="remember"
              id="remember"
            />
            Remember me
          </label>
          <br />
          <div className="clearfix">
            <button
              type="button"
              className="cancelbtn"
              id="cancel"
              onClick={this.changeclear}
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={this.props.signin}
              className="signupbtn"
              id="signup"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    );
  }
}
