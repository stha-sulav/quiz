import { createSlice } from "@reduxjs/toolkit";

const msgslice = createSlice({
  name: "msg",
  initialState: {
    msg: "",
    isMsgShown: false,
    type: "",
  },
  reducers: {
    setMsg: (state, { payload }) => {
      const { msg, showMsg, msgType } = payload;
      state.msg = msg;
      state.isMsgShown = showMsg;
      state.type = msgType;
    },
  },
});

export const msgReducer = msgslice.reducer;
export const { setMsg } = msgslice.actions;
export const getMsg = (state) => state.msg.msg;
export const isMsgShown = (state) => state.msg.isMsgShown;
export const getMsgType = (state) => state.msg.type;
