import React, { Component } from "react";
import BeforeAfterSlider from "react-before-after-slider";
import beforeImage from "./images/before.jpg";
import afterImage from "./images/after.jpg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

class BeforeAfter extends Component {
  state = {};

  render() {
    const before = beforeImage;
    const after = afterImage;
    return (
      <Container className="container main beforeAfter">
        <div className="diagram">
          <Row className="centeredContent">
            <BeforeAfterSlider
              before={before}
              after={after}
              width={680}
              height={480}
            />
          </Row>
        </div>
        <Row className="centeredContent">
          <p className="infoP">{this.props.text}</p>
        </Row>
      </Container>
    );
  }
}

export default BeforeAfter;
