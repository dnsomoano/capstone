import React, { Component } from "react";
import "../styling/ChicagoMap.css";
// import ChicagoRedLight from "../data/Chicago-RedLightCameras.json";
// import Chicago from "../data/chicago.json";
import {
  // FeatureGroup,
  Map,
  Marker,
  Popup,
  // LayersControl,
  TileLayer
} from "react-leaflet";
// import HeatmapLayer from "react-leaflet-heatmap-layer";

class ChicagoMap extends Component {
  constructor(props) {
    super(props);
    // let NodeGeocoder = require("node-geocoder");
    // let options = {
    //   provider: "openstreetmap",
    //   httpAdapter: "https",
    //   formatter: null
    // };
    // State declaration
    this.state = {
      metadata: 0,
      dataArray: [],
      data: [],
      latitude: 0,
      longitude: 0
      //   geocoder: NodeGeocoder(options)
    };
  }

  // TODO change to a fetch
  componentDidMount() {
    fetch("https://data.cityofchicago.org/api/views/pfsx-4n4m/rows.json")
      .then(resp => resp.json())
      .then(Chicago => {
        this.setState(
          {
            // metadata: ChicagoRedLight.meta,
            // data: ChicagoRedLight.data,
            metadata: Chicago.meta,
            data: Chicago.data,
            // dataArray: data[0]
            // latitude: ChicagoRedLight.data[0][13],
            // longitude: ChicagoRedLight.data[0][14],
            latitude: Chicago.data[0][14],
            longitude: Chicago.data[0][15],
            intersection: Chicago.data[0][13],
            zoom: 13
          },
          () => {
            console.log("Metadata for json is:", this.state.metadata);
            console.log("The json data is:", this.state.data);
            // TODO make first array values a map variable
            // 2nd array index will stay constant for represented values
            // console.log(
            //   "My latitude value for array 1 is:",
            //   this.state.data[0][13]
            // );
            // console.log(
            //   "My longitude value for array 1 is:",
            //   this.state.data[0][14]
            // );
            // console.log(
            //   "This address of the car is located on the corner of:",
            //   this.state.data[0][8]
            // );
            console.log(
              "This address of the car is located on the corner of:",
              this.state.data[0][13]
            );
            console.log("The direction of motion is:", this.state.data[0][13]);
          }
        );
      });
  }
  render() {
    // const position = [this.state.latitude, this.state.longitude];
    const otherpos = [
      parseFloat(this.state.latitude) + 0.5,
      this.state.longitude
    ];
    // console.log({ position, otherpos });
    return (
      <div>
        <section className="map-container">
          <Map center={otherpos} zoom={this.state.zoom} className="map-styling">
            {/* TODO get heatmapLayer working */}
            {/* <HeatmapLayer
              fitBoundsOnLoad
              fitBoundsOnUpdate
              points={this.state.intersection}
              longitudeExtractor={m => m[1]}
              latitudeExtractor={m => m[0]}
              intensityExtractor={m => parseFloat(m[2])}
            /> */}
            <TileLayer
              attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {this.state.data.map((pos, i) => {
              return (
                <Marker key={i} position={[pos[14], pos[15]]}>
                  <Popup>Intersection: {pos[13]}</Popup>
                </Marker>
              );
            })}
            {/*
            <Marker position={otherpos}>
              <Popup>
                Coordinates: {this.state.latitude},{this.state.longitude}
                Intersection: {this.state.intersection}
              </Popup>
            </Marker> */}
          </Map>
        </section>
      </div>
    );
  }
}
//   render() {
//     const position = [this.state.latitude, this.state.longitude];
//     return (
//       <div>
//         <Map center={position} zoom={13} style={{ height: "100%" }}>
//           <LayersControl>
//             <LayersControl.BaseLayer name="Base" checked>
//               <TileLayer
//                 url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
//                 attribution="&copy; <a href=http://osm.org/copyright>OpenStreetMap</a> contributors"
//               />
//             </LayersControl.BaseLayer>
//             <LayersControl.Overlay name="Heatmap" checked>
//               <FeatureGroup color="purple">
//                 {/* Declared state */}
//                 <Marker position={position}>
//                   <Popup>
//                     <span>
//                       A pretty CSS3 popup.
//                       <br /> Easily customizable.{" "}
//                     </span>
//                   </Popup>
//                 </Marker>
//                 <HeatmapLayer
//                   fitBoundsOnLoad
//                   fitBoundsOnUpdate
//                   /* Declared state */
//                   points={this.state.intersection}
//                   longitudeExtractor={m => m[1]}
//                   latitudeExtractor={m => m[0]}
//                   intensityExtractor={m => parseFloat(m[2])}
//                 />
//               </FeatureGroup>
//             </LayersControl.Overlay>
//             <LayersControl.Overlay name="Marker">
//               <FeatureGroup color="purple">
//                 {/* Declared state */}
//                 <Marker position={position}>
//                   <Popup>
//                     <span>
//                       A pretty CSS3 popup.
//                       <br /> Easily customizable.{" "}
//                     </span>
//                   </Popup>
//                 </Marker>
//               </FeatureGroup>
//             </LayersControl.Overlay>
//           </LayersControl>
//         </Map>
//       </div>
//     );
//   }
// }

export default ChicagoMap;
