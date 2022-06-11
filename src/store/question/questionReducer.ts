import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { IAnswer, IQuestion } from 'types';
import {
  addAnswer,
  createQuestion,
  dislikeAnswer,
  fetchAllQuestions,
  fetchAnswersByQuestionId,
  fetchCurrentQuestion,
  likeAnswerById,
} from './actions';

interface QuestionReducerState {
  questions: IQuestion[];
  currentQuestion: IQuestion | null;
  answers: IAnswer[];
}

const initialState = {
  questions: [],
  currentQuestion: null,
  answers: [],
} as QuestionReducerState;

export default createReducer(initialState, (builder) => {
  builder
    .addCase(
      fetchAllQuestions.fulfilled,
      (state, action: PayloadAction<IQuestion[]>) => {
        state.questions = action.payload;
      }
    )
    .addCase(
      fetchCurrentQuestion.fulfilled,
      (state, action: PayloadAction<IQuestion>) => {
        state.currentQuestion = action.payload;
      }
    )
    .addCase(
      fetchAnswersByQuestionId.fulfilled,
      (state, action: PayloadAction<IAnswer[]>) => {
        state.answers = action.payload;
      }
    )
    .addCase(createQuestion.fulfilled, (state, action) => {
      state.questions.push(action.payload);
    })
    .addCase(
      likeAnswerById.fulfilled,
      (state, action: PayloadAction<{ id: string; likeCount: number }>) => {
        state.answers.forEach((answer) => {
          if (answer.id === action.payload.id) {
            answer.likeCount = action.payload.likeCount;
          }
        });
      }
    )
    .addCase(dislikeAnswer.fulfilled, (state, action) => {
      state.answers.forEach((answer) => {
        if (answer.id === action.payload.id) {
          answer.dislikeCount = action.payload.dislikeCount;
        }
      });
    })
    .addCase(
      addAnswer.fulfilled,
      (
        state,
        action: PayloadAction<{ answer: IAnswer; question: IQuestion }>
      ) => {
        state.answers.push(action.payload.answer);
        state.currentQuestion = action.payload.question;
      }
    );
});
