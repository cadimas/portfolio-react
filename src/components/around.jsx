import React, { Component } from "react";
import ReactSVG from "react-svg";
import email from "./svg/email.svg";
import linkedin from "./svg/linkedin.svg";
import github from "./svg/github.svg";

class Around extends Component {
  state = {};
  render() {
    return (
      <div className="around">
        <h1>Around The web</h1>
        <div id="social-buttons">
          <a href="https://github.com/cadimas">
            <button className="round-btn ">
              <ReactSVG src={email} svgStyle={{ width: 30 }} />
            </button>
          </a>
          <a href="https://www.linkedin.com/">
            <button className="round-btn ">
              <ReactSVG src={linkedin} svgStyle={{ width: 30 }} />
            </button>
          </a>
          <a href="https://github.com/cadimas">
            <button className="round-btn ">
              <ReactSVG src={github} svgStyle={{ width: 30 }} />
            </button>
          </a>
        </div>
        <div className="footer">
          <span>&#169; Andre Gomes</span>
        </div>
      </div>
    );
  }
}

export default Around;
