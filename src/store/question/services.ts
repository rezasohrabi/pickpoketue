import api from 'store/api';
import { IAnswer, IQuestion } from 'types';

export class QuestionApi {
  static getAll = () => {
    return api.get('/questions');
  };
  static getById = (questionId: string) => {
    return api.get(`/questions/${questionId}`);
  };
  static createQuestion = (question: IQuestion) => {
    return api.post(`/questions`, question);
  };
  static getAnswersByQuestionId = (questionId: string) => {
    return api.get(`/answers?questionId=${questionId}`);
  };
  static likeAnswer = (answer: IAnswer) => {
    return api.put(`/answers/${answer.id}`, {
      ...answer,
      likeCount: answer.likeCount + 1,
    });
  };
  static dislikeAnswer = (answer: IAnswer) => {
    return api.put(`/answers/${answer.id}`, {
      ...answer,
      dislikeCount: answer.dislikeCount + 1,
    });
  };
  static addAnswer = (answer: IAnswer) => {
    return api.post(`/answers`, answer);
  };
  static increaseAnswerCountByOne = (question: any) => {
    return api.put(`/questions/${question.id}`, {
      ...question,
      answerCount: question.answerCount + 1,
    });
  };
}
