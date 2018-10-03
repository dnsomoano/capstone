import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
// import { render } from "react-dom";
// import logo from "./images/logo.png";
import "./App.css";
import ChicagoMap from "./Components/ChicagoMap";
import Footer from "./Components/Footer";
import AustinMap from "./Components/AustinMap";
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
            <h1 className="App-title">Traffic by Location</h1>
          </header>
          <section className="body">
            <section className="main-menu">
              <ul>
                <li>
                  <Link to="/austin">
                    <button className="menu-button">Austin, TX</button>
                  </Link>
                </li>
                <li>
                  <button className="menu-button">Chicago, IL</button>
                </li>
                <li>
                  <button className="menu-button">Austin, TX</button>
                </li>
              </ul>
            </section>
            <ChicagoMap />
          </section>
          <section className="footer-container">
            <Footer />
          </section>
          <Switch>
            <Route path="/" exact component={ChicagoMap} />
            <Route path="/austin" exact component={AustinMap} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
