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

export interface QuestionItemProps {
  id: string;
  questionerImage: string;
  title: string;
  date: string;
  time: string;
  answerCount: number;
  text: string;
}

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
