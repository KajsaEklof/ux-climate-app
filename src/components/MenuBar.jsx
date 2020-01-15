import React, { Component } from "react";

import AnchorLink from "react-anchor-link-smooth-scroll";
import { Menu, Sticky } from "semantic-ui-react";
import Scrollspy from "react-scrollspy";

import Logo from "./images/logopink.png";

export default class MenuBar extends Component {
  state = { activeItem: "" };

  render() {
    const { activeItem } = this.state;

    return (
      <Sticky context={this.props.context}>
        <div className="menubar">
          <Menu pointing secondary>
            <Menu.Item href="#logo" className="menu-logo">
              <AnchorLink href="#logo">
                <img
                  src={Logo}
                  height="100%"
                  width="100%"
                  alt="Cosmopolitan's logo"
                />
              </AnchorLink>
            </Menu.Item>
            <Menu.Menu position="right">
              <Scrollspy
                className="navlist"
                items={["home", "co2", "temp", "ice", "sea", "tips"]}
                currentClassName="active"
              >
                <Menu.Item
                  href="home"
                  name="home"
                  active={activeItem === "home"}
                  onClick={this.handleItemClick}
                >
                  <AnchorLink href="#home">Home</AnchorLink>
                </Menu.Item>
                <Menu.Item
                  href="co2"
                  name="co2"
                  active={activeItem === "co2"}
                  onClick={this.handleItemClick}
                >
                  <AnchorLink href="#co2">Emissions</AnchorLink>
                </Menu.Item>
                <Menu.Item
                  href="temp"
                  name="temp"
                  active={activeItem === "temp"}
                  onClick={this.handleItemClick}
                >
                  <AnchorLink href="#temp">Temperature</AnchorLink>
                </Menu.Item>
                <Menu.Item
                  href="#ice"
                  name="ice"
                  active={activeItem === "ice"}
                  onClick={this.handleItemClick}
                >
                  <AnchorLink href="#ice">Glaciers</AnchorLink>
                </Menu.Item>
                <Menu.Item
                  href="#sea"
                  name="sea"
                  active={activeItem === "sea"}
                  onClick={this.handleItemClick}
                >
                  <AnchorLink href="#sea">Seas</AnchorLink>
                </Menu.Item>
                <Menu.Item
                  href="#tips"
                  name="tips"
                  active={activeItem === "tips"}
                  onClick={this.handleItemClick}
                >
                  <AnchorLink href="#tips">What you can do</AnchorLink>
                </Menu.Item>
              </Scrollspy>
            </Menu.Menu>
          </Menu>
        </div>
      </Sticky>
    );
  }
}
