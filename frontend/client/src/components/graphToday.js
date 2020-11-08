import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import "../../node_modules/react-vis/dist/style.css";

import {
  XYPlot,
  LineSeries,
  AreaSeries,
  VerticalBarSeries,
  VerticalGridLines,
  HorizontalGridLines,
  XAxis,
  Crosshair,
  YAxis,
  GradientDefs,
} from "react-vis";

export default function GraphToday(data) {
  const [graphStyle, setGraphStyle] = useState("area");
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
          animation={"gentle"}
          color={'url(#CoolGradient)'}
        />
      );
    } else if (graphStyle === "line") {
      return (
        <LineSeries
          {...{ animation: { damping: 9, stiffness: 300 } }}
          onNearestX={(datapoint, event) => {
            _onNearestX(datapoint, event);
          }}
          curve={"curveMonotoneX"}
          data={data}
          animation={"gentle"}
          color={'url(#CoolGradient)'}
        />
      );
    }else if (graphStyle==='area'){
      return (
        <AreaSeries
          {...{ animation: { damping: 9, stiffness: 300 } }}
          onNearestX={(datapoint, event) => {
            _onNearestX(datapoint, event);
          }}
          curve={"curveMonotoneX"}
          data={data}
          animation={"gentle"}
          color={'url(#CoolGradient)'}
        />
      )
    }
  };

  return (
    <div className="App">
      <Button onClick={() => setGraphStyle("area")}>area</Button>
      <Button onClick={() => setGraphStyle("line")}>line</Button>
      <Button onClick={() => setGraphStyle("bar")}>bar</Button>
      <XYPlot onMouseLeave={_onMouseLeave} height={500} width={700}>
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis />
        <YAxis />
        <GradientDefs>
          <linearGradient id="CoolGradient" x1="0" x2="0.5" y1="0" y2="1">
            <stop offset="0%" stopColor="red" stopOpacity={0.4} />
            <stop offset="100%" stopColor="blue" stopOpacity={0.3} />
          </linearGradient>
        </GradientDefs>
        {plot()}
        <Crosshair values={CH} />
      </XYPlot>
    </div>
  );
}
