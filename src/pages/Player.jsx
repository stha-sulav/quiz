import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Buttons from "../components/Buttons";
import { setMsg } from "../features/msgSlice";
import { getPlayerName, setPlayerName } from "../features/playerSlice";
import "../styles/Player.css";

const Player = () => {
  const dispatch = useDispatch();
  const playerName = useSelector(getPlayerName);

  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleClick = () => {
    if (name === "") {
      dispatch(
        setMsg({
          msg: "Player must enter their name.",
          showMsg: true,
          msgType: "error",
        })
      );
    }
    dispatch(setPlayerName({ name: name }));
  };

  return (
    <form className="name-form" onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        placeholder="Enter your name..."
        value={name}
        onChange={handleChange}
        className="player-name"
        autoFocus
      />
      <Buttons name={"Next"} clickFunc={handleClick} />
    </form>
  );
};

export default Player;
