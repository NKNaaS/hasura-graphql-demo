import "../styles/globals.css";
import type { AppProps } from "next/app";
import {
  createClient,
  defaultExchanges,
  Provider,
  subscriptionExchange,
} from "urql";
import { createClient as createWSClient, SubscribePayload } from "graphql-ws";

const createUrqlClient = () => {
  let exchanges = [...defaultExchanges];

  if (typeof window !== "undefined") {
    const wsClient = createWSClient({
      url: "ws://localhost:8080/v1/graphql",
    });

    const subExchange = subscriptionExchange({
      forwardSubscription: (operation: SubscribePayload) => ({
        subscribe: (sink: any) => ({
          unsubscribe: wsClient.subscribe(operation, sink),
        }),
      }),
    });

    exchanges.push(subExchange);
  }

  const client = createClient({
    url: "http://localhost:8080/v1/graphql",
    exchanges,
  });

  return client;
};

const client = createUrqlClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider value={client}>
      <Component {...pageProps} />
    </Provider>
  );
}
