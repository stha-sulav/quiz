import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  answers: [],
  correctAnswer: "",
};

const answerSlice = createSlice({
  name: "answers",
  initialState,
  reducers: {
    getAnswers: (state, { payload }) => {
      let tempArr = [...payload.incorrect_answers, payload.correct_answer];
      const shuffel = (arr) => {
        for (let i = 0; i < arr.length; i++) {
          const random = Math.floor(Math.random() * (i + 1));
          let temp = arr[i];
          arr[i] = arr[random];
          arr[random] = temp;
        }
        return arr;
      };

      state.answers = shuffel(tempArr);
      state.correctAnswer = payload.correct_answer;
    },
  },
});

export const answerReducer = answerSlice.reducer;

export const { getAnswers } = answerSlice.actions;

export const getShuffeldAnswers = (state) => state.answers.answers;
export const getCorrectAnswer = (state) => state.answers.correctAnswer;
