import React from "react";
import { useState, useEffect } from "react";
import Places from ".//Places.js";
import HomeBase from ".//HomeBase.js";
import AddButton from ".//AddButton.js";
import SubmitButton from ".//SubmitButton.js";
import Modal from ".//Modal.js";
import Map from ".//Map.js";
import DeleteButton from ".//DeleteButton.js";
import { Wrapper } from "@googlemaps/react-wrapper";

const Schedule = () => {
  const center = { lat: 40.712, lag: -47.0131 };
  const zoom = 13;

  const [entries, setEntries] = useState([]);
  const [places, setPlaces] = useState([
    <Places key="1st" placement="1st" onAdd={formInputs} />,
  ]);
  const [modal, setModal] = useState(false);
  // once form is completed we set the entries state

  let newEntry;

  const formInputs = (data) => {
    const id = Math.floor(Math.random() * 1000) + 1;
    // adding an id
    newEntry = { id, ...data };
    console.log("newEntry inside of formInput func:  ", newEntry);
    setEntries([...entries, newEntry]);
  };
  console.log("after setEntries called", entries);

  // add places function
  const addPlaces = () => {
    console.log("clicked");
    const positions = ["first", "2nd", "3rd", "4th", "5th", "6th"];
    setPlaces([
      ...places,
      <Places
        key={positions[places.length]}
        placement={positions[places.length]}
        onAdd={formInputs}
      />,
    ]);
  };

  // delete places function
  const deletePlaces = () => {
    console.log("clicked delete button");
    if (places.length > 1) {
      let copy = [...places];
      copy.pop();
      setPlaces([...places].filter((el, i) => i !== places.length - 1));
    }
  };

  return (
    <>
      <div className="outerContainer">
        <div className="scheduleMap">
          <div className="scheduleContainer">
            <HomeBase onAdd={formInputs} />
            {places}
            <AddButton addPlaces={addPlaces} />
            <DeleteButton
              deletePlaces={deletePlaces}
              className="deleteButton"
            />
            <SubmitButton className="submitButton" />
          </div>
          <Map />
        </div>
        <Modal />
      </div>
    </>
  );
};

export default Schedule;
