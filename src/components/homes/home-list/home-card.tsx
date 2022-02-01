/* eslint-disable @next/next/no-img-element */
import React from "react";
import styled from "styled-components";
import Text from "@/components/text";
import { Home } from "@/types/home";
import { Box, Flex } from "reflexbox";
import Icon from "@/components/icon";
import HomeCarousel from "../home-carousel";

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

interface IHomeCardProps {
  home: Home;
}

export default function HomeCard({ home }: IHomeCardProps) {
  return (
    <Container>
      <HomeCarousel photos={home.photos} />

      <RightBox>
        <Text fontSize={12}>
          {/* TODO: getColor function to use colors from default theme */}
          <Text color="#53C3D0">
            <Flex>
              {home.regionName}
              <Text mx="4px" color="#A3DFE6">
                •
              </Text>
              {home.cityName}, {home.stateName}
            </Flex>
          </Text>
        </Text>

        <Text
          mb="8px"
          fontSize={20}
          fontWeight={700}
          fontFamily="SangBleu Sunrise"
        >
          {home.title}
        </Text>

        <Flex width={1}>
          <Text mr="16px" fontSize={12} opacity={0.4}>
            <Icon mx="-5px" my="-7px" pr="6px" src="assets/rooms.svg" />
            {home.bedsCount} Bedrooms
          </Text>

          <Text mr="16px" fontSize={12} opacity={0.4}>
            <Icon my="-6px" mx="-3px" pr="6px" src="assets/bath.svg" />
            {home.bathroomsCount} Bathrooms
          </Text>

          {home.hasPool && (
            <Text mr="16px" fontSize={12} opacity={0.4}>
              <Icon my="-7px" mx="-6px" pr="6px" src="assets/pool.svg" />
              Pool
            </Text>
          )}

          <Text mr="16px" fontSize={12} opacity={0.4}>
            <Icon my="-7px" mx="-6px" pr="6px" src="assets/user.svg" />
            {home.maxOccupancy} Guests
          </Text>
        </Flex>

        <Separator />

        <Flex>
          <Box width={1}>
            <Text mb="4px" fontSize={12} opacity={0.4}>
              <Icon mx="-4px" my="-3px" pr="6px" src="assets/low.svg" />
              Budget Season
            </Text>
            <Text fontSize={20} fontWeight={700}>
              ${home.seasonPricing.lowSeason.minPrice} - $
              {home.seasonPricing.lowSeason.maxPrice}
            </Text>
            <Text fontSize={12} opacity={0.4}>
              per night
            </Text>
          </Box>

          <Box width={1}>
            <Text mb="4px" fontSize={12} opacity={0.4}>
              <Icon mx="-4px" my="-4px" pr="6px" src="assets/high.svg" />
              Prime Season
            </Text>
            <Text fontSize={20} fontWeight={600}>
              ${home.seasonPricing.highSeason.minPrice} - $
              {home.seasonPricing.highSeason.maxPrice}
            </Text>
            <Text fontSize={12} opacity={0.4}>
              per night
            </Text>
          </Box>
        </Flex>
      </RightBox>
    </Container>
  );
}