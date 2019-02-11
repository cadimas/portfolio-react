import React, { Component } from "react";
import Star from "./svg/star-solid-blue.svg";
import Modal from "./modal.jsx";

class Portfolio extends Component {
  state = {
    display: "hidden",
    title: "Simon"
  };

  handleProjClick = title => {
    this.setState({ display: "show", title: title });
  };

  handleClose = () => {
    this.setState({ display: "hide" });
  };

  render() {
    let display = this.state.display;

    let title = this.state.title;

    return (
      <div className="portfolio" id="portfolio">
        <h1>Portfolio</h1>
        <div className="divisor">
          <hr />
          <img src={Star} className="fa-star" alt="star-icon" />
          <hr />
        </div>
        <div className="grid">
          <div
            onClick={() => this.handleProjClick("Stir")}
            className="grid-item"
          >
            <div className="grid-item-hidden" />
          </div>
          <div
            onClick={() => this.handleProjClick("Wikipedia Viewer")}
            className="grid-item"
          >
            <div className="grid-item-hidden" />
          </div>
          <div
            onClick={() => this.handleProjClick("Simon")}
            className="grid-item"
          >
            <div className="grid-item-hidden" />
          </div>
          <div
            onClick={() => this.handleProjClick("Tic-Tac-Toe React")}
            className="grid-item"
          >
            <div className="grid-item-hidden" />
          </div>
        </div>
        <Modal display={display} title={title} handleClose={this.handleClose} />
      </div>
    );
  }
}

export default Portfolio;
