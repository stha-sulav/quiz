import { createSlice } from "@reduxjs/toolkit";

const playerSlice = createSlice({
  name: "player",
  initialState: {
    playerName: "",
  },
  reducers: {
    setPlayerName: (state, { payload }) => {
      const { name } = payload;
      state.playerName = name;
    },
  },
});

export const playerReducer = playerSlice.reducer;

export const { setPlayerName } = playerSlice.actions;

export const getPlayerName = (state) => state.player.playerName;
