import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

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

    /* let dataLine1 = [];
    ice.map(x =>
      dataLine1.push({
        Year: x.Year,
        Mean: x["Mean cumulative mass balance"]
      })
    ); */

    let dataLine2 = [];
    sea.map(x =>
      dataLine2.push({
        Year: x.Time,
        GMSL: x.GMSL
      })
    );

    ice.map(x =>
      dataLine2.splice(x, 0, {
        Mean: x["Mean cumulative mass balance"]
      })
    );

    /*let dataLine3 = dataLine1.concat(dataLine2);*/
    console.log(dataLine2);

    return (
      <div className="Diagram">
        <Container className="container main">
          <h2 className="heading">{this.props.heading}</h2>
          <Row>
            <LineChart
              className="centeredContent"
              width={600}
              height={300}
              data={dataLine2}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <XAxis dataKey="Year" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="Mean"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
              <Line type="monotone" dataKey="GMSL" stroke="#82ca9d" />
            </LineChart>
          </Row>
          <Row>
            <p id="label">
              Change in Sea Levels vs average thickness of Glaciers
            </p>
          </Row>
        </Container>
      </div>
    );
  }
}
