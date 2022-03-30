import React from "react";
// import { useState } from "react";

const DeleteButton = ({ deletePlaces }) => {
  //   [add, setAdd] = useState(0);
  //   [deleted, setDelete] = useState(0);

  //   const onClick = () => {};
  return (
    <>
      <button className="deleteButton" onClick={deletePlaces}>
        delete
      </button>
    </>
  );
};

export default DeleteButton;
