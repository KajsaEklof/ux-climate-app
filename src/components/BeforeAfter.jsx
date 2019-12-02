import React, { Component } from "react";
import BeforeAfterSlider from "react-before-after-slider";
import beforeImage from "./images/before.jpg";
import afterImage from "./images/after.jpg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class BeforeAfter extends Component {
  state = {};

  render() {
    const before = beforeImage;
    const after = afterImage;
    return (
      <Container className="container main spacing">
        <Row className="centeredContent beforeAfter">
          <Col xs={4}>
            <h4 className="heading">{this.props.heading}</h4>
            <p className="infoP">{this.props.text}</p>
          </Col>
          <Col xs={8}>
            <BeforeAfterSlider
              before={before}
              after={after}
              width={680}
              height={480}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default BeforeAfter;
