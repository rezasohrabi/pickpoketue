import { ReactElement } from 'react';
import styled from 'styled-components';
import { formatToPersianNumber } from 'utils';

export const Time = styled.div`
  border-left: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  padding-left: 12px;
  margin-left: 12px;
  font-weight: 700;
  & span:first-child {
    color: #777777;
    font-weight: 400;
  }
`;

export const Date = styled.div`
  font-weight: 700;
  margin-left: 30px;
  & span:first-child {
    color: #777777;
    font-weight: 400;
  }
`;

interface DateAndTimeProps {
  date: string;
  time: string;
}

export default function DateAndTime({
  date,
  time,
}: DateAndTimeProps): ReactElement {
  return (
    <>
      <Time>
        <span> ساعت : </span>
        {formatToPersianNumber(time)}
      </Time>
      <Date>
        <span>تاریخ : </span>
        {formatToPersianNumber(date)}
      </Date>
    </>
  );
}
