import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

class popupCard extends Component {
  state = {};
  render() {
    return (
      <Container>
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              <p>This is a subtitle</p>
            </Card.Subtitle>
            <Card.Text>
              <p>Some quick example text to build on the card title and make up the
              bulk of the card's content.</p>
            </Card.Text>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

export default popupCard;
