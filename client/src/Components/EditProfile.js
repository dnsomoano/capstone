import React, { Component } from "react";
import "../styling/EditProfile.css";
import { Link } from "react-router-dom";

class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // id: this.props.match.params.id,
      data: [],
      email: "",
      userName: "",
      Address: ""
    };
  }

  componentDidMount() {
    const PROFILE_URL = "https://localhost:5001/api/profiles";
    fetch(PROFILE_URL)
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
              Home
            </Link>
            <span> >> Edit Profile </span>
          </span>
        </section>
        <section>
          {/* TODO display individual profile in input field for user to edit */}
          <section className="profile-container">
            <section className="profile-item">
              Email Address:
              <input type="text" placeholder={this.state.data.emailAddress} />
            </section>
            <section className="profile-item">
              Username:
              <input type="text" placeholder={this.state.data.userName} />
            </section>
            <section className="profile-item">
              Address:
              <input type="text" placeholder={this.state.data.address} />
            </section>
          </section>
          {/* TODO add event handlers for these buttons, fetching a PATCH request and DELETE request */}
          <section className="buttons-container">
            <button className="save-button">Save Changes</button>
            <button className="delete-button">Delete Profile</button>
          </section>
        </section>
      </div>
    );
  }
}

export default EditProfile;
