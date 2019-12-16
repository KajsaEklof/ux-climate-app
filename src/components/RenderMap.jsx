import React, { useState } from "react";
import ReactTooltip from "react-tooltip";
import InteractiveMap from "./InteractiveMap";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function RenderMap() {
  const [content, setContent] = useState("");
  return (
    <div className="spacing">
      <Container className="container main">
        <Row className="headerRow">
          
            <h3 className="heading">
              <span>Consequences Of Rising Seas</span>
            </h3>
          
          <Col className="container" xs={6}></Col>
        </Row>
        <Row>
          <Col className="container" xs={10}>
            <InteractiveMap setTooltipContent={setContent} />
            <ReactTooltip>{content}</ReactTooltip>
          </Col>
        </Row>
        <Row>
          <Col className="container" xs={6}>
            <p>
              Even a small change in sea levels can have a disastrous effect on
              those living close to the sea but also everyone else. Higher sea
              levels can bring on more dangerous hurricanes and typhoons that
              move slower than usual and drop more rain. There are already
              millions of people around the world who are at risk of floods and
              many are being forced to move to higher ground. Already people on
              the coast of Wales in Great Britain are at risk of becoming
              climate refugees in the next few years, and most likely not the
              last. You might think this is only a problem in countries far away
              but this is a problem which will have consequences all over the
              world.
            </p>
          </Col>
          <Col className="container" xs={6}>
            <p>
              Rising sea levels could impact your internet access since much of
              our communications infrastructure is in places where the sea is
              rising!
            </p>
            <p className="mapText">The areas marked on the map...</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default RenderMap;
