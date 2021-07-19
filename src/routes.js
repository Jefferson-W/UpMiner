import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Homes from './page/Home/home';




function AppRouter() {
  return (
    <BrowserRouter>
      <Switch>

        <Route path="/home" exact component={Homes} />

      </Switch>
    </BrowserRouter>
  );
}

export default AppRouter;