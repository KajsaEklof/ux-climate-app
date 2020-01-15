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
  }

  render() {
    let heading1;

    // Logic for the layout in component 
    if(this.props.headingStyle === 2) {
      heading1 = (
        <h2 className="heading">
          <span>{this.props.heading}</span>
        </h2>
      );
    }

    if (this.props.headingStyle === 3) {
      heading1 = (
        <h3 className="heading">
          <span>{this.props.heading}</span>
        </h3>
      );
    }

    let thisStyle = this.props.border;

    let imageTag = (
      <img
        className="borderImage"
        style={{ color: thisStyle, maxWidth: "100%", height: "auto" }}
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

    let hbox1;
    let hbox2;
    let box1;
    let box2;

    if (this.props.layout === 2) {
      hbox1 = heading1;
      box1 = textTag;
      box2 = imageTag;
    } 
    
    if(this.props.layout === 1){
      hbox2 = heading1;
      box1 = imageTag;
      box2 = textTag;
    }

    return (
      <div className="spacing">
        <Container className="container main">
          <Row className="headerRow">
            <Col className="container" xs={6}>
              {hbox1}
            </Col>
            <Col className="container" xs={6}>
              {hbox2}
            </Col>
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
