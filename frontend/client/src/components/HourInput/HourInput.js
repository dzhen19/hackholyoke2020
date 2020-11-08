import React, { useState } from "react";
import "./style.css";
import Slider from "@material-ui/core/Slider";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";

export default function HourInput(hour, cachedEnergy, updateEnergy) {
  const [energy, setEnergy] = useState(0);
  const handleChange = (e, newValue) => {
    updateEnergy(hour, newValue);
    setEnergy(newValue);
  };
  const timeCheck = (hour) => {
    var today = new Date();
    var h_now = today.getHours();
    if (h_now < parseInt(hour)) {
      return true;
    }
    return false;
  };
  const [expanded, setExpanded] = useState(false);
  const handleExpand = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
    console.log(panel);
  };

  return (
    <div>
      <Accordion
        disabled={timeCheck(hour)}
        expanded={expanded === hour}
        onChange={handleExpand(hour)}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <label>{hour <= 12 ? `${hour} AM` : `${hour % 12} PM`}</label>
        </AccordionSummary>
        <AccordionDetails style={{display:'block'}}>
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
          <div> 
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
