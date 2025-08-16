import { ApolloClient, InMemoryCache } from "@apollo/client";

const createApolloClient = () => {
    return new ApolloClient({
        uri: "https://fleet-jennet-28.hasura.app/v1/graphql",
        cache: new InMemoryCache(),
    });
};

export default createApolloClient;