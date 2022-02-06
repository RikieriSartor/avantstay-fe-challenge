import Page from "@/containers/page";
import { NextSeo } from "next-seo";
import React from "react";
import { HomeSearchProvider } from "@/hooks/use-home-search";
import HomePage from "@/components/homes/page";
import Header from "@/components/header";
import SearchBar from "@/components/homes/search-bar";
import { SearchParams } from "@/types/search";
import { gql } from "@apollo/client";
import apolloClient from "@/services/apollo";

const Homes = ({ query, params, regions }: SearchParams) => {
  return (
    <Page>
      <NextSeo
        title="AvantStay: Vacation Rentals, Beach Houses, Ski Resorts, Cabins, and
        Short Term Rentals"
        description="Travel with the people you love. Group travel has never been this easy - check out our homes and locations across the country."
      />

      <HomeSearchProvider regions={regions}>
        <Header>
          <SearchBar regions={regions} params={params} query={query} />
        </Header>

        <HomePage />
      </HomeSearchProvider>
    </Page>
  );
};

export default Homes;

export async function getServerSideProps(context: any) {
  const { data } = await apolloClient.query({
    query: gql`
      query GetRegions {
        regions {
          id
          name
          stateName
          stateCode
        }
      }
    `,
  });

  const { query, params } = context;

  return {
    props: {
      query,
      params,
      regions: data?.regions || [],
    },
  };
}
