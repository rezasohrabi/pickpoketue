import React, { ReactElement } from 'react';
import {
  Column,
  QuestionerImage,
  QuestionTitle,
  AnswerCount,
  QuestionText,
  QuestionDetailLink,
} from './styles';
import { AnswerIcon } from 'assets/icons';
import { Card, CardHeader, CardBody, DateAndTime, SvgIcon } from 'components';
import { IQuestion } from 'types';

export interface QuestionItemProps extends IQuestion {}

export default function QuestionItem({
  id,
  questionerImage,
  title,
  date,
  time,
  answerCount,
  text,
}: QuestionItemProps): ReactElement {
  return (
    <Card>
      <CardHeader>
        <Column>
          <QuestionerImage src={questionerImage} />
          <QuestionTitle>{title}</QuestionTitle>
        </Column>
        <Column>
          <DateAndTime date={date} time={time} />
          <AnswerCount>
            <SvgIcon icon={AnswerIcon} alt='' />
            {answerCount}
          </AnswerCount>
        </Column>
      </CardHeader>
      <CardBody>
        <QuestionText>{text}</QuestionText>
        <QuestionDetailLink to={`/${id}`}>مشاهده جزییات</QuestionDetailLink>
      </CardBody>
    </Card>
  );
}
