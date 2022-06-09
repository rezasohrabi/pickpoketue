import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledQuestionItem = styled.div`
  background: #f9f9f9;
  box-shadow: 0px 3px 8px -1px rgb(50 50 71 / 5%),
    0px 0px 1px rgb(12 26 75 / 24%);
  border-radius: 8px;
  margin: 20px 0;
  color: #222222;
  font-size: 12px;
  line-height: 24px;
`;

export const QuestionHeader = styled.div`
  background: rgba(255, 255, 255, 0.7);
  box-shadow: 0px 3px 8px -1px rgb(50 50 71 / 5%),
    0px 0px 1px rgb(12 26 75 / 24%);
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
`;

export const QuestionTitle = styled.h3`
  font-weight: 700;
  font-size: 16px;
  display: flex;
  color: #222222;
`;

export const QuestionerImage = styled.img`
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

export const QuestionBody = styled.div`
  display: flex;
  flex-direction: column;
`;

export const QuestionText = styled.p`
  font-size: 14px;
  line-height: 20px;
  color: #222222;
  margin: 19px 16px 24px;
`;

export const QuestionDetailLink = styled(Link)`
  background-color: #ffffff;
  border-radius: 6px;
  color: #199da3;
  margin: 0 auto 16px 16px;
  border: 1px solid #199da3;
  padding: 8px;
  text-decoration: none;
  line-height: 20px;
`;
