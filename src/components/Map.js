import React, { useEffect, useRef, useState } from "react";
// import { useState } from "react";

const Map = ({ center, zoom }) => {
  // console.log("this is center: ", center);
  // console.log("this is zoom: ", zoom);

  // const ref = useRef(HTMLDivElement);
  // const [map, setMap] = useState(null);

  // useEffect(() => {
  //   if (ref.current && !map) {
  //     setMap(new window.google.maps.Map(ref.current, { center, zoom }));
  //     console.log("this is center: ", center);
  //     console.log("this is zoom: ", zoom);
  //   }
  // }, [ref, map]);

  return <div className="Map" />;
};

export default Map;
