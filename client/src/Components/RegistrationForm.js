import React, { Component } from "react";
import "../styling/RegistrationForm.css";

class RegistrationForm extends Component {
  render() {
    return (
      <div>
        <section className="form-container">
          <section className="field-style">
            <form>
              <section className="row">
                <header>Email Address:</header>
                <input type="text" placeholder="Email Address" />
              </section>
              <section className="row">
                <header>Username:</header>
                <input type="text" placeholder="Username" />
              </section>
              <section className="row">
                <header>Password:</header>
                <input type="text" placeholder="Password" />
              </section>
              <section className="row">
                <header>Address:</header>
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
