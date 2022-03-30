import React from "react";
import { useState } from "react";

const Places = ({ onAdd, placement }) => {
  const [location, setLocation] = useState("");
  const [locArriveTime, setLocArriveTime] = useState(0);
  const [locDepTime, setDepTime] = useState(0);

  const onSubmit = (e) => {
    // prevents from rendering on the page
    e.preventDefault();
    if (!location || !locArriveTime) {
      alert("please add valid address");
      return;
    } // how should I pass this information?
    onAdd({ loc: location, locDep_Time: locDepTime });
    // do not want to clear this state until everythign is filled out
  };

  return (
    <form>
      <div className="formContainer">
        <label className="placesLabel">{placement} Stop</label>
        <input
          className="inputFields"
          type="text"
          placeholder="first place you go to"
          value={location}
          onChange={(e) => {
            setLocation(e.target.value);
          }}
        />
        <label className="labelFields">Arrival Time</label>
        <input
          className="labelFields"
          type="time"
          placeholder="time you arrive"
          value={locArriveTime}
          onChange={(e) => {
            setLocArriveTime(e.target.value);
          }}
        />
        <label className="labelFields">Departure Time</label>
        <input
          className="inputFields"
          type="time"
          placeholder="time you leave"
          value={locDepTime}
          onChange={(e) => {
            setDepTime(e.target.value);
          }}
        />
        <div className="checkBox">
          <label htmlFor="complete">complete!</label>
          <input
            type="checkbox"
            onClick={(e) => {
              onSubmit(e);
            }}
          />
        </div>
      </div>
    </form>
  );
};

export default Places;
