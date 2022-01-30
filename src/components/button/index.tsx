import { Theme } from "@/types/theme";
import React from "react";
import styled, { css } from "styled-components";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  kind?: "primary" | "secondary";
}

const SButton = styled.button<IButtonProps>`
  padding: 8px 24px;
  background: transparent;
  font-weight: 600;
  border-radius: 3px;

  ${({ kind }) => css`
    color: ${({ theme }: { theme: Theme }) =>
      kind === "primary"
        ? theme.palette.primary.main
        : theme.palette.secondary.main};

    border: 2px solid
      ${({ theme }: { theme: Theme }) =>
        kind === "primary"
          ? theme.palette.primary.main
          : theme.palette.secondary.main};

    &:hover {
      color: ${({ theme }: { theme: Theme }) =>
        kind === "primary"
          ? theme.palette.secondary.main
          : theme.palette.primary.light};
      border: 2px solid
        ${({ theme }: { theme: Theme }) =>
          kind === "primary"
            ? theme.palette.secondary.main
            : theme.palette.primary.light};
      cursor: pointer;
    }

    &:active {
      color: ${({ theme }: { theme: Theme }) =>
        kind === "primary"
          ? theme.palette.secondary.dark
          : theme.palette.primary.main};
      border: 2px solid
        ${({ theme }: { theme: Theme }) =>
          kind === "primary"
            ? theme.palette.secondary.dark
            : theme.palette.primary.main};
    }
  `}

  transition: 200ms;
`;

export default function Button({
  kind = "primary",
  children,
  ...props
}: IButtonProps) {
  return (
    <SButton kind={kind} {...props}>
      {children}
    </SButton>
  );
}
