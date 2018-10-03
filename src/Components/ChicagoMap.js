import React, { Component } from "react";
import "../styling/ChicagoMap.css";
import {
  // FeatureGroup,
  Map,
  Marker,
  Popup,
  // LayersControl,
  TileLayer
} from "react-leaflet";
// import HeatmapLayer from "react-leaflet-heatmap-layer";

class DisplayMap extends Component {
  constructor(props) {
    super(props);
    // State declaration
    this.state = {
      //   geocoder: NodeGeocoder(options)
      latitude: 0,
      longitude: 0
    };
  }

  componentDidMount() {
    this.setState({
      latitude: 27.772070,
      longitude: -82.638489
    })
  }
  // console.log({ position, otherpos });
  render() {
    const position = [parseFloat(this.state.latitude, this.state.longitude)];
    // const otherpos = [
    //   parseFloat(this.state.latitude) ,
    //   this.state.longitude
    // ];
    // console.log({ position, otherpos });
    return (
      <div>
        <section className="map-container">
          <Map center={position} zoom={this.state.zoom} className="map-styling">
            {/* TODO get heatmapLayer working */}
            {/* <HeatmapLayer
              fitBoundsOnLoad
              fitBoundsOnUpdate
              points={this.state.data}
              longitudeExtractor={m => m[1]}
              latitudeExtractor={m => m[0]}
              intensityExtractor={m => parseFloat(m[2])}
            /> */}
            <TileLayer
              attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {/* {this.state.data.map((pos, i) => {
              return (
                <Marker key={i} position={[pos[14], pos[15]]}>
                  <Popup>Intersection: {pos[13]}</Popup>
                </Marker>
              );
            })} */}
              <Marker position={position}>
                <Popup>
                  Coordinates: {this.state.latitude},{this.state.longitude}
                </Popup>
              </Marker>
          </Map>
        </section>
      </div>
    );
  }
}

export default DisplayMap;
