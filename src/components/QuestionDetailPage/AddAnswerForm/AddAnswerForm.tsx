import { FormEvent, ReactElement, useRef } from 'react';
import styled from 'styled-components';
import { SectionHeader } from '../styles';
import { Button, TextArea } from 'components';
import { useAppDispatch, useAppSelector } from 'store';
import { addAnswer } from 'store/question/actions';
import { randomTo, uniqueId } from 'utils/random';
import { selectCurrentQuestion } from 'store/question/selectors';

const AddAnswerButton = styled(Button)`
  padding: 8px 71px;
  margin: 40px 0;
`;

export default function AddAnswerForm(): ReactElement {
  const answerText = useRef<string>('');
  const dispatch = useAppDispatch();
  const currentQuestion = useAppSelector((state) =>
    selectCurrentQuestion(state)
  );

  const handleAddAnswer = () => {
    if (!answerText.current) {
      throw new Error('AnswerText : Field is required');
    }
    dispatch(
      addAnswer({
        answer: {
          questionId: currentQuestion?.id || '',
          id: uniqueId(),
          text: answerText.current,
          date: '1400/03/21',
          authorImage: `https://randomuser.me/api/portraits/${
            ['men', 'women'][randomTo(2)]
          }/${randomTo(100)}.jpg`,
          time: '12:25',
          dislikeCount: 0,
          likeCount: 0,
          fullName: `${
            [
              'مهدی',
              'رضا',
              'مریم',
              'سهراب',
              'شمیم',
              'علی',
              'حسام',
              'فرشاد',
              'محمد',
              'نسترن',
              'فاطمه',
            ][randomTo(11)]
          } ${
            [
              'محمدی',
              'سماواتی',
              'سهرابی',
              'خاکپور',
              'مهدوی کیا',
              'وارسته',
              'رستمی',
              'خانلو',
              'احمدی',
              'ستوده',
              'طهماسب',
            ][randomTo(11)]
          }`,
        },
        question: currentQuestion,
      })
    );
  };

  return (
    <>
      <SectionHeader>پاسخ خود را ثبت کنید</SectionHeader>
      <TextArea
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
          (answerText.current = e.target.value)
        }
        label='پاسخ خود را بنویسید'
        placeholder='متن پاسخ ...'
      />
      <AddAnswerButton onClick={handleAddAnswer}>ارسال پاسخ</AddAnswerButton>
    </>
  );
}
