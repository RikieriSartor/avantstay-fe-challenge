import Main from "@/containers/main";
import { useHomeSearch } from "@/hooks/use-home-search";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import SearchStats from "@/components/homes/search-stats";
import LoadingList from "@/components/homes/loading-list";
import HomeList from "@/components/homes/home-list";
import Text from "@/components/text";
import { Flex } from "rebass";
import NoResultsFound from "@/components/homes/no-results-found";

const LoadingIndicator = styled.div`
  margin: 55px 0 55px 0;
  padding: 5px 16px;
  background: #f7f7f7;
`;

export default function HomePage() {
  const loaderRef = useRef(null);

  const { data, loading, hasEndingResults, setCurrentPage } = useHomeSearch();

  useEffect(() => {
    const options = {
      root: null,
      threshold: 1.0,
      rootMargin: "20px",
    };

    const observer = new IntersectionObserver((entities) => {
      const target = entities[0];

      if (target.isIntersecting) {
        setCurrentPage((prevValue) => prevValue + 1);
      }
    }, options);

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }
  }, [setCurrentPage]);

  return (
    <Main>
      {(loading || data?.results.length) && (
        <>
          <SearchStats count={data?.count} isLoading={loading} />

          {loading ? <LoadingList /> : <HomeList homes={data?.results || []} />}

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

      {!loading && !data?.results.length && <NoResultsFound />}
    </Main>
  );
}
