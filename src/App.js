import React, { Component } from "react";
import Header from "./components/Header";
import TextImage from "./components/TextImage";
import Co2Diagram from "./components/Co2Diagram";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import content from "./components/content.json"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      textData: content,
    CO2Emission: []
  }
  console.log(this.state.textData)
  };

  async componentDidMount() {
    const url = "https://my.api.mockaroo.com/co2.json?key=8eb9e6f0";
    const response = await fetch(url);
    const data = await response.json();

    const co2data = data.filter(x => x.Year > 1944 && x.Year < 2014);
    this.setState({ CO2Emission: co2data });
  }

  render() {
    return (
      <div id="App">
        <Header />
        <TextImage 
        textData={this.state.textData}/>

        <Co2Diagram 
        CO2Emission={this.state.CO2Emission} />
        <TextImage />
      </div>
    );
  }
}

export default App;
