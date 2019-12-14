import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import PopupCard from "./PopupCard";
import Button from "react-bootstrap/Button";

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
    if (co2 === undefined) {
      return <p>There is no data.</p>;
    }

    const COLORS = ["#EF0E7C", "#00A99D", "#F6A2B6", "#87D8D6", "#B4E2F0"];

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

    let filterData = (arr, nth) => arr.filter((e, i) => i % nth === nth - 1);

    dataBarChart = filterData(dataBarChart, 3);
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
              <Button
                variant="info"
                // className="popup"
                onClick={this.togglePopUp.bind(this)}
              >
                What does this mean?
              </Button>
            </Row>
            <Row className="centeredContent">
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

                <Bar dataKey="GasFuel" stackId="a" fill={COLORS[0]} />
                <Bar dataKey="GasFlaring" stackId="a" fill={COLORS[1]} />
                <Bar dataKey="LiquidFuel" stackId="a" fill={COLORS[2]} />
                <Bar dataKey="Cement" stackId="a" fill={COLORS[3]} />
                <Bar dataKey="SolidFuel" stackId="a" fill={COLORS[4]} />
                <Line
                  type="monotone"
                  dataKey="Total"
                  stroke="#EF4726"
                  activeDot={{ r: 8 }}
                />
              </ComposedChart>
            </Row>
            <Row>
              <p className="label-center">
                Million Metric Tons of CO2 Emission
              </p>
            </Row>
          </div>
        </Container>
      </div>
    );
  }
}

export default Co2Diagram;
