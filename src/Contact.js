import React, { Component } from "react";
 
class Contact extends Component {
  render() {
    return (
      <div className="container contact-p">
        <h3>Get In Touch</h3>

        <a href="Mailto:maywang529@gmail.com?&Subject=Greetings" data-tooltip="Email me - I would love to hear from you!">
        <i className="fa fa-envelope" aria-hidden="true"></i>
        </a>

        <a href="https://soundcloud.com/xinmei-wang" data-tooltip="Check me out if you are also a music lover." target="_blank" rel="noopener noreferrer">
        <i className="fa fa-soundcloud" aria-hidden="true"></i>
        </a>

      </div>
    );
  }
}
 
export default Contact;