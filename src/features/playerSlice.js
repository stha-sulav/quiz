import { createSlice } from "@reduxjs/toolkit";

const data = localStorage.getItem("playerScore");

const playerSlice = createSlice({
  name: "player",
  initialState: {
    playerName: "",
    players: data ? JSON.parse(data) : [],
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
      ].sort((a, b) => b.score - a.score);
      if (state.players.length > 5) {
        state.players.pop();
      }

      localStorage.setItem("playerScore", JSON.stringify(state.players));
    },
    removeScore: (state, { payload }) => {
      const { name } = payload;
      state.players = state.players.filter((item) => item.name !== name);
      localStorage.clear();
      localStorage.setItem("playerScore", JSON.stringify(state.players));
    },
  },
});

export const playerReducer = playerSlice.reducer;

export const { setPlayerName, setPlayers, removeScore } = playerSlice.actions;

export const getPlayerName = (state) => state.player.playerName;

export const getAllPlayers = (state) => state.player.players;
