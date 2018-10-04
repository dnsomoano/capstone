import React, { Component } from "react";
import "../styling/Dashboard.css";
import { Link } from "react-router-dom";
// import { navigator, geolocation, geolocated } from "react-geolocated";
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

class DisplayMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //   Date: moment(),
      startDate: moment(),
      latitude: 27.77207,
      longitude: -82.638489,
      zoom: 13,
      events: []
    };
    this.handleChange = this.handleChange.bind(this);
  }

  // componentDidMount() {
  //   this.getGeolocation();
  // }

  // TODO fix Get user's geolocation, then render onto map
  // getGeolocation = () => {
  //   if (!geolocated.isGeolocationEnabled) {
  //     navigator.geolocation.getCurrentPosition(position => {
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

  // Handles date change for the calendar
  handleChange(date) {
    this.setState({
      startDate: moment().format("YYYY-MM-DD")
    });
  }

  render() {
    const positionOnMap = [this.state.latitude, this.state.longitude];
    return (
      <div>
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

export default DisplayMap;

// export const DisplayMapForm = geolocated({
//   positionOptions: {
//     enableHighAccuracy: false
//   },
//   userDecisionTimeout: 5000
// })(DisplayMap);
