import React, { Component } from "react";
import "../styling/StartButton.css";
import { Link } from "react-router-dom";

class StartButton extends Component {
  render() {
    return (
      <div className="button-container">
        <Link to="/home">
          <button className="start-button">Get Started</button>
        </Link>
      </div>
    );
  }
}

export default StartButton;
