import { ApolloClient, InMemoryCache } from "@apollo/client";

const API_URI = process.env.NEXT_PUBLIC_API_URI;

const apolloClient = new ApolloClient({
  uri: API_URI,
  cache: new InMemoryCache(),
});

export default apolloClient;
