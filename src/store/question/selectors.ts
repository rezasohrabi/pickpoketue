import { RootState } from 'store';

export const selectAllQuestions = (state: RootState) =>
  state.questionReducer.questions;

export const selectCurrentQuestion = (state: RootState) =>
  state.questionReducer.currentQuestion;

export const selectCurrentQuestionAnswers = (state: RootState) =>
  state.questionReducer.answers;
