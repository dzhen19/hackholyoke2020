import React, { useState } from "react";
import ICAL from "ical.js";

export default function Calendar() {
  const [cal, setCal] = useState("");
  let fileReader;
  var jcalData;

  const handleFileRead = (e) => {
    const content = fileReader.result;
    const jcalData = ICAL.parse(content);
    const vcalendar = new ICAL.Component(jcalData);
    var vevent = vcalendar.getAllSubcomponents("vevent");
    const today = new Date();

    let startTime;
    let endTime;
    const eventsToday = [];
    for (e in vevent) {
      startTime = vevent[e].getFirstPropertyValue("dtstart")._time;
      if (
        startTime.year === today.getFullYear() &&
        startTime.month === today.getMonth() &&
        startTime.day === today.getDay()
      ) {
        endTime = vevent[e].getFirstPropertyValue("dtend")._time;
        eventsToday.push({start:startTime,end:endTime});
      }
    }
    console.log(eventsToday);

  };

  const handleFileChosen = (file) => {
    fileReader = new FileReader();
    fileReader.onloadend = handleFileRead;
    fileReader.readAsText(file);
  };

  //   var jcalData = ICAL.parse(cal);
  //   var vcalendar = new ICAL.Component(jcalData);
  //   var vevent = vcalendar.getFirstSubcomponent("vevent");
  //   var summary = vevent.getFirstPropertyValue("summary");

  return (
    <div>
      {/* <input
        type="file"
        id="avatar"
        name="avatar"
        accept="text/calendar"
        onChange={(e) => handleFileChosen(e.target.files[0])}
      /> */}
      {/* {summary} */}
    </div>
  );
}
