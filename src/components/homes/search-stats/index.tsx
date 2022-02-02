import { Theme } from "@/types/theme";
import React from "react";
import { Box } from "rebass";
import styled from "styled-components";

interface ISearchStatsProps {
  count?: number;
  isLoading: boolean;
}

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

const SearchStats = ({ count, isLoading }: ISearchStatsProps) => {
  return (
    <Box width="100%" mb="24px">
      <Headline>
        {isLoading ? "PLEASE WAIT" : "YOUR STAY IN ONE OF"}
        <Separator />
      </Headline>
      <Counter>
        <span>{isLoading ? "Loading" : count}</span> homes
      </Counter>
    </Box>
  );
};

export default React.memo(SearchStats);
