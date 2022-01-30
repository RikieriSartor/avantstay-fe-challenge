import React from "react";
import styled from "styled-components";
import BrandImage from "@/components/brand-image";
import NavBar from "@/components/nav-bar";

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

export default function Header() {
  return (
    <Container>
      <Content>
        <BrandImage />
        <NavBar />
        <RightContainer>
          <button>Sign In</button>
          <button>Sign Up</button>
        </RightContainer>
      </Content>
    </Container>
  );
}
