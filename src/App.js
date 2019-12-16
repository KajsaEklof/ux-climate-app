import React, { Component, createRef } from "react";
import RenderMap from "./components/RenderMap";
import Header from "./components/Header";
import TextImage from "./components/TextImage";
import Co2Diagram from "./components/Co2Diagram";
import LineCharts from "./components/LineCharts";
import AreaCharts from "./components/AreaCharts";
import BeforeAfterSlider from "./components/BeforeAfterSlider";
import CompareHabits from "./components/CompareHabits";
import Footer from "./components/Footer";
import data from "./components/Content.json"; /*This is the json file with all our content and copy text for the applicaiton*/
import icejsonData from "./Data/iceData.json";
import seajsonData from "./Data/seaData.json";
import co2Data from "./Data/co2Data.json";
import tempjsonData from "./Data/tempData.json";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MenuBar from "./components/MenuBar";
import Tips from "./components/Tips";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textData: data,
      CO2Emission: [],
      globalTemp: [],
      seaLevel: [],
      iceVolume: [],
      mapContent: ""
    };
  }

  async componentDidMount() {
    // const url =
    //   "https://my.api.mockaroo.com/co2.json?key=8eb9e6f0"; /* This is the Co2 Emission API */
    // const response = await fetch(url);
    // const data = await response.json();

    // const url2 =
    //   "https://my.api.mockaroo.com/temp.json?key=8eb9e6f0"; /* This is the Global Temperature API */
    // const response2 = await fetch(url2);
    // const data2 = await response2.json();

    /* const url3 = "https://my.api.mockaroo.com/glaciersize.json?key=8eb9e6f0";
    const response3 = await fetch(url3); */

    /* const url4 = "https://my.api.mockaroo.com/sealevel.json?key=8eb9e6f0"; 
    const response4 = await fetch(url4); */

    // Importing co2 json data and filtering on year
    const emissions = co2Data;
    const emissionData = emissions.filter(x => x.Year > 1944 && x.Year < 2014);

    // Importing Glacier data from json and filtering
    const iceData = icejsonData;
    const glacierData = iceData.filter(x => x.Year > 1989 && x.Year < 2014);

    //Importing Sea level data from json and filtering
    const seaDataJson = seajsonData;
    const seaData = seaDataJson.filter(
      x =>
        Date.parse(x.Time) > Date.parse("1990-01-01") &&
        Date.parse(x.Time) < Date.parse("2014-01-01")
    );
    seaData.map(x => (x.Time = x.Time.substring(0, 4)));

    // Importing temperature json data and filtering on year
    const temperatureData = tempjsonData;
    const yearFilteredTempData = temperatureData.filter(
      x => x.Year > 1944 && x.Year < 2014
    );
    const tempData = yearFilteredTempData.filter(p => p.Source === "GISTEMP"); //only rows that have source GISTEMP

    // Setting state with all filtered data
    this.setState({
      globalTemp: tempData,
      CO2Emission: emissionData,
      iceVolume: glacierData,
      seaLevel: seaData
    });
  }

  // Createting a reference for the menu bar 
  contextRef = createRef();
 

  render() {
    const content = this.state
      .textData; /* Saves this.state.textData in a constent */
    /*const [mapContent, setContent] = useState("");*/

    return (
      <div id="App" ref={this.contextRef}>
        <Header />
        <MenuBar context={this.contextRef} />
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
            <Co2Diagram
              CO2Emission={this.state.CO2Emission}
              textData={content.co2Popup}
              heading="What are CO2 Emissions Anyway?"
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
            <LineCharts
              CO2Emission={this.state.CO2Emission}
              globalTemp={this.state.globalTemp}
              textData={content.co2vsTempPopup}
              heading="Increased Emissions = Rising Temperature"
            />
          </div>
          <div className="section-pink" id="ice">
            <Container className="container main">
              <Row>
                <h2 className="heading separate">
                  <span>What Happens When the Earth Gets Warmer?</span>
                </h2>
              </Row>
            </Container>
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
          <div className="section-white" id="sea">
            <AreaCharts
              seaLevel={this.state.seaLevel}
              iceVolume={this.state.iceVolume}
              textData={content.icevsSeaPopup}
              heading="When The Glaciers Melt... Sea Levels Rise"
            />

            <RenderMap />
          </div>
          <div className="section-pink" id="tips">
            <CompareHabits
              subHeading={content.habits.subheading}
              text={content.habits.info1}
              heading=" What You Can Do To Impact the Climate"
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
