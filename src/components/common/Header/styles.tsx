import styled from 'styled-components';

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

export const StyledButton = styled.button`
  border-radius: 6px;
  background-color: #199da3;
  border: none;
  outline: none;
  user-select: none;
  cursor: pointer;
  color: #fff;
  display: flex;
  align-items: center;
  padding: 10px 21px;
  font-weight: 700;
  font-size: 12px;
  line-height: 20px;
  margin-left: 2.5em;
`;

export const StyledPlusIcon = styled.img`
  margin-left: 13px;
`;

export const AvatarWrapper = styled.div`
  display: flex;
`;

export const Avatar = styled.img`
  border-radius: 50%;
`;

export const StyledCaretIcon = styled.img`
  margin-right: 19px;
`;

export const DropDownButton = styled.button`
  margin-right: 12px;
  border: none;
  background: transparent;
`;
