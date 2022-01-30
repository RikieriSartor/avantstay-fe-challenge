import { Theme } from "@/types/theme";
import React from "react";
import styled from "styled-components";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  kind?: "primary" | "secondary";
}

const SButton = styled.button<IButtonProps>`
  border: 2px solid
    ${({ theme }: { theme: Theme }) => theme.palette.primary.main};
  padding: 8px 24px;
  background: transparent;
  font-weight: 600;
  border-radius: 3px;

  &:hover {
    color: ${({ theme }: { theme: Theme }) => theme.palette.secondary.main};
    border: 2px solid
      ${({ theme }: { theme: Theme }) => theme.palette.secondary.main};
    cursor: pointer;
  }

  &:active {
    color: ${({ theme }: { theme: Theme }) => theme.palette.secondary.dark};
    border: 2px solid
      ${({ theme }: { theme: Theme }) => theme.palette.secondary.dark};
  }

  transition: 200ms;
`;

export default function Button({
  kind = "primary",
  children,
  ...props
}: IButtonProps) {
  return <SButton {...props}>{children}</SButton>;
}
