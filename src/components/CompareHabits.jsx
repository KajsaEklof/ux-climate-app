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
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Checkbox } from "semantic-ui-react";




const CheckBox = props => {
    return (
      <li>
       <input key={props.id} onChange={props.handleCheckChieldElement} type="checkbox" checked={props.isChecked} value={props.value} /> {props.value}
      </li>
    )
}


export default class CompareHabits extends Component {
    constructor(props) {
        super(props)
        this.state = {
            habits: [
                {id: 1, value: "veggie", isChecked: false},
                {id: 2, value: "recycle", isChecked: false},
                {id: 3, value: "ledlights", isChecked: false},
                {id: 4, value: "foodwaste", isChecked: false},
                {id: 5, value: "shoppingbag", isChecked: false},
                {id: 6, value: "localfood", isChecked: false},
                {id: 7, value: "carfree", isChecked: false}
               
              ]
        }
    }

  handleCheckChieldElement = (event) => {
    let habits = this.state.habits
    habits.forEach(habit => {
       if (habit.value === event.target.value)
          habit.isChecked =  event.target.checked
    })
    this.setState({habits: habits})
    console.log(this.state.habits)
  }
   

  render() {
    const data = [
      {
        name: "Habits",
        Veggie: 0.9,
        Recycle: 0.21,
        "LED Lights": 0.06,
        "Zero Food Waste": 0.37,
        "Reusable Shopping Bag": 0.005,
        "Local Food": 0.36,
        "Car Free": 1.33
      }
    ];

    let checkList = (
        <div className="App">
          <ul>
          {
            this.state.habits.map((habit, index) => {
              return (<CheckBox key={index} handleCheckChieldElement={this.handleCheckChieldElement}  {...habit} />)
            })
          }
          </ul>
        </div>
    )

        let veggieBar;
        let recycleBar;
        let ledBar;
        let wasteBar;
        let bagBar;
        let localBar;
          let carBar;

        if (this.state.habits[0].isChecked === false) {
            veggieBar =  <Bar dataKey="Veggie" stackId="a" fill="#00a99d" />
         };
    
         if (this.state.habits[1].isChecked === false) {
            recycleBar =  <Bar dataKey="Recycle" stackId="a" fill="#00a99d" />
         };
         if (this.state.habits[2].isChecked === false) {
            ledBar =  <Bar dataKey="LED Lights" stackId="a" fill="#00a99d" />
         };
         if (this.state.habits[3].isChecked === false) {
            wasteBar =  <Bar dataKey="Zero Food Waste" stackId="a" fill="#00a99d" />
         };
         if (this.state.habits[4].isChecked === false) {
            bagBar =  <Bar dataKey="Reusable Shopping Bag" stackId="a" fill="#00a99d" />
         };
         if (this.state.habits[5].isChecked === false) {
            localBar =  <Bar dataKey="Local Food" stackId="a" fill="#00a99d" />
         };
          if (this.state.habits[6].isChecked === false) {
            carBar =  <Bar dataKey="Car Free" stackId="a" fill="#00a99d" />
         };
   
   


    return (
      <Container>
      <Row>
      <h2 className="heading">
      Test your habits!
      </h2>
      </Row>
        <Row>
        <Col xs={2}>
        <p>Test text</p>
        </Col>
          <Col className="container" xs={2}>
          {checkList}
          </Col>

          <Col className="container" xs={8}>
            <BarChart
              width={600}
              height={300}
              data={data}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="Habits" />
              <YAxis />
              <Tooltip />
              <Legend />
              {veggieBar}
              {recycleBar}
              {ledBar}
              {wasteBar}
              {bagBar}
              {localBar}
              {carBar}
              {/*<Bar dataKey="Veggie" stackId="a" fill="#00a99d" />
              <Bar dataKey="Recycle" stackId="a" fill="#b4e2f0" />
              <Bar dataKey="LED Lights" stackId="a" fill="#ffd400" />
              <Bar dataKey="Zero Food Waste" stackId="a" fill="#ef0e7c" />
              <Bar dataKey="Reusable Shopping Bag" stackId="a" fill="#f6a2b6" />
              <Bar dataKey="Local Food" stackId="a" fill="#87d8d6" />
    <Bar dataKey="Car Free" stackId="a" fill="#ef4726" /> */}
            </BarChart>
          </Col>
        </Row>
        </Container> 
    );
  }
}
