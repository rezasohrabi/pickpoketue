export interface IQuestion {
  id: string;
  questionerImage: string;
  title: string;
  date: string;
  time: string;
  answerCount: number;
  text: string;
}

export interface IAnswer {
  questionId?: string;
  id: string;
  authorImage: string;
  fullName: string;
  text: string;
  date: string;
  time: string;
  likeCount: number;
  dislikeCount: number;
}
