import apolloClient from "@/services/apollo";
import GlobalStyle from "@/styles/globals";
import "@/styles/globals.css";
import { defaultTheme } from "@/styles/theme";
import { ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ApolloProvider client={apolloClient}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ApolloProvider>
    </ThemeProvider>
  );
}

export default MyApp;
