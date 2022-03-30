import React from "react";
import { useState } from "react";

// onAdd is passing the form completed function down
const HomeBaseEnd = ({ onAdd }) => {
  const [ArrivalTimeHB, setArrivalTime] = useState(0);

  //onSubmit will be triggerd when HomeBase is completed
  // on submit passes the info into formCompleted
  const onSubmit = (e) => {
    // prevents from rendering on the page
    e.preventDefault();
    if (!ArrivalTimeHB) {
      alert("please add valid address");
      return;
    } // how should I pass this information?
    onAdd({ ArrivalTimeHB, setArrivalTime });
    // do not want to clear this state until everythign is filled out
  };
  return (
    <div className="scheduleContainer">
      <form className="formConatiner">
        <label className="labelFields">Back to Home Base</label>
        <label className="labelFields">Arrival Time</label>
        <input
          className="inputFields"
          type="time"
          placeholder="what time you are back home"
          value={departureTimeHB}
          onChange={(e) => {
            setDepartureTime(e.target.value);
          }}
        />
      </form>
    </div>
  );
};

export default HomeBaseEnd;
