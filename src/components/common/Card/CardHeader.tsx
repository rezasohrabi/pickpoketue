import { HTMLAttributes, ReactElement } from 'react';
import styled from 'styled-components';

export const StyledCardHeader = styled.div`
  background: rgba(255, 255, 255, 0.7);
  box-shadow: 0px 3px 8px -1px rgb(50 50 71 / 5%),
    0px 0px 1px rgb(12 26 75 / 24%);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {}
export default function CardHeader({
  children,
  ...otherProps
}: CardHeaderProps): ReactElement {
  return (
    <>
      <StyledCardHeader {...otherProps}>{children}</StyledCardHeader>
    </>
  );
}
