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
export interface AnswerItemProps {
  id: string;
  authorImage: string;
  fullName: string;
  text: string;
  date: string;
  time: string;
  likeCount: number;
  dislikeCount: number;
}

export default function AnswerItem({
  id,
  authorImage,
  fullName,
  text,
  date,
  time,
  likeCount,
  dislikeCount,
}: AnswerItemProps): ReactElement {
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
        <Button variant='outline' color='success'>
          <SvgIcon icon={LikeIcon} />
          پاسخ خوب بود
        </Button>
        <Button variant='outline' color='error'>
          <SvgIcon icon={DislikeIcon} />
          پاسخ خوب نبود
        </Button>
      </AnswerItemActions>
    </Card>
  );
}
