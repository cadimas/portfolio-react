import React, { Component } from "react";
import Navbar from "./components/navbar";
import "./App.css";
import Landing from "./components/landing";
import Portfolio from "./components/portfolio";
import About from "./components/about";
import Contact from "./components/contact";
import Around from "./components/around";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Landing />
        <Portfolio />
        <About />
        <Contact />
        <Around />
      </div>
    );
  }
}

export default App;
