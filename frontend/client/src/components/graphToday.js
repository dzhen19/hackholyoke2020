import React, { useState, useEffect } from "react";
import Button from '@material-ui/core/Button';
import "../../node_modules/react-vis/dist/style.css";

import {
  XYPlot,
  LineSeries,
  VerticalBarSeries,
  VerticalGridLines,
  HorizontalGridLines,
  XAxis,
  Crosshair,
  YAxis,
} from "react-vis";

export default function GraphToday(data) {
  const [graphStyle, setGraphStyle] = useState("line");
  const [CH, setCH] = useState([]);
  const _onMouseLeave = () => {
    setCH([]);
  };

  const _onNearestX = (value, { index }) => {
    setCH([value]);
  };

  const plot = () => {
    if (graphStyle === "bar") {
      return (
        <VerticalBarSeries
          onNearestX={(datapoint, event) => {
            _onNearestX(datapoint, event);
          }}
          data={data}
          animation={'noWobble'}
        />
      );
    } else if (graphStyle === "line") {
      return (
        <LineSeries
          {...{ animation: { damping: 9, stiffness:300} }}
          onNearestX={(datapoint, event) => {
            _onNearestX(datapoint, event);
          }}
          curve={"curveMonotoneX"}
          data={data}
        />
      );
    }
  };

  return (
    <div className="App">
      <h1>Your Energy Levels Today</h1>
      <Button onClick={() => setGraphStyle("bar")}>bar</Button>
      <Button onClick={() => setGraphStyle("line")}>line</Button>
      <XYPlot onMouseLeave={_onMouseLeave} height={300} width={500}>
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis />
        <YAxis />
        {plot()}
        <Crosshair values={CH} />
      </XYPlot>
    </div>
  );
}
