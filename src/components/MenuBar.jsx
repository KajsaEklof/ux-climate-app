import React, { Component } from "react";
import Logo from "./images/logopink.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Menu, Sticky } from "semantic-ui-react";

export default class MenuBar extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Sticky context={this.props.context}>
        <div className="menubar">
          <Menu pointing secondary>
            <Menu.Item href="#home" className="menu-logo">
              <AnchorLink href="#home">
                <img
                  src={Logo}
                  height="100%"
                  width="100%"
                  alt="Cosmopolitan's logo"
                />
              </AnchorLink>
            </Menu.Item>

            <Menu.Menu position="right">
              <Menu.Item
                href="#home"
                name="home"
                active={activeItem === "home"}
                onClick={this.handleItemClick}
              >
                <AnchorLink href="#home">Home</AnchorLink>
              </Menu.Item>
              <Menu.Item
                href="#co2"
                name="co2"
                active={activeItem === "co2"}
                onClick={this.handleItemClick}
              >
                <AnchorLink href="#co2">Emissions</AnchorLink>
              </Menu.Item>

              <Menu.Item
                href="#temp"
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
            </Menu.Menu>
          </Menu>
        </div>
      </Sticky>
    );
  }
}
