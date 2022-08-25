import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  score: 0,
  round: 0,
  question: "",
  answers: [],
  correctAnswer: "",
  difficulty: "easy",
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    getQuestion: (state, { payload }) => {
      state.question = payload;
      console.log(state.question);
    },

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
      console.log(state.answers, state.correctAnswer);
    },
  },
});

export const gameReducer = gameSlice.reducer;
export const { getData, getQuestion, getAnswers } = gameSlice.actions;

export const getRound = (state) => state.quiz.round;
export const getScore = (state) => state.quiz.score;
export const getDifficulty = (state) => state.quiz.difficulty;
export const getQuestions = (state) => state.quiz.question;
export const getShuffeldAnswers = (state) => state.quiz.answers;
export const getCorrectAnswer = (state) => state.quiz.correctAnswer;
