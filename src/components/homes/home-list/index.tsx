import { Home } from "@/types/home";
import React from "react";
import styled from "styled-components";
import HomeCard from "./home-card";
import Divider from "@/components/divider";

interface IHomeListProps {
  homes: Home[];
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const HomeList = ({ homes }: IHomeListProps) => {
  return (
    <Container>
      {homes &&
        homes.map((home) => (
          <>
            <HomeCard key={home.id} home={home} />
            {home.id !== homes[homes.length - 1].id && <Divider />}
          </>
        ))}
    </Container>
  );
};

export default React.memo(HomeList);
