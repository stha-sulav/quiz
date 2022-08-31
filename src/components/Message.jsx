import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMsg, getMsgType, setMsg } from "../features/msgSlice";

const Message = () => {
  const msg = useSelector(getMsg);

  const msgType = useSelector(getMsgType);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log("msg component run");

    const timeout = setTimeout(() => {
      dispatch(setMsg({ msg: "", showMsg: false, msgType: "" }));
    }, 3000);

    return () => clearTimeout(timeout);
  }, [msg]);

  return <div className={`notification ${msgType ? msgType : ""}`}>{msg}</div>;
};

export default Message;
