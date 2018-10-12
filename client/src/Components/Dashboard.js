import React, { Component } from "react";
import "../styling/Dashboard.css";
import Auth from "../Auth/Auth.js";
// import { fetchingPosition, getCurrentPosition } from "react-geolocation";
import { Link } from "react-router-dom";
// import { Geocoder, Providers } from "node-geocoder";
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
      startDate: moment(),
      data: [],
      id: 0,
      NewLat: 0,
      NewLong: 0,
      zoom: 13,
      latitude: 27.964157, // default to Tampa, FL
      longitude: -82.452606, // with these coordinates
      name: "",
      address: "",
      markers: [],
      authed: {
        isLoggedIn: false
      }
    };
    this.handleChange = this.handleChange.bind(this);
    // this.getLocation(null);
  }

  componentDidMount() {
    console.log({ props: this.props });
    if (auth.isAuthenticated()) {
      this.getLatest();
      auth.getProfile((err, profile) => {
        this.setState({
          authed: {
            isLoggedIn: true,
            profile
          }
        });
      });
    }
  }

  getLatest = () => {
    const PROFILE_URL = `${process.env.REACT_APP_API}/api/events`;

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
    console.log(`${process.env.REACT_APP_API.trim()}/api/events`);
    fetch(`${process.env.REACT_APP_API.trim()}/api/events`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + auth.getAccessToken()
      },
      body: JSON.stringify({
        EventName: this.state.name,
        EventAddress: this.state.address,
        Latitude: this.state.latitude,
        Longitude: this.state.longitude
      })
    })
      .then(resp => {
        console.log("got back");
        return resp.json();
      })
      .then(_ => {
        console.log({ _ });
        if (this.state.address) {
          this.getGeo(this.state.address);
        } else {
          this.getLocation(null); // initiate GPS position call
        }
        this.getLatest();
      });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

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

  getGeo = location => {
    fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address= + ${location} + &key=AIzaSyA5-V3BEWeNq_lasnMAL8Bip0_bbvSr03U`
    )
      .then(resp => resp.json())
      .then(data => {
        const { lat, lng } = data.results[0].geometry.location;
        const points = [lat, lng];
        this.setState({ markers: [...this.state.markers, points] });
      });
  };

  getLocation = () => {
    navigator.geolocation.getCurrentPosition(position => {
      this.setState({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      });
    });
  };

  render() {
    let button = <section>Loading...</section>;
    const positionOnMap = [this.state.latitude, this.state.longitude];

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
            {this.state.markers.map((mark, i) => (
              <Marker key={i} position={mark}>
                <Popup>Coordinates: mark</Popup>
              </Marker>
            ))}
          </Map>
          <section className="side-bar">
            <DatePicker
              className="date-picker"
              inline
              selected={this.state.startDate}
              onChange={this.handleDateChange}
            />
            <section className="foo">
              <form className="form-container" onSubmit={this.handleSubmit}>
                <section className="row">
                  <header className="field-header">Name of Event:</header>
                  <input
                    type="text"
                    name="name"
                    placeholder="name of event"
                    value={this.state.name}
                    onChange={this.handleChange}
                  />
                </section>
                <section className="row">
                  <header className="field-header">Location:</header>
                  <input
                    type="text"
                    name="address"
                    placeholder="location of event"
                    value={this.state.address}
                    onChange={this.handleChange}
                  />
                  <section className="button-container">
                    <button className="submit-button">Submit</button>
                  </section>
                </section>
              </form>
            </section>
          </section>
        </section>
        <section />
      </div>
    );
  }
}

export default Dashboard;
