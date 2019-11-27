import React, { Component } from "react";
import Header from "./components/Header";
import TextImage from "./components/TextImage";
import Co2Diagram from "./components/Co2Diagram";
import LineCharts from "./components/LineCharts";
/*import SingleLineChart from "./components/SingleLineChart";*/
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import data from "./components/Content.json"; /*This is the json file with all our content and copy text for the applicaiton*/

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textData: data,
      CO2Emission: [],
      globalTemp: [],
      seaLevel: [],
      iceVolume: []
    };
  }

  async componentDidMount() {
    const url =
      "https://my.api.mockaroo.com/co2.json?key=8eb9e6f0"; /* This is the Co2 Emission API */
    const response = await fetch(url);
    const data = await response.json();

    const url2 =
      "https://my.api.mockaroo.com/temp.json?key=8eb9e6f0"; /* This is the Global Temperature API */
    const response2 = await fetch(url2);
    const data2 = await response2.json();

    const co2data = data.filter(x => x.Year > 1944 && x.Year < 2014);
    this.setState({ CO2Emission: co2data });

    const tempData = data2.filter(x => x.Year > 1944 && x.Year < 2014);
    this.setState({ globalTemp: tempData });

    {
      /*

    const url3 = "https://my.api.mockaroo.com/glaciersize.json?key=8eb9e6f0"; This is the Glacier Size API 
    const response3 = await fetch(url3);
    const data3 = await response3;

    const url4 = "https://my.api.mockaroo.com/sealevel.json?key=8eb9e6f0"; This is the Sea Level API
    const response4 = await fetch(url4);
    const data4 = await response4.json();
  

    const iceData = data3.filter(x => x.Year > 1944 && x.Year < 2014);
    this.setState({ iceVolume: iceData })

    const seaData = data4.filter(x => x.Year > 1944 && x.Year < 2014);
    this.setState({ seaLevel: seaData })*/
    }
  }

  render() {
    return (
      <div id="App">
        <Header />
        <TextImage
          layout={2}
          heading={this.state.textData.introduction.heading}
          textData1={this.state.textData.introduction.info1}
          textData2={this.state.textData.introduction.info2}
          picture={this.state.textData.introduction.picture}
          altText={this.state.textData.introduction.altText}
        />

        <Co2Diagram
          heading={this.state.textData.co2Diagram.heading}
          CO2Emission={this.state.CO2Emission}
        />

        <TextImage
          layout={1}
          heading={this.state.textData.co2Food.heading}
          textData1={this.state.textData.co2Food.info1}
          textData2={this.state.textData.co2Food.info2}
          picture={this.state.textData.co2Food.picture}
          altText={this.state.textData.co2Food.altText}
        />

        <TextImage
          layout={2}
          heading={this.state.textData.co2Clothes.heading}
          textData1={this.state.textData.co2Clothes.info1}
          textData2={this.state.textData.co2Clothes.info2}
          picture={this.state.textData.co2Clothes.picture}
          altText={this.state.textData.co2Clothes.altText}
        />

        <LineCharts
          heading={this.state.textData.co2vsTemp.heading}
          CO2Emission={this.state.CO2Emission}
          globalTemp={this.state.globalTemp}
        />
        <h2>What happens when the earth gets warmer?</h2>
        <TextImage
          layout={1}
          heading={this.state.textData.glaciers.heading}
          textData1={this.state.textData.glaciers.info1}
          textData2={this.state.textData.glaciers.info2}
          picture={this.state.textData.glaciers.picture}
          altText={this.state.textData.glaciers.altText}
        />
        {/*<SingleLineChart
        heading={this.state.textData.icevsSea.heading}
        seaLevel={this.state.seaLevel}
        iceVolume={this.state.iceVolume}
        />*/}
        <TextImage
          layout={2}
          heading={this.state.textData.seaLevel.heading}
          textData1={this.state.textData.seaLevel.info1}
          textData2={this.state.textData.seaLevel.info2}
          picture={this.state.textData.seaLevel.picture}
          altText={this.state.textData.seaLevel.altText}
        />
      </div>
    );
  }
}

export default App;
