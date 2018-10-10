import React, { Component } from "react";

class Member extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      userName: "",
      dateRegistered: "",
      address: ""
    };
  }

  render() {
    return (
      <div>
        <table className="table-body">
          <thead>
            <tr>
              <td>Email Address:</td>
              <td>Username:</td>
              <td>Date Registered:</td>
              <td>Address:</td>
            </tr>
          </thead>
          <tbody className="table-body">
            <tr key={i} className="table-row">
              <td className="table-column">{profile.emailAddress}</td>
              <td className="table-column">{profile.userName}</td>
              <td className="table-column">{profile.dateCreated}</td>
              <td className="table-column">{profile.address}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Member;
