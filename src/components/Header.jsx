import React, { Component } from "react";
//import headerImage from "./images/headerwindcloud-01.png";
//import headerImage from "./images/headerwindcloudColor-01.png";
import headerImage from "./images/headeremissions-01.png";
import "../App.css";
import Jumbotron from "react-bootstrap/Jumbotron";
import Image from "react-bootstrap/Image";
import Logo from "./images/logo.png";

class Header extends Component {
  state = {};
  render() {
    return (
      <Jumbotron fluid className="jumbo-header" id="home">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.cosmopolitan.com/"
        >
          <Image id="logo" src={Logo} />
        </a>
        <Image className="header-image" src={headerImage} fluid />
        <h1 className="heading">
          <span>This is climate change</span>
        </h1>
      </Jumbotron>

      // <Jumbotron>
      //   <Image src={headerImage} fluid/>
      // </Jumbotron>
    );
  }
}

export default Header;
