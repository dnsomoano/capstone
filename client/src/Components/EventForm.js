import React, { Component } from "react";
import "../styling/EventForm.css";
import { Link } from "react-router-dom";
import Auth from "../Auth/Auth.js";

const auth = new Auth();

class EventForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      eventName: "",
      // timeStart: new DateTime,
      // timeEnd: new DateTime,
      eventAddress: "",
      isFinished: false,
      // authed: {
      //   isLoggedIn: this.props.match.params.authed.isLoggedIn
      // }
    };
  }

  componentDidMount() {
    console.log({ props: this.props });
    if (auth.isAuthenticated()) {
      this.getLatest();
      auth.getProfile((err, profile) => {
        this.setState({
          // latitude: this.props.coords.latitude,
          // longitude: this.props.coords.longitude,
          authed: {
            isLoggedIn: true,
            profile
          }
        });
      });
    }

  }

getLatest = () => {
  const PROFILE_URL = "https://localhost:5001/api/events" + this.state.id;
  fetch(PROFILE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" }
  })
    .then(resp => resp.json())
    .then(eventData => {});
}

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div>
        <section className="breadcrumbs-container">
          <span className="breadcrumb">
            <Link to="/home" className="link">
              {/* <img id="home_icon" src={Home} alt="Home Icon" /> */}
              <button>Home</button>
            </Link>
            <span> >> New Event </span>
          </span>
        </section>
        <section className="form-container">
          <section className="field-style">
            <form  className="form-container">
              <section className="row">
                <header className="field-header">Name of Event:</header>
                <input type="text" placeholder="name of event" />
              </section>
              <section className="row">
                <header className="field-header">Location:</header>
                <input type="text" placeholder="location of event" />
              </section>
              <section className="row">
                <header className="field-header">Time Start:</header>
                <input type="text" placeholder="0:00" />
              </section>
              <section className="row">
                <header className="field-header">Time End:</header>
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
