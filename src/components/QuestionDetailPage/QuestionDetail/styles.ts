import { SvgIcon } from 'components';
import styled from 'styled-components';

export const QuestionTitle = styled.h3`
  font-weight: 700;
  font-size: 16px;
  display: flex;
  color: #222222;
`;

export const QuestionerImage = styled(SvgIcon)`
  width: 32px;
  height: 32px;
  border-radius: 8px;
  margin: 0 16px;
`;

export const QuestionTime = styled.div`
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

export const QuestionDate = styled.div`
  font-weight: 700;
  margin-left: 30px;
  & span:first-child {
    color: #777777;
    font-weight: 400;
  }
`;

export const AnswerCount = styled.div`
  display: flex;
  margin-left: 24px;
  font-weight: 700;
  & img {
    margin-left: 6px;
  }
`;

export const Column = styled.div`
  display: flex;
  align-items: center;
`;

export const QuestionText = styled.p`
  font-size: 14px;
  line-height: 20px;
  color: #222222;
  margin: 19px 16px 24px;
`;
