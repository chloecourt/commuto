import React from "react";
// import { useState } from "react";

const AddButton = ({ addPlaces }) => {
  //   [add, setAdd] = useState(0);
  //   [deleted, setDelete] = useState(0);

  //   const onClick = () => {};
  return (
    <>
      <button className="addButton" onClick={addPlaces}>
        {" "}
        add{" "}
      </button>
    </>
  );
};

export default AddButton;
