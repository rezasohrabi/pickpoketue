import { useAppSelector } from 'store';
import { selectCurrentQuestionAnswers } from 'store/question/selectors';
import styled from 'styled-components';
import { AnswerItem } from '../AnswerItem';
import { SectionHeader } from '../styles';

const StyledAnswerList = styled.div``;

export default function AnswerList() {
  const answers = useAppSelector((state) =>
    selectCurrentQuestionAnswers(state)
  );

  return (
    <StyledAnswerList>
      <SectionHeader>پاسخ ها</SectionHeader>
      {answers.map((answer) => (
        <AnswerItem key={answer.id} {...answer} />
      ))}
    </StyledAnswerList>
  );
}
