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
      latitude: 0,
      longitude: 0,
      zoom: 13,
      events: [],
      authed: {
        isLoggedIn: false
      }
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    console.log({ props: this.props });

    if (auth.isAuthenticated()) {
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

  // component() {
  //   this.getGeolocation();
  // }

  getGeolocation = () => {
    this.setState({
      latitude: this.props.coords.latitude,
      longitude: this.props.coords.longitude
    });
  };

  // TODO fix Get user's geolocation, then render onto map
  // getGeolocation = () => {
  //   if (!this.props.isGeolocationEnabled) {
  //     this.props.geolocation.getCurrentPosition(position => {
  //       console.log(position.coords.latitude, position.coords.longitude);
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
  handleChange(date) {
    this.setState({
      startDate: moment().format("YYYY-MM-DD")
    });
  }

  render() {
    let button = <section>Loading...</section>;
    const positionOnMap = [this.state.latitude, this.state.longitude]; //[this.props.coords.latitude, this.props.coords.longitude];
    if (!positionOnMap) {
      this.getGeolocation();
    }
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
                <section className="user-buttons-container">
                  <Link to="/members">
                    <button className="user-buttons">Members List</button>
                  </Link>
                  <Link to="/profile/:id">
                    <button className="user-buttons">Edit Profile</button>
                  </Link>
                </section>
              </section>
            </section>
          </span>
        </section>
      );
    }
    return (
      <div className="dashboard-body">
        {button}
        <section className="map-container">
          <Map
            center={positionOnMap}
            zoom={this.state.zoom}
            className="map-styling"
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
              onChange={this.handleChange}
            />
            <Link to="/new_event">
              <button className="add-event-button">Add Event</button>
            </Link>
            <section>
              <header className="event-list">Events of the Day</header>
              <section>
                {this.state.events.map((event, i) => {
                  return <button key={i}>{event}</button>;
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
