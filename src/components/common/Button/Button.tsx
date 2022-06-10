import { ButtonHTMLAttributes, ReactElement } from 'react';
import styled, { css } from 'styled-components';

const getStylesByVariant = (props: any): any => {
  return {
    text: css`
      border: none;
      background-color: transparent;
      color: ${props.theme.colors[props.color]};
    `,
    outline: css`
      border: 1px solid ${props.theme.colors[props.color]};
      background-color: transparent;
      color: ${props.theme.colors[props.color]};
    `,
    fill: css`
      border: none;
      background-color: ${props.theme.colors[props.color]};
      color: #ffffff;
    `,
  };
};

const StyledButton = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  cursor: pointer;
  outline: none;
  user-select: none;
  border-radius: 6px;
  padding: 10px 21px;
  font-weight: 700;
  font-size: 12px;
  line-height: 20px;
  ${(props) => props.variant && getStylesByVariant(props)[props.variant]};
`;

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'outline' | 'fill' | 'text';
  color?: 'primary' | 'success' | 'error';
}

export default function Button({
  children,
  variant = 'fill',
  color = 'primary',
  ...props
}: ButtonProps): ReactElement {
  return (
    <StyledButton variant={variant} color={color} {...props}>
      {children}
    </StyledButton>
  );
}
