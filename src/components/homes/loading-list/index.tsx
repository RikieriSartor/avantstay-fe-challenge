import Divider from "@/components/divider";
import React from "react";
import styled from "styled-components";
import LoadingCard from "./loading-card";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export default function LoadingList() {
  return (
    <Container>
      <LoadingCard />
      <Divider />
      <LoadingCard />
      <Divider />
      <LoadingCard />
    </Container>
  );
}
