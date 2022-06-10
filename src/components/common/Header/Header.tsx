import React, { ReactElement } from 'react';
import { CaretDownIcon, PlusIcon, AvatarImage } from 'assets';
import {
  StyledHeader,
  StyledH1,
  HeaderLeftSide,
  StyledButton,
  StyledPlusIcon,
  AvatarWrapper,
  Avatar,
  DropDownButton,
  StyledCaretIcon,
} from './styles';
import { useModal } from 'hooks';
import { Modal } from '../Modal';

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
          this is modal
        </Modal>
        <StyledButton onClick={show}>
          <StyledPlusIcon src={PlusIcon} />
          سوال جدید
        </StyledButton>
        <AvatarWrapper>
          <Avatar src={AvatarImage} />
          <DropDownButton>
            مرضیه ابراهیمی
            <StyledCaretIcon src={CaretDownIcon} />
          </DropDownButton>
        </AvatarWrapper>
      </HeaderLeftSide>
    </StyledHeader>
  );
}
