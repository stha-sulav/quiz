import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  score: 0,
  round: 0,
  difficulty: "easy",
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    Inc: (state, { payload }) => {
      state.score += payload.score;
      state.round += payload.round;
    },
  },
});

export const gameReducer = gameSlice.reducer;
export const { Inc } = gameSlice.actions;

export const getRound = (state) => state.quiz.round;
export const getScore = (state) => state.quiz.score;
export const getDifficulty = (state) => state.quiz.difficulty;
