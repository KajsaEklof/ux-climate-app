import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PopupCard from "./PopupCard";
import Button from "react-bootstrap/Button"

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip
} from "recharts";

class AreaCharts extends Component {
  constructor(){
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
      <div className="Diagram">
      {this.state.showPopup ?
        <PopupCard
        closePopup={this.togglePopUp.bind(this)}
        cardTitle={textData.cardTitle}
        cardText={textData.cardText}
        />
        : null
      }
        <Container className="container main">
          <h2 className="heading">{this.props.heading}</h2>
          <Row className="alignRight">
          <Button variant="info"
          className="popup"
            onClick={this.togglePopUp.bind(this)}
            >What does this mean?</Button> 
         
          </Row>
          
          <Row>
            <Col className="container" xs={6}>
              <AreaChart
                width={500}
                height={400}
                data={dataLineChart1}
                style={{
                  backgroundColor: "white",
                  borderColor: "green",
                  borderStyle: "solid",
                  borderWidth: "0,2em"
                }}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5
                }}
              >
                <XAxis dataKey="Year" />
                <YAxis />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="Average Glacier Thickness"
                  stroke="#87d8d6"
                  fill="#87d8d6"
                />
              </AreaChart>
            </Col>
            <Col className="container" xs={6}>
              <AreaChart
                width={500}
                height={400}
                data={dataLineChart2}
                style={{
                  backgroundColor: "white",
                  borderColor: "green",
                  borderStyle: "solid",
                  borderWidth: "0,2em"
                }}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5
                }}
              >
                <XAxis dataKey="Year" />
                <YAxis />
                <Tooltip />

                <Area
                  type="monotone"
                  dataKey="Average Sea Level"
                  stroke="#b4e2f0"
                  fill="#b4e2f0"
                />
              </AreaChart>
            </Col>
          </Row>
          <Row>
            <Col className="container" xs={6}>
              <p className="label">Average Glacier Thickness</p>
            </Col>
            <Col className="container" xs={6}>
              <p className="label">Average Sea Level</p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default AreaCharts;
