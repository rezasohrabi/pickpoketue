import {
  AreaHTMLAttributes,
  HTMLAttributes,
  ReactElement,
  TextareaHTMLAttributes,
} from 'react';
import styled from 'styled-components';

const StyledTextAreaLabel = styled.label`
  padding: 18px 20px 10px;
  font-size: 12px;
  line-height: 24px;
`;

const StyledTextArea = styled.textarea`
  resize: none;
  width: 100% !important;
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
  min-height: 164px;
`;

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

export default function TextArea({
  label,
  ...otherProps
}: TextAreaProps): ReactElement {
  return (
    <StyledTextAreaLabel>
      {label}
      <StyledTextArea {...otherProps} />
    </StyledTextAreaLabel>
  );
}
