import React, { Component } from "react";
import "../styling/Dashboard.css";
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

  //   componentDidMount() {
  //     this.setState({
  //       latitude: 27.77207,
  //       longitude: -82.638489
  //     });
  //   }

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
              inline
              selected={this.state.startDate}
              onChange={this.handleChange}
            />
            <button className="add-event-button">Add Event</button>
            <section>
              <header className="event-list">Events of the Day</header>
              <section>{this.state.events.map((event, i) => {
                  return <button key={i}>{event}</button>
              })}</section>
            </section>
          </section>
        </section>
        <section />
      </div>
    );
  }
}

export default DisplayMap;
