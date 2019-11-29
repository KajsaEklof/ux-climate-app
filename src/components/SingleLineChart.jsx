import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import PopupCard from "./PopupCard";
import Button from "react-bootstrap/Button"

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
        {this.state.showPopup ? (
          <PopupCard
            closePopup={this.togglePopUp.bind(this)}
            cardTitle={textData.cardTitle}
            cardText={textData.cardText}
          />
        ) : null}
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
          <Row className="alignRight">
            <Button variant="info"
            className="popup"
              onClick={this.togglePopUp.bind(this)}
              >What does this mean?</Button> 
           
            </Row>
        </Container>
      </div>
    );
  }
}
