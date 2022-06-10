import { ReactElement, ImgHTMLAttributes } from 'react';
import styled from 'styled-components';

const StyledSvgIcon = styled.img`
  cursor: pointer;
`;

interface SvgIconProps extends ImgHTMLAttributes<HTMLElement> {
  icon: string;
}

export default function SvgIcon({
  icon,
  alt,
  ...otherProps
}: SvgIconProps): ReactElement {
  return <StyledSvgIcon src={icon} alt={alt} {...otherProps} />;
}
