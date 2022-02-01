import Header from "@/components/homes/header";
import SearchStats from "@/components/homes/search-stats";
import Main from "@/containers/main";
import Page from "@/containers/page";
import { NextSeo } from "next-seo";
import React from "react";
import LoadingList from "@/components/homes/loading-list";

export default function Homes() {
  const isLoading = true;

  return (
    <Page>
      <NextSeo
        title="AvantStay: Vacation Rentals, Beach Houses, Ski Resorts, Cabins, and
        Short Term Rentals"
        description="Travel with the people you love. Group travel has never been this easy - check out our homes and locations across the country."
      />

      <Header />

      <Main>
        <SearchStats count={32} isLoading={isLoading} />

        {isLoading ? <LoadingList /> : <>...</>}
      </Main>
    </Page>
  );
}
