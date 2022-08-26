import { createSlice } from "@reduxjs/toolkit";

const questionSlice = createSlice({
  name: "question",
  initialState: {
    question: "",
  },
  reducers: {
    getQuestion: (state, { payload }) => {
      state.question = payload;
    },
  },
});

export const questionReducer = questionSlice.reducer;

export const { getQuestion } = questionSlice.actions;

export const getQuestions = (state) => state.question.question;
