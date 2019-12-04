import React, { Component } from "react";
import headerImage from "./images/headerImage4.png";
import "../App.css";
import Jumbotron from "react-bootstrap/Jumbotron";
import Image from "react-bootstrap/Image";
import Logo from "./images/logo.png";


class Header extends Component {
  state = {};
  render() {
    return (
      <Jumbotron fluid className="jumbo-header">
      <a target="_blank" href="https://www.cosmopolitan.com/"><Image id="logo" src={Logo} /></a>
        <Image className="header-image" src={headerImage} fluid />
        <h1 className="heading">
          <span>Simple Climate School</span>
        </h1>
      </Jumbotron>

      // <Jumbotron>
      //   <Image src={headerImage} fluid/>
      // </Jumbotron>
    );
  }
}

export default Header;
