import React, { ReactElement } from 'react';
import {
  StyledQuestionItem,
  QuestionHeader,
  Column,
  QuestionerImage,
  QuestionTitle,
  QuestionTime,
  QuestionDate,
  AnswerCount,
  QuestionBody,
  QuestionText,
  QuestionDetailLink,
} from './styles';
import { AnswerIcon } from 'assets/icons';

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
    <StyledQuestionItem>
      <QuestionHeader>
        <Column>
          <QuestionerImage src={questionerImage} />
          <QuestionTitle>{title}</QuestionTitle>
        </Column>
        <Column>
          <QuestionTime>
            <span> ساعت : </span>
            {time}
          </QuestionTime>
          <QuestionDate>
            <span>تاریخ : </span>
            {date}
          </QuestionDate>
          <AnswerCount>
            <img src={AnswerIcon} alt='' />
            {answerCount}
          </AnswerCount>
        </Column>
      </QuestionHeader>
      <QuestionBody>
        <QuestionText>{text}</QuestionText>
        <QuestionDetailLink to={`/${id}`}>مشاهده جزییات</QuestionDetailLink>
      </QuestionBody>
    </StyledQuestionItem>
  );
}
