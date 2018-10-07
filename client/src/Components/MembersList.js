import React, { Component } from "react";
import "../styling/MembersList.css";
import { Link } from "react-router-dom";

class MembersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      email: "",
      userName: ""
    };
  }

  componentDidMount() {
    const PROFILE_URL = "https://localhost:5001/api/profiles";
    fetch(PROFILE_URL, {})
      .then(resp => resp.json())
      .then(profileData => {
        this.setState({
          data: profileData
        });
        console.log(this.state.data);
      });
  }

  render() {
    return (
      <div>
        <section className="breadcrumbs-container">
          <span className="breadcrumb">
            <Link to="/home" className="link">
              {/* <img id="home_icon" src={Home} alt="Home Icon" /> */}
              <button>Home</button>
            </Link>
            <span> >> MembersList </span>
          </span>
        </section>
        <section className="search-container">
          {/* TODO add event handlers to form for GET request by username *BONUS* fix to search with email aswell */}
          <form className="search-form">
            <input
              type="search"
              placeholder="Find by username"
              className="searchbar"
            />
            <button className="search-button">Search</button>
          </form>
        </section>
        <section>
          {/* TODO return member component containing specific fields */}
          {/* TODO profile clickable for userdetails? */}
          {this.state.data.map((profile, i) => {
            return (
              <section>
                {profile.emailAddress}
                <section>{profile.userName}</section>
                <section>{profile.dateCreated}</section>
                <section>{profile.address}</section>
              </section>
            );
          })}
        </section>
      </div>
    );
  }
}

export default MembersList;
