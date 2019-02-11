import React, { Component } from "react";
import Hr from "./hr.jsx";
import loading from "./images/ajax-loader.gif";

class Contact extends Component {
  state = {
    sendingPost: false,
    messageReceived: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    const postData = new FormData(e.target);
    const data = {
      name: postData.get("name"),
      email: postData.get("email"),
      phone: postData.get("phone"),
      message: postData.get("message")
    };

    this.setState({ sendingPost: true });

    const dataJson = JSON.stringify(data);

    // this.postData(`/submit`, dataJson).then(data => console.log(data));
    fetch("./submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: dataJson
    })
      //On Sucessfull AJAX
      .then(response => {
        response.text().then(txt => {
          this.setState({ sendingPost: false, messageReceived: txt });
        });
      })
      //On Error
      .catch(err => {
        this.setState({
          sendingPost: false,
          messageReceived: "Some error has occured, please try again later."
        });
      });
  };

  render() {
    let loadingCss = this.state.sendingPost ? "show" : "hidden";
    let messageReceived = this.state.messageReceived;
    return (
      <div className="contact" id="contact">
        <Hr theme="blue" title="Contact" />
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Name" name="name" required />
          <input type="email" placeholder="Email" name="email" required />
          <input type="tel" placeholder="Phone Number" name="phone" required />
          <input type="text" placeholder="Message" name="message" required />
          <input id="submit-button" type="submit" placeholder="Submit" />
          <img
            id="loading-gif"
            className={loadingCss}
            src={loading}
            alt="loading"
          />
          <label id="return">{messageReceived}</label>
        </form>
      </div>
    );
  }
}

export default Contact;
