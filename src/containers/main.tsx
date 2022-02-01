import React from "react";
import styled from "styled-components";

const SMain = styled.main`
  width: 100%;
  height: 100%;
  max-width: 768px;
  margin-bottom: 48px;
`;

interface IMainProps {
  children: React.ReactNode;
}

export default function Main({ children }: IMainProps) {
  return <SMain>{children}</SMain>;
}
