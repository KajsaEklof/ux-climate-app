import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PopupCard from "./PopupCard";
import Button from "react-bootstrap/Button";
import { Icon } from "semantic-ui-react";

import { AreaChart, Area, XAxis, YAxis, Tooltip } from "recharts";

class AreaCharts extends Component {
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
    let ice = this.props.iceVolume;
    let sea = this.props.seaLevel;
    if (ice === undefined) {
      return <p>There is no data.</p>;
    }
    if (sea === undefined) {
      return <p>There is no data.</p>;
    }

    let dataLineChart1 = [];
    ice.map(x =>
      dataLineChart1.push({
        Year: x.Year,
        "Average Glacier Thickness": x["Mean cumulative mass balance"]
      })
    );

    let dataLineChart2 = [];
    sea.map(x =>
      dataLineChart2.push({
        Year: x.Time,
        "Average Sea Level": x.GMSL
      })
    );

    return (
      <div className="Diagram spacing">
        {this.state.showPopup ? (
          <PopupCard
            closePopup={this.togglePopUp.bind(this)}
            cardTitle={textData.cardTitle}
            cardText1={textData.cardText1}
            cardText2={textData.cardText2}
          />
        ) : null}
        <Container className="container main">
          {/* <h3 className="heading">
            <span>{this.props.heading}</span>
        </h3> */}
          <Row>
            <h2 className="heading separate">{this.props.heading}</h2>
          </Row>
          <div className="diagram">
            <Row className="alignRight">
              <Button
                variant="info"
                // className="popup"
                onClick={this.togglePopUp.bind(this)}
              >
                What does this mean?
              </Button>
            </Row>

            <Row className="doubleDiagram">
              <Col className="container" xs={6}>
                <AreaChart
                  width={450}
                  height={300}
                  data={dataLineChart1}
                  margin={{
                    top: 5,
                    right: 20,
                    left: 0,
                    bottom: 5
                  }}
                  syncId="syncID2"
                >
                  <XAxis dataKey="Year" />
                  <YAxis />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="Average Glacier Thickness"
                    stroke="#02958a"
                    fill="#02958a"
                    activeDot={{ r: 8 }}
                  />
                </AreaChart>
              </Col>
              <Col className="container" xs={6}>
                <AreaChart
                  width={450}
                  height={300}
                  data={dataLineChart2}
                  margin={{
                    top: 5,
                    right: 20,
                    left: 0,
                    bottom: 5
                  }}
                  syncId="syncID2"
                >
                  <XAxis dataKey="Year" />
                  <YAxis />
                  <Tooltip />

                  <Area
                    type="monotone"
                    dataKey="Average Sea Level"
                    stroke="#207C97"
                    fill="#207C97"
                    activeDot={{ r: 8 }}
                  />
                </AreaChart>
              </Col>
            </Row>
            <Row>
              <Col className="container" xs={6}>
                <p className="label-center">
                  <Icon name="certificate" className="icon-ice" />
                  Average Mass Of Measured Glacier
                </p>
                <p className="chartDescription">
                  * In this diagram negative values indicate a net loss of ice and snow compared
                  with the base year of 1945. For consistency, measurements are
                  in meters of water equivalent, which represent changes in the
                  average thickness of a glacier.
                </p>
              </Col>
              <Col className="container" xs={6}>
                <p className="label-center">
                  <Icon name="certificate" className="icon-sea" />
                  Average Global Sea Level In mm
                </p>
                <p className="chartDescription">
                 * This diagram shows cumulative changes in sea level for the
                  world’s oceans since 1880, based on a combination of long-term
                  tide gauge measurements and recent satellite measurements.
                </p>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    );
  }
}

export default AreaCharts;
