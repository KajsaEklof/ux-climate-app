import React, { Component } from "react";
import headerImage from "./images/headerImage.png";
import Image from "react-bootstrap/Image";
import "../App.css";

class Header extends Component {
  state = {};
  render() {
    return (
      <div>
        <Image src={headerImage} fluid />
      </div>
    );
  }
}

export default Header;
