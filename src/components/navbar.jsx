import React, { Component } from "react";

class Navbar extends Component {
  state = {
    sideNavShow: "hidden"
  };

  componentDidMount() {
    window.addEventListener("scroll", this.resizeHeaderOnScroll);
  }
  resizeHeaderOnScroll() {
    const distanceY = window.pageYOffset,
      nav = document.getElementsByClassName("navbar")[0],
      body = document.querySelector("body");

    if (distanceY > 2) {
      nav.classList.add("smaller");
      body.style.setProperty("--line-height-var", "80px");
    } else {
      nav.classList.remove("smaller");
      body.style.setProperty("--line-height-var", "100px");
    }
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleSideNavClick = () => {
    this.state.sideNavShow === "hidden"
      ? this.setState({ sideNavShow: "show" })
      : this.setState({ sideNavShow: "hidden" });
  };

  smoothScroll = target => {
    this.setState({ sideNavShow: "hidden" });

    let el = document.getElementById(target);
    window.scrollTo(0, el.offsetTop - 80);
  };

  render() {
    let showSideNav = this.state.sideNavShow + " sidenav";
    return (
      <div className="navbar">
        <span
          onClick={() => {
            this.smoothScroll("title");
          }}
          id="title"
        >
          Andre Gomes
        </span>
        <ul>
          <li
            onClick={() => {
              this.smoothScroll("portfolio");
            }}
          >
            PORTFOLIO
          </li>
          <li
            onClick={() => {
              this.smoothScroll("about");
            }}
          >
            ABOUT
          </li>
          <li
            onClick={() => {
              this.smoothScroll("contact");
            }}
          >
            CONTACT
          </li>
        </ul>

        <span onClick={() => this.handleSideNavClick()} id="sideNavButton">
          &#9776;
        </span>
        <div id="mySidenav" className={showSideNav}>
          <label
            onClick={() => {
              this.smoothScroll("portfolio");
            }}
            href="#"
          >
            Portfolio
          </label>
          <label
            onClick={() => {
              this.smoothScroll("about");
            }}
            href="#"
          >
            About
          </label>
          <label
            onClick={() => {
              this.smoothScroll("contact");
            }}
            href="#"
          >
            Contact
          </label>
        </div>
      </div>
    );
  }
}

export default Navbar;
