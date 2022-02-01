import React from "react";
import styled from "styled-components";
import { space, SpaceProps } from "styled-system";

interface IIconProps extends SpaceProps {
  src: string;
}

const Img = styled.img<IIconProps>`
  ${space};
`;

export default function Icon({ src, ...props }: IIconProps) {
  return <Img alt="" src={src} {...props} />;
}
