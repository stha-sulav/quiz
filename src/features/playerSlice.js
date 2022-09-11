import { createSlice } from "@reduxjs/toolkit";

const playerSlice = createSlice({
  name: "player",
  initialState: {
    playerName: "",
    players: [],
  },
  reducers: {
    setPlayerName: (state, { payload }) => {
      const { name } = payload;
      state.playerName = name;
    },
    setPlayers: (state, { payload }) => {
      const { score } = payload;
      state.players = [
        ...state.players,
        {
          name: state.playerName,
          score: score,
        },
      ];
      console.log(state.players.name);
    },
  },
});

export const playerReducer = playerSlice.reducer;

export const { setPlayerName, setPlayers } = playerSlice.actions;

export const getPlayerName = (state) => state.player.playerName;

export const getAllPlayers = (state) => state.player.players;
