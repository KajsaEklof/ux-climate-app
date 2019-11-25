import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import {
  BarChart,
  Bar,
  Cell,
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

    return (
      <div className="Diagram">
        <Container>
          <Row>
            <BarChart
              width={500}
              height={300}
              data={co2}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey={co2.LiquidFuel} stackId="a" fill="#8884d8" />
              <Bar dataKey={co2.SolidFuel} stackId="a" fill="#82ca9d" />
            </BarChart>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Co2Diagram;
