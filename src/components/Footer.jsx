import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

class Footer extends Component {
  state = {};
  render() {
    return (
      <Container>
        <Row className="centeredContent">
          <p className="footerText">©{new Date().getFullYear()} <span className="footerText cosmo">COSMOPOLITAN</span></p>
        </Row>
      </Container>
    );
  }
}

export default Footer;
