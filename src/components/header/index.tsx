/* eslint-disable @next/next/no-html-link-for-pages */
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import BrandImage from "@/components/brand-image";
import NavBar from "@/components/nav-bar";
import Button from "@/components/button";
import { Theme } from "@/types/theme";

interface IContainerProps {
  isSticked: boolean;
}

const Container = styled.div<IContainerProps>`
  z-index: 1;
  width: 100%;
  display: flex;
  position: ${({ isSticked }) => (isSticked ? "fixed" : "relative")};
  box-shadow: 4px 8px 40px rgba(227, 230, 234, 0.3);
  background: #fff;
  align-items: center;
  margin-bottom: 40px;
  flex-direction: column;
  justify-content: center;
`;

const Content = styled.nav`
  width: 100%;
  height: 40px;
  margin: 24px;
  display: flex;
  max-width: 1200px;
  align-items: center;
  justify-content: space-between;
`;

const RightContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;

  > * + * {
    margin-left: 20px;
  }
`;

const LinkButton = styled.a`
  color: ${({ theme }: { theme: Theme }) => theme.palette.primary.main};
  font-weight: 600;
  text-decoration: none;

  &:hover {
    color: ${({ theme }: { theme: Theme }) => theme.palette.secondary.main};
  }

  &:active {
    color: ${({ theme }: { theme: Theme }) => theme.palette.secondary.dark};
  }

  transition: all 200ms;
`;

export default function Header({ children }: { children?: React.ReactNode }) {
  const [isSticked, setIsSticked] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);

    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      setIsSticked(windowHeight >= 400);
    }
  };

  return (
    <Container isSticked={isSticked}>
      <Content>
        <a href="/">
          <BrandImage />
        </a>
        <NavBar />
        <RightContainer>
          <LinkButton href="#">Sign In</LinkButton>
          <Button>Sign Up</Button>
        </RightContainer>
      </Content>
      {children && <Content>{children}</Content>}
    </Container>
  );
}
