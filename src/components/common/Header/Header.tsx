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

interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps): ReactElement {
  return (
    <StyledHeader>
      <StyledH1>{title}</StyledH1>
      <HeaderLeftSide>
        <StyledButton>
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
