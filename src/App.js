import React, { Component, createRef } from "react";
import Header from "./components/Header";
import TextImage from "./components/TextImage";
import Co2Diagram from "./components/Co2Diagram";
import LineCharts from "./components/LineCharts";
import AreaCharts from "./components/AreaCharts";
import BeforeAfterSlider from "./components/BeforeAfterSlider";
import CompareHabits from "./components/CompareHabits";
import Footer from "./components/Footer";
import data from "./components/Content.json"; /*This is the json file with all our content and copy text for the applicaiton*/
import icejsonData from "./components/iceData.json";
import seajsonData from "./components/seaData.json";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MenuBar from './components/MenuBar';
import Tips from './components/Tips';




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

    const yearFilteredTempData = data2.filter(
      x => x.Year > 1944 && x.Year < 2014
    );
    const tempData = yearFilteredTempData.filter(p => p.Source === "GISTEMP"); //only rows that have source GISTEMP

    const seaData = data3.filter(
      x =>
        Date.parse(x.Time) > Date.parse("1990-01-01") &&
        Date.parse(x.Time) < Date.parse("2014-01-01")
    );

    const iceData = data4.filter(x => x.Year > 1989 && x.Year < 2014);

    seaData.map(x => (x.Time = x.Time.substring(0, 4)));

    this.setState({
      globalTemp: tempData,
      CO2Emission: co2data,
      iceVolume: iceData,
      seaLevel: seaData
    });
  }
  contextRef = createRef();

  render() {
    const content = this.state
      .textData; /* Saves this.state.textData in a constent */

    return (
      <div id="App" ref={this.contextRef}>
        <Header />
      <MenuBar context={this.contextRef}/>
        <div id="page-content">
          <div className="section-white">
            <TextImage
              headingStyle={2}
              layout={2}
              heading={content.introduction.heading}
              textData1={content.introduction.info1}
              textData2={content.introduction.info2}
              picture={content.introduction.picture}
              altText={content.introduction.altText}
              border={content.introduction.border}
            />
          </div>
          <div className="section-pink" id="co2">
            <h2 className="heading separate">
             What are CO2 Emissions Anyway?
            </h2>
            <Co2Diagram
              CO2Emission={this.state.CO2Emission}
              textData={content.co2Popup}
            />

            <TextImage
              headingStyle={3}
              layout={1}
              heading={content.co2Food.heading}
              textData1={content.co2Food.info1}
              textData2={content.co2Food.info2}
              picture={content.co2Food.picture}
              altText={content.co2Food.altText}
            />

            <TextImage
              headingStyle={3}
              layout={2}
              heading={content.co2Clothes.heading}
              textData1={content.co2Clothes.info1}
              textData2={content.co2Clothes.info2}
              picture={content.co2Clothes.picture}
              altText={content.co2Clothes.altText}
            />
          </div>
          <div className="section-white" id="temp">
            <h2 className="heading separate" >
              <span>Increased Emissions = Rising Temperature</span>
            </h2>
            <LineCharts
              CO2Emission={this.state.CO2Emission}
              globalTemp={this.state.globalTemp}
              textData={content.co2vsTempPopup}
            />
          </div>
          <div className="section-pink" id="iceSea">
            <h2 className="heading separate">
              <span>What Happens When the Earth Gets Warmer?</span>
            </h2>
            <TextImage
              headingStyle={3}
              layout={1}
              heading={content.glaciers.heading}
              textData1={content.glaciers.info1}
              textData2={content.glaciers.info2}
              picture={content.glaciers.picture}
              altText={content.glaciers.altText}
            />
            <BeforeAfterSlider
              heading={content.beforeAfter.heading}
              text={content.beforeAfter.info1}
            />
          </div>
          <div className="section-white">
            <h2 className="heading separate">
              <span>When The Glaciers Melt... Sea Levels Rise</span>
            </h2>
            <AreaCharts
              seaLevel={this.state.seaLevel}
              iceVolume={this.state.iceVolume}
              textData={content.icevsSeaPopup}
            />

            <TextImage
              headingStyle={3}
              layout={2}
              heading={content.seaLevel.heading}
              textData1={content.seaLevel.info1}
              textData2={content.seaLevel.info2}
              picture={content.seaLevel.picture}
              altText={content.seaLevel.altText}
            />
          </div>
          <div className="section-pink" id="tips">
            <h2 className="heading separate">
              <span>
                What You Can Do To Impact the Climate
              </span>
            </h2>
            <CompareHabits
              subHeading={content.habits.subheading}
              text={content.habits.info1}
            />
            <Tips />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
