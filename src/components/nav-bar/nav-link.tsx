import { Theme } from "@/types/theme";
import { useRouter } from "next/router";
import React from "react";
import styled, { css } from "styled-components";

interface INavLinkProps extends React.HtmlHTMLAttributes<HTMLAnchorElement> {
  href: string;
  label: string;
}

const Container = styled.li`
  height: 24px;
  display: relative;
  align-items: center;
`;

const Decorator = styled.div`
  width: 24px;
  height: 1px;
  background-color: ${({ theme }) => theme.palette.secondary.main};

  left: calc(50% - 10px);
  bottom: -7px;
  position: relative;
`;

interface IAnchorProps extends React.HtmlHTMLAttributes<HTMLAnchorElement> {
  isActive: boolean;
}

const Anchor = styled.a<IAnchorProps>`
  color: ${({ theme }) => theme.palette.primary.main};
  font-size: 1rem;
  line-height: 142%;
  text-decoration: none;

  &:hover {
    color: ${({ theme }: { theme: Theme }) => theme.palette.secondary.main};
  }

  div {
    display: none;
  }

  &:active {
    div {
      display: block;
    }
  }

  ${({ isActive }) =>
    isActive &&
    css`
      color: ${({ theme }: { theme: Theme }) => theme.palette.secondary.main};

      div {
        display: block;
      }
    `}

  transition: 200ms;
`;

export default function NavLink({ href, label }: INavLinkProps) {
  const router = useRouter();
  const isActive = router.pathname === href;

  return (
    <Anchor href={href} isActive={isActive}>
      <Container>
        {label}
        <Decorator />
      </Container>
    </Anchor>
  );
}
