import React, { ReactElement } from 'react';
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

interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps): ReactElement {
  const { isVisible, show, hide } = useModal();
  return (
    <StyledHeader>
      <StyledH1>{title}</StyledH1>
      <HeaderLeftSide>
        <Modal isVisible={isVisible} hide={hide} title='ایجاد سوال جدید'>
          <AddQuestionForm />
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
