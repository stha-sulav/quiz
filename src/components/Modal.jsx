import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Restart } from "../features/gameSlice";
import { getText, setModal } from "../features/modalSlice";
import "../styles/Modal.css";
import Buttons from "./Buttons";

const Modal = ({ show }) => {
  const dispatch = useDispatch();

  const text = useSelector(getText);

  const handleRestartAndPlay = () => {
    dispatch(Restart());
    dispatch(setModal());
  };

  const handleCancle = () => {
    dispatch(setModal());
  };

  return (
    <>
      <div className="overlay"></div>
      <div className="modal">
        <h3 className="details">{text}</h3>
        <div className="btn-container">
          {!show ? (
            <Buttons name={"play again"} clickFunc={handleRestartAndPlay} />
          ) : (
            <Buttons name={"Restart"} clickFunc={handleRestartAndPlay} />
          )}
          <Buttons name={"cancle"} clickFunc={handleCancle} />
        </div>
      </div>
    </>
  );
};

export default Modal;
