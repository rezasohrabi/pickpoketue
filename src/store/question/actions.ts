import { createAsyncThunk } from '@reduxjs/toolkit';
import { IAnswer, IQuestion } from 'types';
import { QuestionApi } from './services';

export const fetchAllQuestions = createAsyncThunk(
  'questions/fetchAll',
  async () => {
    const response = await QuestionApi.getAll();
    return response.data;
  }
);

export const fetchCurrentQuestion = createAsyncThunk(
  'question/fetchById',
  async (questionId: string) => {
    const response = await QuestionApi.getById(questionId);
    return response.data;
  }
);

export const fetchAnswersByQuestionId = createAsyncThunk(
  'questions/fetchAnswersByQuestionId',
  async (questionId: string) => {
    const response = await QuestionApi.getAnswersByQuestionId(questionId);
    return response.data;
  }
);

export const likeAnswerById = createAsyncThunk(
  'questions/likeAnswerById',
  async (answer: IAnswer) => {
    const response = await QuestionApi.likeAnswer(answer);
    return response.data;
  }
);

export const dislikeAnswer = createAsyncThunk(
  'questions/dislikeAnswer',
  async (answer: IAnswer) => {
    const response = await QuestionApi.dislikeAnswer(answer);
    return response.data;
  }
);

export const createQuestion = createAsyncThunk(
  'questions/createQuestion',
  async (question: IQuestion) => {
    const response = await QuestionApi.createQuestion(question);
    return response.data;
  }
);

export const addAnswer = createAsyncThunk(
  'questions/currentQuestion/addAnswer',
  async (obj: { answer: IAnswer; question: IQuestion | null }) => {
    const response = await Promise.all([
      QuestionApi.addAnswer(obj.answer),
      QuestionApi.increaseAnswerCountByOne(obj.question),
    ]);
    return { answer: response[0].data, question: response[1].data };
  }
);
