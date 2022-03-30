import React, { Component } from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import Schedule from ".//Schedule.js";
import Map from ".//Map.js";

const apiKey = "AIzaSyDMQK3-6MRo3dO1GHDU1_QOUl9pGkatUiw";
/*
const render = (status) => {
  switch (status) {
    case Status.LOADING:
      return <Spinner />;
    case Status.FAILURE:
      return <ErrorComponent />;
    case Status.SUCCESS:
      return <Map />;
  }
};
*/
const MainContainer = () => {
  return (
    <div className="mainFlex">
      <Schedule />
    </div>
  );
};

export default MainContainer;
