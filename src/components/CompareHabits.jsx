import React, { Component } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const CheckBox = props => {
  return (
    <li>
      <input
        key={props.id}
        onChange={props.handleCheckedElement}
        type="checkbox"
        checked={props.isChecked}
        value={props.value}
      />{" "}
      {props.value}
    </li>
  );
};

export default class CompareHabits extends Component {
  constructor(props) {
    super(props);
    this.state = {
      habits: [
        { id: 1, value: "Go vegetarian", isChecked: false },
        { id: 2, value: "Recycle all waste", isChecked: false },
        { id: 3, value: "Only using LED lights", isChecked: false },
        { id: 4, value: "Get down to zero foodwaste", isChecked: false },
        { id: 5, value: "Eat locally produced food", isChecked: false },
        {
          id: 6,
          value: "Minimise your driving to max 30km a day",
          isChecked: false
        }
      ]
    };
  }

  handleCheckedElement = event => {
    let habits = this.state.habits;
    habits.forEach(habit => {
      if (habit.value === event.target.value)
        habit.isChecked = event.target.checked;
    });
    this.setState({ habits: habits });
    console.log(this.state.habits);
  };

  render() {
    const data = [
      {
        name: "Habits",
        "Go vegetarian": 0.9,
        "Recycle all waste": 0.21,
        "Only using LED lights": 0.06,
        "Get down to zero foodwaste": 0.37,
        "Eat locally produced food": 0.36,
        "Minimise your driving to max 30km a day": 1.33
      }
    ];

    let checkList = (
      <div className="App">
        <ul>
          {this.state.habits.map((habit, index) => {
            return (
              <CheckBox
                key={index}
                handleCheckedElement={this.handleCheckedElement}
                {...habit}
              />
            );
          })}
        </ul>
      </div>
    );

    return (
      <Container className="spacing">
        <div className="diagram">
          <Row>
            <Col xs={6}>
              <h4 className="heading">
                <span>{this.props.subHeading}</span>
              </h4>
            </Col>
          </Row>
          <Row className="alignMiddle">
            <Col xs={3} className="compare-container">
              <p>{this.props.text}</p>
            </Col>

            <Col className="container checkList compare-container" xs={3}>
              {checkList}
            </Col>

            <Col className="container compare-container" xs={6}>
              <BarChart
                width={500}
                height={300}
                data={data}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="Habits" />
                <YAxis type="number" domain={[0, 4]} />
                <Tooltip />
                {!this.state.habits[0].isChecked ? (
                  <Bar
                    barSize={80}
                    dataKey="Go vegetarian"
                    stackId="a"
                    fill="#ef0e7c"
                    isAnimationActive={false}
                  />
                ) : null}
                {!this.state.habits[1].isChecked ? (
                  <Bar
                    barSize={80}
                    dataKey="Recycle all waste"
                    stackId="a"
                    fill="#00a99d"
                    isAnimationActive={false}
                  />
                ) : null}
                {!this.state.habits[2].isChecked ? (
                  <Bar
                    barSize={50}
                    dataKey="Only using LED lights"
                    stackId="a"
                    fill="#ffd400"
                    isAnimationActive={false}
                  />
                ) : null}
                {!this.state.habits[3].isChecked ? (
                  <Bar
                    barSize={80}
                    dataKey="Get down to zero foodwaste"
                    stackId="a"
                    fill="#b4e2f0"
                    isAnimationActive={false}
                  />
                ) : null}
                {!this.state.habits[4].isChecked ? (
                  <Bar
                    barSize={80}
                    dataKey="Eat locally produced food"
                    stackId="a"
                    fill="#f6a2b6"
                    isAnimationActive={false}
                  />
                ) : null}
                {!this.state.habits[5].isChecked ? (
                  <Bar
                    barSize={80}
                    dataKey="Minimise your driving to max 30km a day"
                    stackId="a"
                    fill="#87d8d6"
                    isAnimationActive={false}
                  />
                ) : null}
                <Legend
                  layout="vertical"
                  verticalAlign="middle"
                  align="right"
                  width={200}
                  style={{ right: "2px" }}
                />
              </BarChart>
            </Col>
          </Row>
          <Row>
            <Col className="container compare-container" xs={6}></Col>
            <Col className="container compare-container" xs={6}>
              <p className="label-center"> Tons of CO2 Emissions</p>
            </Col>
          </Row>
        </div>
      </Container>
    );
  }
}
