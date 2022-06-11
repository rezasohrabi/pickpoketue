import { ReactElement } from 'react';
import {
  Column,
  AuthorFullName,
  AuthorImage,
  LikeCount,
  DisLikeCount,
  AnswerText,
  AnswerItemActions,
} from './styles';
import {
  Card,
  CardHeader,
  CardBody,
  DateAndTime,
  SvgIcon,
  Button,
} from 'components';
import { DislikeIcon, LikeIcon } from 'assets';
import { formatToPersianNumber } from 'utils';
import { IAnswer } from 'types';
import { useAppDispatch } from 'store';
import { dislikeAnswer, likeAnswerById } from 'store/question/actions';

export interface AnswerItemProps extends IAnswer {}

export default function AnswerItem(answer: AnswerItemProps): ReactElement {
  const dispatch = useAppDispatch();

  const handleAnswerLike = () => {
    dispatch(likeAnswerById(answer));
  };

  const handleAnswerDislike = () => {
    dispatch(dislikeAnswer(answer));
  };

  const { authorImage, fullName, text, date, time, likeCount, dislikeCount } =
    answer;

  return (
    <Card>
      <CardHeader>
        <Column>
          <AuthorImage icon={authorImage} />
          <AuthorFullName>{fullName}</AuthorFullName>
        </Column>
        <Column>
          <DateAndTime date={date} time={time} />
          <LikeCount>
            <SvgIcon icon={LikeIcon} />
            {formatToPersianNumber(String(likeCount))}
          </LikeCount>
          <DisLikeCount>
            <SvgIcon icon={DislikeIcon} />
            {formatToPersianNumber(String(dislikeCount))}
          </DisLikeCount>
        </Column>
      </CardHeader>
      <CardBody>
        <AnswerText>{text}</AnswerText>
      </CardBody>
      <AnswerItemActions>
        <Button variant='outline' color='success' onClick={handleAnswerLike}>
          <SvgIcon icon={LikeIcon} />
          پاسخ خوب بود
        </Button>
        <Button variant='outline' color='error' onClick={handleAnswerDislike}>
          <SvgIcon icon={DislikeIcon} />
          پاسخ خوب نبود
        </Button>
      </AnswerItemActions>
    </Card>
  );
}
