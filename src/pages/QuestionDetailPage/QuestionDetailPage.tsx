import React, { ReactElement, useEffect } from 'react';
import { Header } from 'components';
import styled from 'styled-components';
import { scrollToTop } from 'utils';
import { AddAnswerForm, AnswerList, QuestionDetail } from 'components';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'store';
import {
  fetchAnswersByQuestionId,
  fetchCurrentQuestion,
} from 'store/question/actions';
import { selectCurrentQuestion } from 'store/question/selectors';

const Main = styled.main`
  margin: 32px 56px 60px;
`;

export default function QuestionDetailPage(): ReactElement {
  const { questionId } = useParams();

  const dispatch = useAppDispatch();
  const currentQuestion = useAppSelector((state) =>
    selectCurrentQuestion(state)
  );

  useEffect(() => {
    scrollToTop();
    dispatch(fetchCurrentQuestion(String(questionId)));
  }, []);

  useEffect(() => {
    dispatch(fetchAnswersByQuestionId(String(questionId)));
  }, []);

  return (
    <>
      <Header title='جزییات سوال' />
      <Main>
        {currentQuestion && <QuestionDetail {...currentQuestion} />}
        <AnswerList />
        <AddAnswerForm />
      </Main>
    </>
  );
}
