import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMsg, getMsgType, setMsg } from "../features/msgSlice";
import "../styles/Message.css";

const Message = () => {
  const msg = useSelector(getMsg);

  const msgType = useSelector(getMsgType);

  const dispatch = useDispatch();

  useEffect(() => {
    const timeout = setTimeout(() => {
      dispatch(setMsg({ msg: "", showMsg: false, msgType: "" }));
    }, 3000);

    return () => clearTimeout(timeout);
  }, [msg]);

  return (
    <div className={`notification ${msgType ? msgType : ""}`}>
      <h3 className="msg-text">{msg}</h3>
    </div>
  );
};

export default Message;
