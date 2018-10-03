import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { render } from "react-dom";
// import logo from "./images/logo.png";
import "./App.css";
// import EventForm from "./Components/EventForm";
// import DisplayMap from "./Components/DisplayMap";
import Dashboard from "./Components/Dashboard";
import Footer from "./Components/Footer";
// import AustinMap from "./Components/AustinMap";
// import NodeGeocoder?

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            {/* <section className="image-container">
          <img src={logo} className="App-logo" alt="logo" />
        </section> */}
            <h1 className="App-title">Daily Mapper</h1>
          </header>
          <section className="body">
            <section className="main-menu">
            </section>
            <Switch>
              <Route path="/" exact component={Dashboard} />
            </Switch>
          </section>
          <section className="footer-container">
            <Footer />
          </section>
        </div>
      </Router>
    );
  }
}

export default App;
