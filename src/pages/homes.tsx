import SearchStats from "@/components/homes/search-stats";
import Main from "@/containers/main";
import Page from "@/containers/page";
import Text from "@/components/text";
import { NextSeo } from "next-seo";
import React, { useCallback, useEffect, useRef, useState } from "react";
import LoadingList from "@/components/homes/loading-list";
import Header from "@/components/header";
import SearchBar from "@/components/homes/search-bar";
import { gql } from "@apollo/client";
import HomeList from "@/components/homes/home-list";
import { Home } from "@/types/home";
import apolloClient from "@/services/apollo";
import styled from "styled-components";
import { Flex } from "rebass";
import NoResultsFound from "@/components/homes/no-results-found";

const LoadingIndicator = styled.div`
  margin: 55px 0 55px 0;
  padding: 5px 16px;
  background: #f7f7f7;
`;

export default function Homes() {
  const loaderRef = useRef(null);

  const [count, setCount] = useState(0);
  const [homes, setHomes] = useState<Home[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasEndingResults, setHasEndingResults] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "20px",
      threshold: 1.0,
    };

    const observer = new IntersectionObserver((entities) => {
      const target = entities[0];

      if (target.isIntersecting) {
        setCurrentPage((old) => old + 1);
      }
    }, options);

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }
  }, []);

  const fetchData = useCallback(async () => {
    const { data } = await apolloClient.query({
      query: GET_HOMES,
      variables: {
        page: currentPage,
        guests: 2,
        order: "PRICE_ASC", //PRICE_ASC, PRICE_DESC, RELEVANCE
      },
    });

    if (!data.homes.results.length) {
      setHasEndingResults(true);
      setLoading(false);
      return;
    }

    setCount(data.homes.count);
    setHomes((prevValue) => [...prevValue, ...data.homes.results]);
    setLoading(false);
  }, [currentPage]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <Page>
      <NextSeo
        title="AvantStay: Vacation Rentals, Beach Houses, Ski Resorts, Cabins, and
        Short Term Rentals"
        description="Travel with the people you love. Group travel has never been this easy - check out our homes and locations across the country."
      />

      <Header>
        <SearchBar />
      </Header>

      <Main>
        {(loading || homes.length) && (
          <>
            <SearchStats count={count} isLoading={loading} />

            {loading ? <LoadingList /> : <HomeList homes={homes} />}

            <Flex
              ref={loaderRef}
              width="100%"
              alignItems="center"
              justifyContent="center"
            >
              {!hasEndingResults && (
                <LoadingIndicator>
                  <Text fontSize="16px" color="#B3B3B3">
                    Loading more homes...
                  </Text>
                </LoadingIndicator>
              )}
            </Flex>
          </>
        )}

        {!loading && !homes.length && <NoResultsFound />}
      </Main>
    </Page>
  );
}

export const GET_HOMES = gql`
  query GetHomes(
    $page: Int
    $order: HomesOrder!
    $region: UUID
    $period: BookingPeriod
    $guests: Int!
  ) {
    homes(
      page: $page
      order: $order
      region: $region
      period: $period
      guests: $guests
    ) {
      count
      results {
        id
        title
        description

        photos {
          url
          listOrder
        }

        cityName
        stateName
        regionName

        hasPool
        bedsCount
        roomsCount
        maxOccupancy
        bathroomsCount

        seasonPricing {
          highSeason {
            minPrice
            maxPrice
          }
          lowSeason {
            minPrice
            maxPrice
          }
        }
      }
    }
  }
`;
