import { InputHTMLAttributes, ReactElement } from 'react';
import styled from 'styled-components';

const StyledTextInputLabel = styled.label`
  padding: 18px 20px 10px;
  font-size: 12px;
  line-height: 24px;
`;

const StyledTextInput = styled.input`
  width: 100%;
  background: #ffffff;
  border: 1px solid #eeeeee;
  border-radius: 6px;
  outline: none;
  margin-top: 14px;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  padding: 12px 16px;
  font-weight: 400;
`;

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export default function TextInput({
  label,
  ...otherProps
}: TextInputProps): ReactElement {
  return (
    <StyledTextInputLabel>
      {label}
      <StyledTextInput {...otherProps} />
    </StyledTextInputLabel>
  );
}
