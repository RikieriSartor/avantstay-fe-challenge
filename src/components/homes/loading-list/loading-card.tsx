import React from "react";
import Skeleton from "@/components/skeleton";
import Text from "@/components/text";
import { Box, Flex } from "rebass";

export default function LoadingCard() {
  return (
    <Flex width="100%" height="100%">
      <Skeleton width="390px" height="208px" />
      <Flex ml="30px" justifyContent="center" flexDirection="column">
        <Text fontSize="12px" lineHeight="122%">
          <Skeleton width="132px" />
        </Text>

        <Text
          mt="8px"
          fontSize="19px"
          lineHeight="114%"
          fontWeight={600}
          fontFamily="SangBleu Sunrise"
        >
          <Skeleton width="218px" height="28px" />
        </Text>

        <Flex mt="16px" width={1}>
          <Skeleton width="241px" />
        </Flex>

        <Flex mt="30px">
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
        </Flex>
      </Flex>
    </Flex>
  );
}
