import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { render } from "react-dom";
import StartButton from "./Components/StartButton";
// import logo from "./images/logo.png";
import "./App.css";
import Dashboard from "./Components/Dashboard";
import EventForm from "./Components/EventForm";
import Footer from "./Components/Footer";
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
            <section className="main-menu" />
            <Switch>
              <Route path="/" exact component={StartButton} />
              <Route path="/home" exact component={Dashboard} />
              <Route path="/new_event" exact component={EventForm} />
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
