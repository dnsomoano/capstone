import React, { Component } from "react";
// import logo from "./images/logo.png";
import "./App.css";
import { Router, Route, Switch } from "react-router-dom";
// import { render } from "react-dom";
import StartButton from "./Components/StartButton";
import Callback from "./Components/Callback";
import Dashboard from "./Components/Dashboard";
import EventForm from "./Components/EventForm";
import Footer from "./Components/Footer";
// import NodeGeocoder?
import Auth from "./Auth/Auth.js";
import history from "./history";

const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
};

class App extends Component {
  render() {
    return (
      <Router history={history}>
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
              <Route
                path="/callback"
                render={props => {
                  handleAuthentication(props);
                  return <Callback {...props} />;
                }}
              />
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
