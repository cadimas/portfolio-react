import React, { Component } from "react";
import Hr from "./hr.jsx";
import simon from "./images/simon.png";
import tic from "./images/tic-tac.png";
import wiki from "./images/Wikipedia-logo.png";
import stir from "./images/stir3.png";

class Modal extends Component {
  render() {
    let txt;
    let title = this.props.title;
    let display = this.props.display + " modal-container";
    let img;
    let siteLink;
    let gitLink;

    switch (this.props.title) {
      case "Simon":
        txt =
          "Simple memory game , built with React Js as client-side, and node express as server side.";
        siteLink = "https://andregomesportfolio.com:1338";
        gitLink = "https://github.com/cadimas/Simon-react";
        img = simon;
        break;
      case "Tic-Tac-Toe React":
        txt =
          "Simple Tic-tac-toe game built with React Js, on the first player mode it uses a minmax algorithm to determine the best move ";
        siteLink = "https://andregomesportfolio.com:1337";
        gitLink = "https://github.com/cadimas/tic-tac-toe-React";
        img = tic;
        break;
      case "Stir":
        txt =
          "Freelancing project, where I used Node and express for backend, and used EJS to render templates on the client side.";
        siteLink = "https://andregomesportfolio.com:1440";
        gitLink = "https://github.com/cadimas/StirWebsite";
        img = stir;
        break;
      default:
        txt =
          "Jquery based web project, where it uses AJAX queries to the WIKI API to display search results. Back-end with Node and Express.";
        siteLink = "https://andregomesportfolio.com:1339";
        gitLink = "https://github.com/cadimas/wikiViewer";
        img = wiki;
        break;
    }

    return (
      <div className={display}>
        <div className="modal-content">
          <span
            onClick={() => this.props.handleClose()}
            className="close-button"
          >
            &times;
          </span>
          <img className="modal-img" src={img} alt="simon" />
          <Hr title={title} theme="blue" />
          <h4>{txt}</h4>
          <h4>
            Github repository can be found <a href={gitLink}>here</a>
          </h4>
          <h4>
            Site link can be found <a href={siteLink}>here</a>
          </h4>
        </div>
      </div>
    );
  }
}

export default Modal;
