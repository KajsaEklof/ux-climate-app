import React, { Component } from "react";
import headerImage from "./images/headerbackground_small.png";
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
          alt="Cosmopolitan's Logo"
        >
          <Image id="logo" src={Logo} />
        </a>
        <Image className="header-image" src={headerImage} fluid alt="Greta Thunberg infront of an illustration of the earth and two chimneys emitting pollution"/>
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
