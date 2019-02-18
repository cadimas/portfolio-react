import React, { Component } from "react";
import Hr from "./hr.jsx";
import capture from "./images/capture.jpg";

class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <img src={capture} className="round-img" alt="profile" />
        <Hr theme="white" title="Andre Gomes" />
        <h3>Front-end Developer - User Experience Designer</h3>
      </div>
    );
  }
}

export default Landing;
