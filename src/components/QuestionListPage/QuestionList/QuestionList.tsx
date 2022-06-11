import { QuestionItem } from 'components/QuestionListPage/QuestionItem';
import { useAppSelector } from 'store';
import { selectAllQuestions } from 'store/question/selectors';
import styled from 'styled-components';

const StyledQuestionList = styled.div`
  margin: 32px 56px 60px;
`;

export default function QuestionList() {
  const questions = useAppSelector((state) => selectAllQuestions(state));

  return (
    <StyledQuestionList>
      {questions.map(
        ({ id, questionerImage, title, time, date, answerCount, text }) => (
          <QuestionItem
            key={id}
            id={id}
            questionerImage={questionerImage}
            title={title}
            time={time}
            date={date}
            answerCount={answerCount}
            text={text}
          />
        )
      )}
    </StyledQuestionList>
  );
}
