import styled from 'styled-components';
import { SvgIcon } from '../SvgIcon';

export const StyledHeader = styled.header`
  background: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3.5em;
  box-shadow: 0px 3px 50px -1px rgba(50, 50, 71, 0.05);
`;

export const StyledH1 = styled.h1`
  font-size: 1.5rem;
  margin: 1em 0;
  color: #222222;
`;

export const HeaderLeftSide = styled.div`
  display: flex;
`;

export const StyledPlusIcon = styled(SvgIcon)`
  margin-left: 13px;
`;

export const AvatarWrapper = styled.div`
  display: flex;
  margin-right: 2.5em;
`;

export const Avatar = styled(SvgIcon)`
  border-radius: 50%;
`;

export const StyledCaretIcon = styled(SvgIcon)`
  margin-right: 19px;
`;

export const DropDownButton = styled.button`
  margin-right: 12px;
  border: none;
  background: transparent;
`;
