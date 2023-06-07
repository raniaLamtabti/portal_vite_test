import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import theme from "./theme/index";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./queryClient";
import AdminLayout from "./layouts/admin";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <HashRouter>
          <Switch>
            <Route path={`/admin`} component={AdminLayout} />
            <Route path={`/offer`} component={AdminLayout} />
            <Redirect from="/" to="/admin" />
          </Switch>
        </HashRouter>
      </QueryClientProvider>
    </ChakraProvider>
  </React.StrictMode>
);
