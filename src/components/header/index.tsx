import React from "react";
import styled from "styled-components";
import BrandImage from "@/components/brand-image";
import NavBar from "@/components/nav-bar";
import Button from "@/components/button";
import { Theme } from "@/types/theme";

const Container = styled.div`
  width: 100%;
  display: flex;
  box-shadow: 4px 8px 40px rgba(227, 230, 234, 0.3);
  align-items: center;
  margin-bottom: 40px;
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
    margin-left: 1rem;
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

export default function Header() {
  return (
    <Container>
      <Content>
        <BrandImage />
        <NavBar />
        <RightContainer>
          <LinkButton href="#">Sign In</LinkButton>
          <Button>Sign Up</Button>
        </RightContainer>
      </Content>
    </Container>
  );
}
