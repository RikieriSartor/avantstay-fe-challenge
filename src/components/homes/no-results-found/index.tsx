import Button from "@/components/button";
import Image from "next/image";
import React from "react";
import { Box, Flex } from "rebass";
import styled from "styled-components";

const Message = styled.p`
  color: #505051;
  margin: 30px 0;
  font-size: 16px;
  line-height: 154%;
  text-align: center;
`;

export default function NoResultsFound() {
  return (
    <Flex
      width={1}
      height="calc(100vh - 300px)"
      alignItems="center"
      justifyContent="center"
    >
      <Box>
        <Flex width={1} alignItems="center" justifyContent="center">
          <Image
            src="/assets/satellite.svg"
            alt="Satellite"
            width="185px"
            height="173px"
          />
        </Flex>

        <Message>
          Oops! We haven’t found anything mathing your search.
          <br /> Try something else or reset the filters to see all $regionName
          homes.
        </Message>

        <Flex width={1} alignItems="center" justifyContent="center">
          <Button kind="secondary">See all $regioName homes</Button>
        </Flex>
      </Box>
    </Flex>
  );
}
