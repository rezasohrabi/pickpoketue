import React, { ReactElement } from 'react';
import { QuestionList, Header } from 'components';

export default function QuestionListPage(): ReactElement {
  return (
    <>
      <Header title='لیست سوالات' />
      <QuestionList />
    </>
  );
}
