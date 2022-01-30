import Page from "@/containers/page";
import { NextSeo } from "next-seo";
import React from "react";

export default function Homes() {
  return (
    <Page>
      <NextSeo
        title="AvantStay: Vacation Rentals, Beach Houses, Ski Resorts, Cabins, and
        Short Term Rentals"
        description="Travel with the people you love. Group travel has never been this easy - check out our homes and locations across the country."
      />

      <h2>Content here</h2>
    </Page>
  );
}
