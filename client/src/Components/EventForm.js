import React, { Component } from "react";
import "../styling/EventForm.css";

class EventForm extends Component {
  render() {
    return (
      <div>
        <section className="form-container">
          <section className="field-style">
            <form>
              <section className="row">
                <header>Name of Event:</header>
                <input type="text" placeholder="name of event" />
              </section>
              <section className="row">
                <header>Location:</header>
                <input type="text" placeholder="location of event" />
              </section>
              <section className="row">
                <header>Time Start:</header>
                <input type="text" placeholder="0:00" />
              </section>
              <section className="row">
                <header>Time End:</header>
                <input type="text" placeholder="0:00" />
              </section>
              <button>Submit</button>
            </form>
          </section>
        </section>
      </div>
    );
  }
}

export default EventForm;
