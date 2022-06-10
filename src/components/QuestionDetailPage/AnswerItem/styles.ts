import styled from 'styled-components';
import { SvgIcon } from 'components';

export const AuthorFullName = styled.h3`
  font-weight: 700;
  font-size: 16px;
  display: flex;
  color: #222222;
`;

export const AuthorImage = styled(SvgIcon)`
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

export const LikeCount = styled.div`
  display: flex;
  margin-right: 36px;
  & img {
    margin-left: 6px;
  }
`;

export const DisLikeCount = styled.div`
  display: flex;
  margin: 0 34px 0 24px;
  & img {
    margin-left: 6px;
  }
`;

export const Column = styled.div`
  display: flex;
  align-items: center;
  img {
  }
`;

export const AnswerText = styled.p`
  font-size: 14px;
  line-height: 20px;
  color: #222222;
  margin: 19px 16px 24px;
`;

export const AnswerItemActions = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0 0 16px 16px;
  & button:first-child {
    margin-left: 16px;
  }
  & button img {
    margin-left: 10px;
  }
`;
