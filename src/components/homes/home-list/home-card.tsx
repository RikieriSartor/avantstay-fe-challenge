import React, { useCallback, useEffect, useState } from "react";
import Text from "@/components/text";
import { Home } from "@/types/home";
import { Box, Flex } from "rebass";
import Icon from "@/components/icon";
import HomeCarousel from "../home-carousel";
import { useRouter } from "next/router";
import { gql } from "@apollo/client";
import apolloClient from "@/services/apollo";
import Skeleton from "@/components/skeleton";

interface IHomeCardProps {
  home: Home;
}

const HomeCard = ({ home }: IHomeCardProps) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [homesPricing, setHomesPricing] = useState({
    total: 0,
    homeId: "",
    numberOfNights: 0,
  });

  const coupon = router.query?.coupon || "";
  const endDate = router.query?.endDate || "";
  const startDate = router.query?.startDate || "";

  const fetchPricing = useCallback(async () => {
    setIsLoading(true);

    const { data } = await apolloClient.query({
      query: HOMES_PRICING,
      variables: {
        ids: [home.id],
        coupon: coupon,
        period: {
          checkIn: startDate,
          checkOut: endDate,
        },
      },
    });

    setHomesPricing(data.homesPricing[0]);
    setIsLoading(false);
  }, [coupon, endDate, home.id, startDate]);

  useEffect(() => {
    if (startDate && endDate) {
      fetchPricing();
    }
  }, [endDate, fetchPricing, startDate]);

  return (
    <Flex width="100%" height="100%">
      <HomeCarousel photos={home.photos} />

      <Flex ml="30px" justifyContent="center" flexDirection="column">
        <Text fontSize="12px" lineHeight="122%">
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
          mt="8px"
          fontSize="19px"
          lineHeight="114%"
          fontWeight={600}
          fontFamily="SangBleu Sunrise"
        >
          {home.title}
        </Text>

        <Flex mt="16px" width={1}>
          <Text mr="16px" fontSize={12} opacity={0.4}>
            <Icon mx="-5px" my="-7px" pr="6px" src="/assets/rooms.svg" />
            {home.bedsCount} Bedrooms
          </Text>

          <Text mr="16px" fontSize={12} opacity={0.4}>
            <Icon my="-6px" mx="-3px" pr="6px" src="/assets/bath.svg" />
            {home.bathroomsCount} Bathrooms
          </Text>

          {home.hasPool && (
            <Text mr="16px" fontSize={12} opacity={0.4}>
              <Icon my="-7px" mx="-6px" pr="6px" src="/assets/pool.svg" />
              Pool
            </Text>
          )}

          <Text mr="16px" fontSize={12} opacity={0.4}>
            <Icon my="-7px" mx="-6px" pr="6px" src="/assets/user.svg" />
            {home.maxOccupancy} Guests
          </Text>
        </Flex>

        {!(startDate && endDate) ? (
          <Flex mt="30px">
            <Box width={1}>
              <Text fontSize={12} opacity={0.4} lineHeight="122%">
                <Icon mx="-4px" my="-3px" pr="6px" src="/assets/low.svg" />
                Budget Season
              </Text>
              <Text
                mt="4px"
                fontSize="20px"
                fontWeight={600}
                whiteSpace="nowrap"
                lineHeight="110%"
              >
                ${home.seasonPricing.lowSeason.minPrice} - $
                {home.seasonPricing.lowSeason.maxPrice}
              </Text>
              <Text mt="0px" fontSize={12} opacity={0.4}>
                per night
              </Text>
            </Box>

            <Box width={1}>
              <Text fontSize={12} opacity={0.4} lineHeight="122%">
                <Icon mx="-4px" my="-4px" pr="6px" src="/assets/high.svg" />
                Prime Season
              </Text>
              <Text
                mt="4px"
                fontSize="20px"
                fontWeight={600}
                whiteSpace="nowrap"
                lineHeight="110%"
              >
                ${home.seasonPricing.highSeason.minPrice} - $
                {home.seasonPricing.highSeason.maxPrice}
              </Text>
              <Text mt="0px" fontSize={12} opacity={0.4} lineHeight="142%">
                per night
              </Text>
            </Box>
          </Flex>
        ) : (
          <Flex mt="30px">
            {isLoading ? (
              <Box width={1}>
                <Text fontSize={12} lineHeight="122%">
                  <Skeleton width="74px" />
                </Text>
                <Text
                  mt="4px"
                  fontSize="20px"
                  fontWeight={600}
                  whiteSpace="nowrap"
                  lineHeight="110%"
                >
                  <Skeleton width="98px" height="20px" />
                </Text>
                <Text mt="4px" fontSize={12} lineHeight="142%">
                  <Skeleton width="45px" height="14px" />
                </Text>
              </Box>
            ) : (
              <Box width={1}>
                <Text fontSize={12} lineHeight="122%">
                  Total • {homesPricing.numberOfNights} nights
                </Text>
                <Text
                  mt="4px"
                  fontSize="20px"
                  fontWeight={600}
                  whiteSpace="nowrap"
                  lineHeight="110%"
                >
                  $ {homesPricing.total || "--"}
                </Text>
                <Text mt="0px" fontSize={12} opacity={0.4} lineHeight="142%">
                  ${" "}
                  {homesPricing.total > 0
                    ? Math.round(
                        Number(homesPricing.total) /
                          Number(homesPricing.numberOfNights)
                      )
                    : "--"}{" "}
                  per night
                </Text>
              </Box>
            )}
          </Flex>
        )}
      </Flex>
    </Flex>
  );
};

const HOMES_PRICING = gql`
  query HomesPricing($ids: [UUID]!, $period: BookingPeriod!, $coupon: String) {
    homesPricing(ids: $ids, period: $period, coupon: $coupon) {
      total
      homeId
      numberOfNights
    }
  }
`;

export default React.memo(HomeCard);
