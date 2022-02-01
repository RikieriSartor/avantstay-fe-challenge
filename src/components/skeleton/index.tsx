import React from "react";
import styled, { css } from "styled-components";

interface ISkeletonProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  width?: string;
  height?: string;
  isLoading?: boolean;
}

const SSkeleton = styled.div<ISkeletonProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: 2px;
  background-color: #f7f7f7;

  animation: pulse 1s ease-in-out infinite;
  background: linear-gradient(-90deg, #f0f0f0 0%, #f7f7f7 50%, #f0f0f0 100%);
  background-size: 400% 400%;

  @keyframes pulse {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: -135% 0%;
    }
  }
`;

export default function Skeleton({
  width = "130px",
  height = "17px",
  isLoading,
}: ISkeletonProps) {
  return <SSkeleton width={width} height={height} isLoading={isLoading} />;
}
