import { Theme } from "@/types/theme";
import React from "react";
import styled from "styled-components";

interface ISearchStatsProps {
  count?: number;
  isLoading: boolean;
}

const Container = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 24px;
  flex-direction: column;
`;

const Headline = styled.div`
  color: ${({ theme }: { theme: Theme }) => theme.palette.secondary.main};
  display: flex;
  font-size: 0.8rem;
  font-weight: 600;
  align-items: center;
  text-transform: uppercase;
`;

const Separator = styled.div`
  width: 68px;
  height: 1px;
  margin-left: 7px;
  background-color: ${({ theme }: { theme: Theme }) =>
    theme.palette.secondary.main};
`;

const Counter = styled.div`
  display: flex;
  font-size: 2rem;
  font-weight: 300;

  span {
    font-weight: 600;
    margin-right: 6px;
  }
`;

export default function SearchStats({ count, isLoading }: ISearchStatsProps) {
  return (
    <Container>
      <Headline>
        {isLoading ? "PLEASE WAIT" : "YOUR STAY IN ONE OF"}
        <Separator />
      </Headline>
      <Counter>
        <span>{isLoading ? "Loading" : count}</span> homes
      </Counter>
    </Container>
  );
}
