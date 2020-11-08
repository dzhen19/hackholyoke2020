import React, { useState, useEffect } from "react";
import GraphToday from "../components/graphToday";
import UserInput from "../components/UserInput/UserInput";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Calendar from "../components/calendar/calendar";
import Button from "@material-ui/core/Button";
import axios from "axios";

function Dashboard() {
  //data for state management -> object literal
  //proxy data from backend
  // useEffect(
  //     () => {axios.get('/hours').then(
  //         (res) => {
  //             const points = res.data.map((point)=>{
  //                 console.log(point)
  //                 return {
  //                     'x': point.hour,
  //                     'y': point.energy
  //                 }
  //             })
  //         }
  //     )}, [])
  const [timeline, setTimeline] = useState("today");
  const [state, setState] = useState({
    8: 0,
    9: 0,
    10: 10,
    11: 0,
    12: 5,
    13: 0,
    14: 0,
    15: 2,
    16: 0,
    17: 0,
  });

  const [stateWeek, setStateWeek] = useState({
    8: 5,
    9: 3,
    10: 10,
    11: 9,
    12: 5,
    13: 7,
    14: 8,
    15: 2,
    16: 0,
    17: 0,
  });

  const [allTime, setAllTime] = useState({
    8: 5,
    9: 3,
    10: 10,
    11: 9,
    12: 5,
    13: 7,
    14: 8,
    15: 2,
    16: 0,
    17: 0,
    18: 5,
    19: 3,
    20: 10,
    21: 9,
    22: 5,
    23: 7,
    24: 8,
    25: 2,
    26: 0,
    27: 0,
  });

  //dict to array conversion
  const decode = (state) => {
    const b = [];
    for (const key in state) {
      let newState = {};
      newState["x"] = parseInt(key);
      newState["y"] = parseInt(state[key]);
      b.push(newState);
    }
    return b;
  };

  //data for visualization purposes -> array of object literals
  const [data, setData] = useState(decode(state));

  const updateEnergy = (key, value) => {
    state[key] = value;
    setState(state);
    setData(decode(state));
    console.log(state);
  };

  const plot = () => {
    if (timeline == "today") {
      return GraphToday(data);
    } else if (timeline == "week") {
      return GraphToday(decode(stateWeek));
    } else {
      return GraphToday(decode(allTime));
    }
  };

  return (
    <div>
      <Container style={{ marginTop: "2.5%" }}>
        <Row>
          <Col>
            <h2>
              Your Energy Levels&nbsp;
              <Button
                onClick={() => setTimeline("today")}
                style={{
                  opacity: timeline == "today" ? "100%" : "25%",
                }}
                size="large"
                color="primary"
              >
                Today
              </Button>
              <Button
                onClick={() => setTimeline("week")}
                style={{
                  opacity: timeline == "week" ? "100%" : "25%",
                }}
                size="large"
                color="primary"
              >
                This Week
              </Button>
              <Button
                onClick={() => setTimeline("alltime")}
                style={{
                  opacity: timeline == "alltime" ? "100%" : "25%",
                }}
                size="large"
                color="primary"
              >
                All Time
              </Button>
            </h2>
            {plot()}
          </Col>
          <Col>{UserInput(updateEnergy, state)}</Col>
        </Row>
      </Container>
      <Calendar />
    </div>
  );
}

export default Dashboard;
