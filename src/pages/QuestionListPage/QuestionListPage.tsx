import React, { ReactElement, useEffect } from 'react';
import { QuestionList, Header } from 'components';
import { useAppDispatch } from 'store';
import { fetchAllQuestions } from 'store/question/actions';

export default function QuestionListPage(): ReactElement {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllQuestions());
  }, []);

  return (
    <>
      <Header title='لیست سوالات' />
      <QuestionList />
    </>
  );
}
