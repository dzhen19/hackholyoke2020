import React, { useState } from "react";
import "./style.css";
import Slider from "@material-ui/core/Slider";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

export default function HourInput(hour, cachedEnergy, updateEnergy) {
  const [energy, setEnergy] = useState(0);
  const handleChange = (e, newValue) => {
    updateEnergy(hour, newValue);
    setEnergy(newValue);
  };
  const timeCheck = (hour) => {
    var today = new Date();
    var h_now = console.log(today.getHours());
    h_now = 11
    if(h_now<parseInt(hour)){
        return true
    }
    return false;
  };

  return (
    <div>
      <Accordion disabled={timeCheck(hour)}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <label>{hour}</label>
        </AccordionSummary>
        <AccordionDetails>
          <Slider
            defaultValue={cachedEnergy}
            aria-labelledby="discrete-slider"
            valueLabelDisplay="auto"
            step={1}
            marks
            min={1}
            max={10}
            onChange={handleChange}
          />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
