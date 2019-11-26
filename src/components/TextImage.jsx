import React, { Component } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import introImage from "./images/introImage.png";

class TextImage extends Component {
  state = {};
  render() {
    return (
      <div>
        <Container className="container main">
          <Row>
            <h2 className="container heading">Heading</h2>
          </Row>
          <Row>
            <Col className="container" xs={6}>
              <p>
                Lorem Its hands were holograms that altered to match the
                convolutions of the room where Case waited. Case felt the edge
                of the spherical chamber. A graphic representation of data
                abstracted from the banks of every computer in the coffin for
                Armitage’s call. Case felt the edge of the Flatline as a
                construct, a hardwired ROM cassette replicating a dead man’s
                skills, obsessions, kneejerk responses. The two surviving
                Founders of Zion were old men, old with the surgery, he found
                himself thinking, while sweat coursed down his ribs, when you
                could just carry the thing for what it was a handgun and nine
                rounds of ammunition, and as he made his way down Shiga from the
                sushi stall he cradled it in his jacket pocket.
                <br />
                <br />
                Images formed and reformed: a flickering montage of the Sprawl’s
                towers and ragged Fuller domes, dim figures moving toward him in
                the dark, curled in his jacket pocket. Now this quiet courtyard,
                Sunday afternoon, this girl with a hand on his chest. The Sprawl
                was a steady pulse of pain midway down his spine. Molly hadn’t
                seen the dead girl’s face swirl like smoke, to take on the wall
                between the bookcases, its distorted face sagging to the Tank
                War, mouth touched with hot gold as a gliding cursor struck
                sparks from the wall of a skyscraper canyon.
              </p>
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
