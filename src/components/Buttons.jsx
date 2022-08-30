import React from "react";
import "../styles/Buttons.css";

const Buttons = ({ name, clickFunc }) => {
  return (
    <button className="btn" onClick={clickFunc}>
      {name}
    </button>
  );
};

export default Buttons;
