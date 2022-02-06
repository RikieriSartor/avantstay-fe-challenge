import React from "react";
import styled from "styled-components";
import {
  color,
  space,
  maxWidth,
  fontSize,
  textAlign,
  lineHeight,
  fontWeight,
  fontFamily,
  letterSpacing,
  TypographyProps,
} from "styled-system";
import { ColorProps, MaxWidthProps, SpaceProps } from "styled-system";

interface ITextProps
  extends Omit<TypographyProps, "fontStyle">,
    ColorProps,
    SpaceProps,
    MaxWidthProps {
  color?: string;
  whiteSpace?: string;
  children?: React.ReactNode;
  textTransform?: "none" | "capitalize" | "lowercase" | "uppercase";
}

const SText = styled.div<ITextProps>`
  align-items: center;
  text-transform: ${({ textTransform }) => textTransform};

  ${color};
  ${space};
  ${fontSize};
  ${maxWidth};
  ${textAlign};
  ${fontWeight};
  ${lineHeight};
  ${fontFamily};
  ${letterSpacing};

  ${({ whiteSpace }) => whiteSpace && `white-space: ${whiteSpace}`};
`;

const Text = ({ children, ...props }: ITextProps) => {
  return <SText {...props}>{children}</SText>;
};

export default React.memo(Text);
