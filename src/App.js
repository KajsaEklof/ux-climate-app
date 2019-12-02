import React, { Component } from "react";
import Header from "./components/Header";
import TextImage from "./components/TextImage";
import Co2Diagram from "./components/Co2Diagram";
import LineCharts from "./components/LineCharts";
import AreaCharts from "./components/AreaCharts";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import data from "./components/Content.json"; /*This is the json file with all our content and copy text for the applicaiton*/
import BeforeAfter from "./components/BeforeAfter";
import icejsonData from "./components/iceData.json";
import seajsonData from "./components/seaData.json";
import CompareHabits from "./components/CompareHabits";

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

    /* const url3 = "https://my.api.mockaroo.com/glaciersize.json?key=8eb9e6f0";
    const response3 = await fetch(url3); */
    const data3 = seajsonData;

    /* const url4 = "https://my.api.mockaroo.com/sealevel.json?key=8eb9e6f0"; 
    const response4 = await fetch(url4); */
    const data4 = icejsonData;

    const co2data = data.filter(x => x.Year > 1944 && x.Year < 2014);
    const tempData = data2.filter(x => x.Year > 1944 && x.Year < 2014);

    const seaData = data3.filter(
      x =>
        Date.parse(x.Time) > Date.parse("1990-01-01") &&
        Date.parse(x.Time) < Date.parse("2014-01-01")
    );

    const iceData = data4.filter(x => x.Year > 1989 && x.Year < 2014);

    seaData.map(x => (x.Time = x.Time.substring(0, 4)));
    console.log(seaData);

    this.setState({
      globalTemp: tempData,
      CO2Emission: co2data,
      iceVolume: iceData,
      seaLevel: seaData
    });
  }

  render() {
    const content = this.state
      .textData; /* Saves this.state.textData in a constent */

    return (
      <div id="App">
        <Header />
        <TextImage
          layout={2}
          
          heading={content.introduction.heading}
          textData1={content.introduction.info1}
          textData2={content.introduction.info2}
          picture={content.introduction.picture}
          altText={content.introduction.altText}
          border={content.introduction.border}
        />

        <Co2Diagram
          heading={content.co2Diagram.heading}
          CO2Emission={this.state.CO2Emission}
          textData={content.co2Popup}
        />

        <TextImage
          layout={1}
          heading={content.co2Food.heading}
          textData1={content.co2Food.info1}
          textData2={content.co2Food.info2}
          picture={content.co2Food.picture}
          altText={content.co2Food.altText}
        />

        <TextImage
          layout={2}
          heading={content.co2Clothes.heading}
          textData1={content.co2Clothes.info1}
          textData2={content.co2Clothes.info2}
          picture={content.co2Clothes.picture}
          altText={content.co2Clothes.altText}
        />

        <LineCharts
          heading={content.co2vsTemp.heading}
          CO2Emission={this.state.CO2Emission}
          globalTemp={this.state.globalTemp}
          textData={content.co2vsTempPopup}
        />
        <h2 className="heading">What happens when the earth gets warmer?</h2>
        <TextImage
          layout={1}
          heading={content.glaciers.heading}
          textData1={content.glaciers.info1}
          textData2={content.glaciers.info2}
          picture={content.glaciers.picture}
          altText={content.glaciers.altText}
        />
        <BeforeAfter text={content.beforeAfter.info1} />

        <AreaCharts
          heading={content.icevsSea.heading}
          seaLevel={this.state.seaLevel}
          iceVolume={this.state.iceVolume}
          textData={content.icevsSeaPopup}
        />

        <TextImage
          layout={2}
          heading={content.seaLevel.heading}
          textData1={content.seaLevel.info1}
          textData2={content.seaLevel.info2}
          picture={content.seaLevel.picture}
          altText={content.seaLevel.altText}
        />
        <CompareHabits />
      </div>
    );
  }
}

export default App;
