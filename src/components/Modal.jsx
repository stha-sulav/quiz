import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getScore, Restart } from "../features/gameSlice";
import { getText, setModal } from "../features/modalSlice";
import { setMsg } from "../features/msgSlice";
import { setPlayers } from "../features/playerSlice";
import "../styles/Modal.css";
import Buttons from "./Buttons";

const Modal = ({ show }) => {
  const dispatch = useDispatch();
  const score = useSelector(getScore);
  const text = useSelector(getText);

  const handleRestartAndPlay = () => {
    dispatch(Restart());
    dispatch(setModal());
    dispatch(setPlayers({ score: score }));
    dispatch(setMsg({ showMsg: false }));
  };

  const handleCancel = () => {
    dispatch(setModal());
  };

  return (
    <>
      <div className="overlay"></div>
      <div className="modal">
        <div className="details">
          <h3 className="modal-title">Score: {score}</h3>
          <p className="modal-text">{text}</p>
        </div>
        <div className="btn-container">
          {!show ? (
            <Buttons name={"play again"} clickFunc={handleRestartAndPlay} />
          ) : (
            <Buttons name={"Restart"} clickFunc={handleRestartAndPlay} />
          )}
          <Buttons name={"cancel"} clickFunc={handleCancel} />
        </div>
      </div>
    </>
  );
};

export default Modal;
