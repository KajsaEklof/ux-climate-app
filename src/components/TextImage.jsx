import React, { Component } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

class TextImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data2: this.props.textData
    };
    console.log(this.state.data2);
  }
  render() {
    let imageTag = (
      <img
        style={{ maxWidth: "25vw" }}
        src={this.props.picture}
        alt={this.props.altText}
      />
    );

    let textTag = (
      <p>
        {this.props.textData1}
        <br />
        <br />
        {this.props.textData2}
      </p>
    );

    let box1 = imageTag;
    let box2 = textTag;

    if (this.props.layout === 2) {
      box1 = textTag;
      box2 = imageTag;
    } else {
      box1 = imageTag;
      box2 = textTag;
    }

    return (
      <div>
        <Container className="container main">
          <Row>
            <h2 className="container heading">{this.props.heading}</h2>
          </Row>
          <Row>
            <Col className="container" xs={6}>
              {box1}
            </Col>
            <Col className="container" xs={6}>
              {box2}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default TextImage;
