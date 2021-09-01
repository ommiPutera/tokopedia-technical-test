import React from "react";
import App from "./App";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";

// import for React Router Dom
import { BrowserRouter } from "react-router-dom";

// import for apollo client
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { API_URL } from "./helpers/API";

// setting up apollo client
const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      return alert(`graphql error: ${message}`);
    });
  }
});
const link = from([errorLink, new HttpLink({ uri: API_URL })]);
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
