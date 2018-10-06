import React, { Component } from "react";
import "../styling/RegistrationForm.css";
import { Link } from "react-router-dom";

class RegistrationForm extends Component {
  render() {
    return (
      <div>
        <section className="breadcrumbs-container">
          <span className="breadcrumb">
            <Link to="/" className="link">
              {/* <img id="home_icon" src={Home} alt="Home Icon" /> */}
              <button>Home</button>
            </Link>
            <span> >> Register </span>
          </span>
        </section>
        <section className="form-container">
          <section className="field-style">
            <form>
              <section className="row">
                <header className="field-header">Email Address:</header>
                <input type="text" placeholder="Email Address" />
              </section>
              <section className="row">
                <header className="field-header">Username:</header>
                <input type="text" placeholder="Username" />
              </section>
              <section className="row">
                <header className="field-header">Password:</header>
                <input type="text" placeholder="Password" />
              </section>
              <section className="row">
                <header className="field-header">Address:</header>
                <input type="text" placeholder="Address(Optional)" />
              </section>
              <button>Submit</button>
            </form>
          </section>
        </section>
      </div>
    );
  }
}

export default RegistrationForm;
