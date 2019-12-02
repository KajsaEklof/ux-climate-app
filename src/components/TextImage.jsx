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
    let heading1 = <h3 className="heading">{this.props.heading}</h3>;
    let heading2 = <h3> </h3>;
    let thisStyle = this.props.border;
    
    let imageTag = (
      <img
        className="borderImage"
        style={{ color: thisStyle }}
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

    let hbox1 = heading1;
    let hbox2 = heading2;
    let box1 = imageTag;
    let box2 = textTag;

    if (this.props.layout === 2) {
      hbox1 = heading1;
      hbox2 = heading2;
      box1 = textTag;
      box2 = imageTag;
    } else {
      hbox1 = heading2;
      hbox2 = heading1;
      box1 = imageTag;
      box2 = textTag;
    }

    return (
      <div>
        <Container className="container main">
          <Row>
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
