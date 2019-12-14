import React, { Component } from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Tips extends Component {
  render() {
    return (
      <Container className="spacing">
        <h3 className="heading">
          <span>Six simple changes you can do</span>
        </h3>
        <Row className="cardrow">
          <Col xs={4} className="centeredContent">
            <Card>
              <Image
                src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
                wrapped
                ui={false}
              />
              <Card.Content>
                <Card.Header>Be picky about packaging</Card.Header>

                <Card.Description>
                  Plastic packaging creates a lot of waste. Try to avoid
                  packaged products and look for refills of products like
                  shampoo.
                </Card.Description>
              </Card.Content>
            </Card>
          </Col>
          <Col xs={4} className="centeredContent">
            <Card>
              <Image
                src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
                wrapped
                ui={false}
              />
              <Card.Content>
                <Card.Header> Recycling saves emissions</Card.Header>

                <Card.Description>
                  Recycling 1 kg of paper instead of landfilling it avoids
                  almost 1 kg of CO2 emissions, as well as methane emissions.
                </Card.Description>
              </Card.Content>
            </Card>
          </Col>
          <Col xs={4} className="centeredContent">
            <Card>
              <Image
                src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
                wrapped
                ui={false}
              />
              <Card.Content>
                <Card.Header>Buy products in season</Card.Header>

                <Card.Description>
                  Growing food outside its normal growing season requires
                  tremendous amounts of water, energy and other resources.
                </Card.Description>
              </Card.Content>
            </Card>
          </Col>
        </Row>
        <Row className="cardrow">
          <Col xs={4} className="centeredContent">
            <Card>
              <Image
                src="https://raw.githubusercontent.com/KajsaEklof/ux-climate-app/implementation2/src/components/images/tip4.png"
                wrapped
                ui={false}
              />
              <Card.Content>
                <Card.Header>Swap, sell or donate clothes</Card.Header>

                <Card.Description>
                  Instead of buying new, consider borrowing, renting or buying
                  second-hand.
                </Card.Description>
              </Card.Content>
            </Card>
          </Col>
          <Col xs={4} className="centeredContent">
            <Card>
              <Image
                src="https://raw.githubusercontent.com/KajsaEklof/ux-climate-app/implementation2/src/components/images/tip5.png"
                wrapped
                ui={false}
              />
              <Card.Content>
                <Card.Header> Don't waste food </Card.Header>

                <Card.Description>
                  Buy only the amount you need, and keep your leftovers for
                  later!
                </Card.Description>
              </Card.Content>
            </Card>
          </Col>
          <Col xs={4} className="centeredContent">
            <Card>
              <Image
                src="https://raw.githubusercontent.com/KajsaEklof/ux-climate-app/implementation2/src/components/images/tip7.png"
                wrapped
                ui={false}
              />
              <Card.Content>
                <Card.Header>Use reusable shopping bags</Card.Header>

                <Card.Description>
                  And buy kitchen and toilet roll made from recycled paper.
                </Card.Description>
              </Card.Content>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Tips;
