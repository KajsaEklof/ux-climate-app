import React, { Component } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import introImage from "./images/introImage.png";

  class TextImage extends Component {
    constructor(props) {
      super(props)
      this.state = {
        data2: this.props.textData
      }
      console.log(this.state.data2)
    }
    render() {

      return (
        
      <div>
        <Container className="container main">
          <Row>
            <h2 className="container heading">Heading</h2>
          </Row>
          <Row>
            <Col className="container" xs={6}>
             
            {
              this.state.data2 && this.state.data2.slice(0,1).map((textInfo, index) =>
              <p>{textInfo.info1}
              <br/>
              <br/>
            
              {textInfo.info2}
              </p>

               )
    }
     
            </Col>
            <Col className="container" xs={6}>
              <img
                style={{ maxWidth: "25vw" }}
                src={introImage}
                alt="Three women talk about climate change."
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default TextImage;
