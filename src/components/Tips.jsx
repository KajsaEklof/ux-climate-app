import React, { Component } from "react";
import { Card, Image } from "semantic-ui-react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TipsImage1 from "./images/tipsImage1.png";
import TipsImage2 from "./images/tipsImage2.png";
import TipsImage3 from "./images/tipsImage3.png";
import TipsImage4 from "./images/tip4.png";
import TipsImage5 from "./images/tip5.png";
import TipsImage6 from "./images/tip7.png";


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
                src={TipsImage1}
                wrapped
                ui={false}
                alt="A hand holding stacks of egg cartons"
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
                src={TipsImage2}
                wrapped
                ui={false}
                alt="Plastic packaging rainging down in the foreground, a women in a trendy outfit in the background"
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
                src={TipsImage3}
                wrapped
                ui={false}
                alt="A picture from above of a plate with fresh fruit and vegetables"
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
                src={TipsImage4}
                wrapped
                ui={false}
                alt="A women carrying a large box filled with clothes labled donations"
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
                src={TipsImage5}
                wrapped
                ui={false}
                alt="A close up of someone scraping food of a plate"
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
                src={TipsImage6}
                wrapped
                ui={false}
                alt="A hand holding a canvas tote bag"
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
