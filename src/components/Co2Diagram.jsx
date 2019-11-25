import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import {
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

class Co2Diagram extends Component {
  state = {};
  render() {
    let co2 = this.props.CO2Emission;
    if (co2 === undefined) {
      return <p>There is no data.</p>;
    }

    const COLORS = ["#EF0E7C", "#00A99D", "#FFD400", "#BaE2F0", "#EF4726"];

    let dataBarChart = [];
    co2.map(x =>
      dataBarChart.push({
        Year: x.Year,
        Total: x.Total,
        GasFuel: x["Gas Fuel"],
        LiquidFuel: x["Liquid Fuel"],
        SolidFuel: x["Solid Fuel"],
        Cement: x.Cement,
        GasFlaring: x["Gas Flaring"]
      })
    );

    return (
      <div className="Diagram">
        <Container>
          <Row>
            <p id="label">Million Metric Tons of CO2 Emission</p>
          </Row>
          <Row>
            <ComposedChart
              width={1000}
              height={500}
              data={dataBarChart}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="Year" />
              <YAxis />
              <Tooltip content={dataBarChart.Year} />
              <Legend />
              <Bar dataKey="GasFuel" stackId="a" fill="#8884d8" />
              <Bar dataKey="GasFlaring" stackId="a" fill="yellow" />
              <Bar dataKey="LiquidFuel" stackId="a" fill="#82ca9d" />
              <Bar dataKey="Cement" stackId="a" fill="blue" />
              <Bar dataKey="SolidFuel" stackId="a" fill="red" />
              <Line type="monotone" dataKey="Total" stroke="#ff7300" />
            </ComposedChart>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Co2Diagram;
