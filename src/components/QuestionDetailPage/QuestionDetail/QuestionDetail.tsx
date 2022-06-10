import { ReactElement } from 'react';
import { AnswerIcon } from 'assets';
import { formatToPersianNumber } from 'utils';
import { Card, CardHeader, CardBody, DateAndTime, SvgIcon } from 'components';
import {
  QuestionTitle,
  QuestionerImage,
  QuestionText,
  Column,
  AnswerCount,
} from './styles';

export interface QuestionItemProps {
  id: string;
  questionerImage: string;
  title: string;
  date: string;
  time: string;
  answerCount: number;
  text: string;
}

export default function QuestionDetail({
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
          <QuestionerImage icon={questionerImage} />
          <QuestionTitle>{title}</QuestionTitle>
        </Column>
        <Column>
          <DateAndTime date={date} time={time} />
          <AnswerCount>
            <SvgIcon icon={AnswerIcon} alt='' />
            {formatToPersianNumber(String(answerCount))}
          </AnswerCount>
        </Column>
      </CardHeader>
      <CardBody>
        <QuestionText>{text}</QuestionText>
      </CardBody>
    </Card>
  );
}
