import React, { Component } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import { Icon } from "semantic-ui-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine
} from "recharts";

import PopupCard from "./PopupCard";

class LineCharts extends Component {
  constructor() {
    super();
    this.state = {
      showPopup: false
    };
  }

  togglePopUp() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  render() {
    let textData = this.props.textData;

    let co2 = this.props.CO2Emission;
    let temp = this.props.globalTemp;

    // Simple error handling
    if (co2 === undefined) {
      return <p>There is no data.</p>;
    }
    if (temp === undefined) {
      return <p>There is no data.</p>;
    }

    let dataLineChart1 = [];
    co2.map(x =>
      dataLineChart1.push({
        Year: x.Year,
        "Total CO2 Emission": x.Total
      })
    );

    let dataLineChart2 = [];
    temp.map(x =>
      dataLineChart2.push({
        Year: x.Year,
        "Average Temperature": x.Mean
      })
    );

    dataLineChart2.reverse();

    return (
      <div className="spacing">
        {this.state.showPopup ? (
          <PopupCard
            closePopup={this.togglePopUp.bind(this)}
            cardTitle={textData.cardTitle}
            cardText1={textData.cardText1}
            cardText2={textData.cardText2}
          />
        ) : null}
        <Container className="container main">
          <Row>
            <h2 className="heading separate">{this.props.heading}</h2>
          </Row>
          <div className="diagram">
            <Row className="alignRight">
              <Button variant="info" onClick={this.togglePopUp.bind(this)}>
                What does this mean?
              </Button>
            </Row>
            <Row className="doubleDiagram">
              <Col className="container" xs={6}>
                <LineChart
                  width={450}
                  height={300}
                  data={dataLineChart1}
                  margin={{ top: 5, right: 20, left: 0, bottom: 5 }}
                  activeDot={{ r: 8 }}
                  syncId="syncID"
                >
                  <XAxis dataKey="Year" />
                  <YAxis />
                  <CartesianGrid strokeDasharray="3 3" />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="Total CO2 Emission"
                    stroke="#EF0E7C"
                    activeDot={{ r: 8 }}
                  />
                </LineChart>
              </Col>
              <Col className="container" xs={6}>
                <LineChart
                  width={450}
                  height={300}
                  data={dataLineChart2}
                  margin={{ top: 5, right: 20, left: 0, bottom: 5 }}
                  activeDot={{ r: 8 }}
                  syncId="syncID"
                >
                  <XAxis dataKey="Year" />
                  <YAxis />
                  <CartesianGrid strokeDasharray="3 3" />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="Average Temperature"
                    stroke="#00A99D"
                    activeDot={{ r: 8 }}
                  />
                  <ReferenceLine x="Page C" stroke="red" label="Max PV PAGE" />
                  <ReferenceLine y={1.5} label="Paris Agreement" stroke="red" />
                </LineChart>
              </Col>
            </Row>
            <Row className="centeredContent">
              <Col className="container" xs={6}>
                <p className="label-center">
                  <Icon name="certificate" className="icon-emission" />
                  Million Metric Tons of CO2 Emission
                </p>
              </Col>
              <Col className="container" xs={6}>
                <p className="label-center">
                  <Icon name="certificate" className="icon-temp" />
                  Global Average Temperature{" "}
                </p>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    );
  }
}

export default LineCharts;
