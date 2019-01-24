import React, { Component } from "react";

class Navbar extends Component {
  state = {
    sideNavShow: "hidden"
  };

  handleSideNavClick = () => {
    this.state.sideNavShow === "hidden"
      ? this.setState({ sideNavShow: "show" })
      : this.setState({ sideNavShow: "hidden" });
  };

  render() {
    let showSideNav = this.state.sideNavShow + " sidenav";
    return (
      <div className="navbar">
        <span id="title">Andre Gomes</span>
        <ul>
          <li>PORTFOLIO</li>
          <li>ABOUT</li>
          <li>CONTACT</li>
        </ul>

        <span onClick={() => this.handleSideNavClick()} id="sideNavButton">
          &#9776;
        </span>
        <div id="mySidenav" className={showSideNav}>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    );
  }
}

export default Navbar;
