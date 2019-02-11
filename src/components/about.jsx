import React, { Component } from "react";
import Hr from "./hr.jsx";

class About extends Component {
  render() {
    return (
      <div id="about" className="about">
        <Hr theme="white" title="About" />
        <p>
          My name is Andre, I'm a mostly self-taught front-end developer. I'm
          highly motivated towards learning new technologies, and working as a
          team with like minded individuals.
        </p>
        <p>
          I'm keen on taking new challenges, and onto improving my current
          coding skills.
        </p>
        <p>
          If you are interested in seeing any of the code in my projects, feel
          free checkout my GitHub repository on the projects above.
        </p>
      </div>
    );
  }
}

export default About;
