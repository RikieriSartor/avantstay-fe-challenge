import React from "react";
import styled from "styled-components";
import Skeleton from "@/components/skeleton";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const RightBox = styled.div`
  display: flex;
  margin-left: 30px;
  flex-direction: column;
  justify-content: center;

  > * + * {
    margin-top: 4px;
  }
`;

const Separator = styled.div`
  height: 39px;
`;

export default function LoadingCard() {
  return (
    <Container>
      <Skeleton width="390px" height="208px" />
      <RightBox>
        <Skeleton width="132px" />
        <Skeleton width="218px" height="28px" />
        <Skeleton width="241px" />

        <Separator />

        <Skeleton width="74px" />
        <Skeleton width="98px" height="22px" />
        <Skeleton width="45px" />
      </RightBox>
    </Container>
  );
}
