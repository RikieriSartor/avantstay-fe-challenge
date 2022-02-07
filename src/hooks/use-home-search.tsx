import apolloClient from "@/services/apollo";
import { Home } from "@/types/home";
import { Region } from "@/types/region";
import { gql } from "@apollo/client";
import { useRouter } from "next/router";
import React, {
  createContext,
  useState,
  useContext,
  useCallback,
  useEffect,
} from "react";

type HomeSearchResult = {
  count: number;
  results: Home[];
};

interface IHomeSearchContextStateProps {
  data?: HomeSearchResult;
  regions?: Region[];
  loading: boolean;
  hasEndingResults: boolean;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

const HomeSearchContext = createContext<IHomeSearchContextStateProps>(
  {} as IHomeSearchContextStateProps
);

export function useHomeSearch(): IHomeSearchContextStateProps {
  const context = useContext(HomeSearchContext);

  if (!context) {
    throw new Error("useHomeSearch must be used within an HomeSearchProvider");
  }

  return context;
}

const PAGE_SIZE = 10;

export const HomeSearchProvider = ({
  regions,
  children,
}: {
  regions: Region[];
  children: React.ReactNode;
}) => {
  const router = useRouter();
  const { order, guests, coupon, regionName, endDate, startDate } =
    router.query;

  const [data, setData] = useState<HomeSearchResult>();
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasEndingResults, setHasEndingResults] = useState(false);

  const regionID =
    regions && regionName
      ? regions.find((region: Region) => region.name === regionName)?.id
      : "";

  const fetchData = useCallback(async () => {
    try {
      if (currentPage === 1) setLoading(true);

      const { data: homeData } = await apolloClient.query({
        query: GET_HOMES,
        variables: {
          page: currentPage,
          order: order || "RELEVANCE",
          guests: Number(guests || 1),
          region: regionID,
          pageSize: PAGE_SIZE,
          period: {
            checkIn: startDate || "",
            checkOut: endDate || "",
          },
        },
      });

      if (!homeData.homes.results.length) {
        if (data?.results.length && regionName !== data.results[0].regionName) {
          setData({ count: 0, results: [] });
        }
        setHasEndingResults(true);
        setLoading(false);
        return;
      }

      if (currentPage === 1) {
        setData(homeData.homes);
      } else {
        setData((prevValue) => ({
          count: prevValue?.count || 0,
          results: [...(prevValue?.results || []), ...homeData.homes.results],
        }));
      }

      setHasEndingResults(false);
      setLoading(false);
    } catch (error: any) {
      console.error(error);
      setData({ count: 0, results: [] });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, order, guests, regionID, startDate, endDate, regionName]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <HomeSearchContext.Provider
      value={{
        data,
        loading,
        regions,
        hasEndingResults,
        currentPage,
        setCurrentPage,
      }}
    >
      {children}
    </HomeSearchContext.Provider>
  );
};

const GET_HOMES = gql`
  query GetHomes(
    $page: Int
    $order: HomesOrder!
    $region: UUID
    $period: BookingPeriod
    $guests: Int!
    $pageSize: Int!
  ) {
    homes(
      page: $page

      order: $order
      region: $region
      period: $period
      guests: $guests
      pageSize: $pageSize
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
