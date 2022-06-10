import { ReactElement, HTMLAttributes } from 'react';
import styled from 'styled-components';

export const StyledCardBody = styled.div`
  display: flex;
  flex-direction: column;
`;

interface CardBodyProps extends HTMLAttributes<HTMLDivElement> {}

export default function CardBody({
  children,
  ...otherProps
}: CardBodyProps): ReactElement {
  return <StyledCardBody {...otherProps}>{children}</StyledCardBody>;
}
