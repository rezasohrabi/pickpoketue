import { HTMLAttributes, ReactElement } from 'react';
import styled from 'styled-components';

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  background: #f9f9f9;
  box-shadow: 0px 3px 8px -1px rgb(50 50 71 / 5%),
    0px 0px 1px rgb(12 26 75 / 24%);
  border-radius: 8px;
  margin: 20px 0;
  color: #222222;
  font-size: 12px;
  line-height: 24px;
`;

interface CardProps extends HTMLAttributes<HTMLDivElement> {}

export default function Card({
  children,
  ...otherProps
}: CardProps): ReactElement {
  return <StyledCard {...otherProps}>{children}</StyledCard>;
}
