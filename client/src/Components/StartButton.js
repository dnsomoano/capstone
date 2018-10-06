import React, { Component } from "react";
import "../styling/StartButton.css";
import { Link } from "react-router-dom";
import Auth from "../Auth/Auth.js";

const auth = new Auth();
class StartButton extends Component {
  login = () => {
    auth.login();
  };

  render() {
    return (
      <div>
        <section className="button-container">
          {/* <Link to="/home"> */}
          <button className="start-button" onClick={this.login}>
            Get Started
          </button>
          {/* </Link> */}
        </section>
        <section>
          <Link to="/register">
            <span class="register-link">Register?</span>
          </Link>
        </section>
      </div>
    );
  }
}

export default StartButton;
