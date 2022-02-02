import { Home } from "@/types/home";
import React from "react";
import HomeCard from "./home-card";
import Divider from "@/components/divider";
import { Box } from "rebass";

interface IHomeListProps {
  homes: Home[];
}

const HomeList = ({ homes }: IHomeListProps) => {
  return (
    <Box width={1}>
      {homes.length &&
        homes.map((home) => (
          <React.Fragment key={home.id}>
            <HomeCard home={home} />
            {home.id !== homes[homes.length - 1].id && <Divider />}
          </React.Fragment>
        ))}
    </Box>
  );
};

export default React.memo(HomeList);
