import { Redirect, Route, Switch } from "react-router-dom";
import AllQuotes from "./components/pages/AllQuotes";
import Layout from "./components/layout/Layout";

import React, { Suspense } from "react";
import LoadingSpinner from "./components/UI/LoadingSpinner";

const QuoteDetail = React.lazy(() => import("./components/pages/QuoteDetail"));
const NewQuote = React.lazy(() => import("./components/pages/NewQuote"));
const NotFound = React.lazy(() => import("./components/pages/NotFound"));

function App() {
  return (
    <div>
      <Layout>
        <Suspense
          fallback={
            <div className="centered">
              <LoadingSpinner />
            </div>
          }
        >
          <Switch>
            <Route path="/" exact>
              <Redirect to="/quotes" />
            </Route>
            <Route path="/quotes" exact>
              <AllQuotes />
            </Route>
            <Route path="/quotes/:quoteId">
              <QuoteDetail />
            </Route>
            <Route path="/new-quote">
              <NewQuote />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Suspense>
      </Layout>
    </div>
  );
}

export default App;
