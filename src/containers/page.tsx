import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  min-width: 768px;
  min-heigth: 100vh;
  align-items: center;
  flex-direction: column;
`;

interface IPageProps {
  children: React.ReactNode;
}

export default function Page({ children }: IPageProps) {
  return <Container>{children}</Container>;
}
