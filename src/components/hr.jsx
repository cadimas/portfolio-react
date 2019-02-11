import React, { Component } from "react";
import StarWhite from "./svg/star-solid-white.svg";
import StarBlue from "./svg/star-solid-blue.svg";

class Hr extends Component {
  render() {
    let star = this.props.theme === "blue" ? StarBlue : StarWhite;
    let title = this.props.title;
    return (
      <div>
        <h1>{title}</h1>
        <div className="divisor">
          <hr />
          <img src={star} className="fa-star" alt="star-icon" />
          <hr />
        </div>
      </div>
    );
  }
}

export default Hr;
