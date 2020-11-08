import React, { useState, useEffect } from "react";
import GraphToday from "../components/graphToday";
import UserInput from "../components/UserInput/UserInput";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import axios from "axios";
import {
    RadialChart
} from "react-vis";

function Dashboard() {
  //data for state management -> object literal
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

  const updateEnergy = (key, value) => {
    state[key] = value;
    setState(state);
    setData(decode(state));
    console.log(state);
  };

  return (
    <div>
      <Container style={{marginTop:'2.5%'}}>
        <Row>
          <Col>{GraphToday(data)}</Col>
          <Col>
            {UserInput(updateEnergy, state)}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Dashboard;
