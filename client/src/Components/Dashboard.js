import React, { Component } from "react";
import "../styling/Dashboard.css";
import Auth from "../Auth/Auth.js";

import { Link } from "react-router-dom";
import { geolocated } from "react-geolocated";
import {
  // FeatureGroup,
  Map,
  Marker,
  Popup,
  // LayersControl,
  TileLayer
} from "react-leaflet";
import DatePicker from "react-datepicker";
import moment from "moment";

import "react-datepicker/dist/react-datepicker.css";

const auth = new Auth();

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //   Date: moment(),
      startDate: moment(),
      data: [],
      id: 0,
      latitude: 0,
      longitude: 0,
      zoom: 13,
      name: "",
      address: "",
      // isFinished: false,
      authed: {
        isLoggedIn: false
      }
    };
    this.handleChange = this.handleChange.bind(this);
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
    const PROFILE_URL = "https://localhost:5001/api/events";

    fetch(PROFILE_URL, {
      headers: {
        Authorization: "Bearer " + auth.getAccessToken()
      }
    })
      .then(resp => resp.json())
      .then(eventsData => {
        this.setState({
          data: eventsData
        });
        console.log(this.state.data);
      });
  };

  handleSubmit = e => {
    e.preventDefault();
    fetch("https://localhost:5001/api/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + auth.getAccessToken()
      },
      body: JSON.stringify({
        EventName: this.state.name,
        EventAddress: this.state.address
        // IsFinished: this.state.isFinished
      })
    })
      .then(resp => resp.json())
      .then(_ => {
        this.setState({
          name: "",
          address: ""
        });
        this.getLatest();
      });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  //   getGeolocation = e => {
  //     navigator.geolocation.getCurrentPosition = (position) => {
  //       console.log(position);

  //       let latitude = position.coords.latitude;
  //       let longitude = position.coords.longitude;
  //   }
  // }

  // TODO fix Get user's geolocation, then render onto map
  // getGeolocation = e => {
  //   if (!this.props.isGeolocationEnabled) {
  //     // this.props.geolocation.getCurrentPosition(position => {
  //     //   console.log(position.coords.latitude, position.coords.longitude);
  //       this.setState({
  //         latitude: position.coords.latitude,
  //         longitude: position.coords.longitude
  //       });
  //     });
  //   } else if (!geolocated.isGeolocationAvailable) {
  //     console.log("Geolocation is not available");
  //   } else {
  //     console.log("Geolocation not enabled");
  //   }
  // };

  // Handles login & logout
  login = () => {
    auth.login();
  };

  logout = () => {
    auth.logout();
  };

  // Handles date change for the calendar
  handleDateChange(date) {
    this.setState({
      startDate: moment().format("YYYY-MM-DD")
    });
  }

getLocation = (e) => {
  navigator.geolocation.getCurrentPosition(function(position) {
    console.log(position.coords.latitude, position.coords.longitude);
  })
}

  render() {
    let button = <section>Loading...</section>;
    const positionOnMap = [this.state.latitude, this.state.longitude]; //[this.props.coords.latitude, this.props.coords.longitude];
    // if (!positionOnMap) {
    //   this.getGeolocation();
    // }
    if (this.state.authed.isLoggedIn) {
      button = (
        <section className="dashboard">
          <span className="account-info">
            <section className="account-box">
              <img
                className="profile-picture"
                src={this.state.authed.profile.picture}
                alt={this.state.authed.profile.nickname}
              />
              <section className="account-name">
                <section className="greeting">
                  Welcome {this.state.authed.profile.name}!
                  <button onClick={this.logout} className="logout-button">
                    not you?
                  </button>
                </section>
                {/* <section className="user-buttons-container">
                  <Link to="/members">
                    <button className="user-buttons">Members List</button>
                  </Link>
                  <Link to={`/profile/${this.state.id}`}>
                    <button className="user-buttons">Edit Profile</button>
                  </Link>
                </section> */}
              </section>
            </section>
          </span>
        </section>
      );
    }
    return (
      <div className="dashboard-body">
        {button}
        <section>
          <form onSubmit={this.handleSubmit}>
            <section className="row">
              <header className="field-header">Name of Event:</header>
              <input type="text" name="name" placeholder="name of event" />
            </section>
            <section className="row">
              <header className="field-header">Location:</header>
              <input
                type="text"
                name="address"
                placeholder="location of event"
              />
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
        <section className="map-container">
          <Map
            center={positionOnMap}
            zoom={this.state.zoom}
            className="map-styling"
            onClick={this.getLocation}
          >
            <TileLayer
              attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={positionOnMap}>
              <Popup>
                Coordinates: [{this.state.latitude},{this.state.longitude}]
              </Popup>
            </Marker>
          </Map>
          <section className="side-bar">
            <DatePicker
              className="date-picker"
              inline
              selected={this.state.startDate}
              onChange={this.handleDateChange}
            />
            <Link to={`/new_event/${this.state.authed.isLoggedIn}`}>
              <button className="add-event-button">Add Event</button>
            </Link>
            <section>
              <header className="event-list">Events of the Day</header>
              <section>
                {this.state.data.map((event, i) => {
                  return (
                    <section className="single-event" key={i}>
                      <button>{event.EventName}</button>
                    </section>
                  );
                })}
              </section>
            </section>
          </section>
        </section>
        <section />
      </div>
    );
  }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false
  },
  userDecisionTimeout: 5000
})(Dashboard);
