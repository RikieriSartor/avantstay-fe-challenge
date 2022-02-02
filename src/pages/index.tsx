import Page from "@/containers/page";
import type { NextPage } from "next";
import Head from "next/head";
import styled, { css } from "styled-components";
import Text from "@/components/text";
import SearchBar from "@/components/homes/search-bar";
import { Box, Flex } from "rebass";
import Button from "@/components/button";
import { Theme } from "@/types/theme";

const Container = styled.div`
  display: flex;

  width: 100%;
  height: 100vh;

  align-items: center;
  justify-content: center;

  background: linear-gradient(rgb(0, 0, 50, 0.1), rgb(0, 0, 0, 0.3)),
    url("https://imglite.avantstay.com/https%3A%2F%2Favantstay.com%2Fstatic%2Fmedia%2FphotoHeroSection.5abe88c0.jpg?height=1440&webp=true&width=2880");

  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const Logo = styled.img`
  top: 0;
  left: 0;
  position: absolute;
  padding: 24px;
`;

const LinkButton = styled.a`
  color: #fff;
  border: 2px solid #fff;
  padding: 8px 24px;
  background: rgba(0, 0, 0, 0.1);
  font-weight: 600;
  border-radius: 3px;
  text-decoration: none;

  &:hover {
    background: rgba(0, 0, 0, 0.4);
  }

  transition: 200ms;
`;

const Home: NextPage = () => {
  return (
    <Page>
      <Head>
        <title>
          AvantStay: Vacation Rentals, Beach Houses, Ski Resorts, Cabins, and
          Short Term Rentals
        </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <Logo src="/white-logo-text.svg" />

        <Box>
          <Text
            color="#fff"
            fontSize="54px"
            fontWeight={600}
            fontFamily="SangBleu Sunrise"
          >
            Go Together, Go Far
          </Text>

          <Text
            my="12px"
            color="#fff"
            fontSize="16px"
            textAlign="center"
            fontWeight={300}
          >
            Whether you’re gathering for a family retreat or celebrating a
            special <br />
            occasion with friends, our elevated homes and hospitality promise
            the <br />
            ultimate group travel experience.
          </Text>

          <Flex width={1} justifyContent="center" mt="24px">
            <LinkButton href="/homes">Start searching</LinkButton>
          </Flex>
        </Box>
      </Container>
    </Page>
  );
};

export default Home;
