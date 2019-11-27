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

export default class SingleLineChart extends Component {
  render() {
    let ice = this.props.iceVolume;
    let sea = this.props.seaLevel;
    if (ice === undefined) {
      return <p>There is no data.</p>;
    }
    if (sea === undefined) {
      return <p>There is no data.</p>;
    }

    let dataLine1 = [];
    ice.map(x =>
      dataLine1.push({
        Year: x.Year,
        Total: x.Total
      })
    );

    let dataLine2 = [];
    sea.map(x =>
      dataLine2.push({
        Year: x.Year,
        Mean: x.Mean
      })
    );

    return (
      <div className="Diagram">
        <Container className="container main">
          <h2 className="heading">{this.props.heading}</h2>
          <Row>
            <p id="label">Sea Levels vs Ice Volume</p>

            <LineChart
              width={600}
              height={300}
              data={data}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <XAxis dataKey="Year" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="pv"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
          </Row>
        </Container>
      </div>
    );
  }
}
