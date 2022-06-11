import React, { ReactElement, useRef } from 'react';
import { CaretDownIcon, PlusIcon, AvatarImage } from 'assets';
import {
  StyledHeader,
  StyledH1,
  HeaderLeftSide,
  StyledPlusIcon,
  AvatarWrapper,
  Avatar,
  DropDownButton,
  StyledCaretIcon,
} from './styles';
import { useModal } from 'hooks';
import { Modal, Button } from 'components';
import AddQuestionForm from './AddQuestionForm';
import { useAppDispatch } from 'store';
import { createQuestion } from 'store/question/actions';
import { randomTo, uniqueId } from 'utils/random';

interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps): ReactElement {
  const { isVisible, show, hide } = useModal();
  const dispatch = useAppDispatch();

  const questionText = useRef<string>('');
  const questionTitle = useRef<string>('');

  const handleCreateQuestion = () => {
    if (!questionText.current || !questionTitle.current) {
      throw new Error('Field is required');
    }
    dispatch(
      createQuestion({
        id: uniqueId(),
        text: questionText.current,
        answerCount: 0,
        date: '1400/03/21',
        questionerImage: `https://randomuser.me/api/portraits/${
          ['men', 'women'][randomTo(1)]
        }/${randomTo(100)}.jpg`,
        time: '12:25',
        title: questionTitle.current,
      })
    );
    hide();
  };
  return (
    <StyledHeader>
      <StyledH1>{title}</StyledH1>
      <HeaderLeftSide>
        <Modal
          isVisible={isVisible}
          hide={hide}
          title='ایجاد سوال جدید'
          onActionClick={handleCreateQuestion}
        >
          <AddQuestionForm
            onTextAreaChange={(e: any) =>
              (questionText.current = e.target.value)
            }
            onTextChange={(e: any) => (questionTitle.current = e.target.value)}
          />
        </Modal>
        <Button onClick={show}>
          <StyledPlusIcon icon={PlusIcon} />
          سوال جدید
        </Button>
        <AvatarWrapper>
          <Avatar icon={AvatarImage} />
          <DropDownButton>
            مرضیه ابراهیمی
            <StyledCaretIcon icon={CaretDownIcon} />
          </DropDownButton>
        </AvatarWrapper>
      </HeaderLeftSide>
    </StyledHeader>
  );
}
