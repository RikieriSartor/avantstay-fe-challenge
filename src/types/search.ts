import { Region } from "@/types/region";

export type HomesOrder = "RELEVANCE" | "PRICE_DESC" | "PRICE_ASC";

export type SearchParams = {
  regions: Region[];
  query: {
    order?: string;
    guests?: number;
    coupon?: string;
    endDate?: string;
    startDate?: string;
  };
  params: {
    regionName?: string;
  };
};
