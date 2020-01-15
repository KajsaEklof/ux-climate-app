import React, { memo } from "react";

import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography,
  Marker
} from "react-simple-maps";

import data from "./MapData.json";

const geoUrl = data;

const rounded = num => {
  if (num > 1000000000) {
    return Math.round(num / 100000000) / 10 + "Bn";
  } else if (num > 1000000) {
    return Math.round(num / 100000) / 10 + "M";
  } else {
    return Math.round(num / 100) / 10 + "K";
  }
};

const markers = [
  { markerOffset: 15, name: "Brazil", coordinates: [-47.8825, -15.7942] },
  {
    markerOffset: 15,
    name: "United States of America",
    coordinates: [-97, 35]
  },
  {
    markerOffset: 15,
    name: "United Kingdom",
    coordinates: [-3, 55]
  },
  {
    markerOffset: 15,
    name: "Italy",
    coordinates: [14, 41]
  },
  {
    markerOffset: 15,
    name: "Spain",
    coordinates: [-3, 39]
  },
  {
    markerOffset: 15,
    name: "Egypt",
    coordinates: [30, 25]
  },
  {
    markerOffset: 15,
    name: "Netherlands",
    coordinates: [6, 52]
  },
  {
    markerOffset: 15,
    name: "India",
    coordinates: [80, 20]
  },
  {
    markerOffset: 15,
    name: "China",
    coordinates: [110, 30]
  },
  {
    markerOffset: 15,
    name: "Japan",
    coordinates: [137, 35]
  }
];

const MapChart = ({ setTooltipContent }) => {
  return (
    <>
      <ComposableMap data-tip="" projectionConfig={{ scale: 200 }}>
        <ZoomableGroup>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map(geo => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => {
                    const { NAME, POP_EST, DANGER } = geo.properties;
                    const inDanger = `${NAME} – Population: ${rounded(
                      POP_EST
                    )} – ${DANGER}`;
                    const notDanger = `${NAME} – Population: ${rounded(
                      POP_EST
                    )}`;
                    setTooltipContent(`${!DANGER ? notDanger : inDanger}`);
                  }}
                  onMouseLeave={() => {
                    setTooltipContent("");
                  }}
                  style={{
                    default: {
                      fill: "#D6D6DA",
                      outline: "none",
                      stroke: "#C4C4CA"
                    },
                    hover: {
                      fill: "#00A99D",
                      outline: "none"
                    },
                    pressed: {
                      fill: "#00A99D",
                      outline: "none"
                    }
                  }}
                />
              ))
            }
          </Geographies>
        </ZoomableGroup>
        {markers.map(({ name, coordinates, markerOffset }) => (
          <Marker key={name} coordinates={coordinates}>
            <g
              fill="none"
              stroke="#EF0E7C"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              transform="translate(-12, -24)"
            >
              <circle cx="12" cy="10" r="3" />
              <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
            </g>
          </Marker>
        ))}
      </ComposableMap>
    </>
  );
};

export default memo(MapChart);
