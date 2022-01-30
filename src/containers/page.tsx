import Header from "@/components/header";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Main = styled.main`
  width: 100%;
  height: 100%;
  max-width: 1200px;
`;

interface IPageProps {
  children: React.ReactNode;
}

export default function Page({ children }: IPageProps) {
  return (
    <Container>
      <Header />
      <Main>{children}</Main>
    </Container>
  );
}
