import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

class LineCharts extends Component {
  state = {};
  render() {
    let co2 = this.props.CO2Emission;
    let temp = this.props.globalTemp;
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
      <div className="Diagram">
        <Container className="container main">
          <h2 className="heading">{this.props.heading}</h2>
          <Row>
            <Col className="container" xs={6}>
              <p id="label">Million Metric Tons of CO2 Emission</p>
            </Col>

            <Col className="container" xs={6}>
              <p id="label">Global Temperature </p>
            </Col>
          </Row>
          <Row>
            <Col className="container" xs={6}>
              <LineChart
                width={500}
                height={300}
                data={dataLineChart1}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                activeDot={{ r: 8 }}
              >
                <XAxis dataKey="Year" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="Total CO2 Emission"
                  stroke="#EF0E7C"
                />
              </LineChart>
            </Col>
            <Col className="container" xs={6}>
              <LineChart
                width={500}
                height={300}
                data={dataLineChart2}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                activeDot={{ r: 8 }}
              >
                <XAxis dataKey="Year" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="Average Temperature"
                  stroke="#00A99D"
                />
              </LineChart>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default LineCharts;
