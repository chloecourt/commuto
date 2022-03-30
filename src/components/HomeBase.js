import React from "react";
import { useState } from "react";

// onAdd is passing the form completed function down
const HomeBase = ({ onAdd }) => {
  const [homeAddress, setHomeAdress] = useState("");
  const [departureTimeHB, setDepartureTime] = useState("");

  //onSubmit will be triggerd when HomeBase is completed
  // on submit passes the info into formCompleted
  const onSubmit = (e) => {
    // prevents from rendering on the page
    e.preventDefault();
    if (!homeAddress || !departureTimeHB) {
      alert("please add valid address");
      return;
    } // how should I pass this information?
    onAdd({ homeAdd: homeAddress, depart_TimeHB: departureTimeHB });
    // do not want to clear this state until everythign is filled out
  };
  return (
    <div>
      <form>
        <div className="formContainer">
          <label id="hbHeader" className="labelFields">
            Home Base
          </label>
          <input
            className="inputFields"
            type="text"
            placeholder="your home address"
            value={homeAddress}
            onChange={(e) => {
              setHomeAdress(e.target.value);
            }}
          />
          <label className="labelFields">Departure Time</label>
          <input
            className="inputFields"
            type="time"
            placeholder="time you leave"
            value={departureTimeHB}
            onChange={(e) => {
              setDepartureTime(e.target.value);
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
    </div>
  );
};

export default HomeBase;
