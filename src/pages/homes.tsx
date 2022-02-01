import SearchStats from "@/components/homes/search-stats";
import Main from "@/containers/main";
import Page from "@/containers/page";
import { NextSeo } from "next-seo";
import React from "react";
import LoadingList from "@/components/homes/loading-list";
import Header from "@/components/header";
import SearchBar from "@/components/homes/search-bar";
import { gql, useQuery } from "@apollo/client";
import HomeList from "@/components/homes/home-list";

export const GET_HOMES = gql`
  query GetHomes {
    homes {
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

export default function Homes() {
  const { loading, error, data } = useQuery(GET_HOMES);

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
        <SearchStats count={data?.homes?.count || 0} isLoading={loading} />

        {loading ? (
          <LoadingList />
        ) : (
          data && data.homes.results && <HomeList homes={data.homes.results} />
        )}
      </Main>
    </Page>
  );
}
