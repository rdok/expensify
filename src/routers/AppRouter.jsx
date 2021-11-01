import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import DashboardPage from "../components/DashboardPage";
import EditExpensePage from "../components/EditExpensePage";
import HelpPage from "../components/HelpPage";
import NotFoundPage from "../components/NotFoundPage";
import Header from "../components/Header";
import AddExpensePage from "../components/AddExpensePage";

/* global BASENAME */
const basename = BASENAME;

const AppRouter = () => (
  <BrowserRouter basename={basename}>
    <div>
      <Header />
    </div>
    <Switch>
      <Route path="/" component={DashboardPage} exact />
      <Route path="/index.html" component={DashboardPage} exact />
      <Route path="/create" component={AddExpensePage} />
      <Route path="/edit/:id" component={EditExpensePage} />
      <Route path="/help" component={HelpPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
