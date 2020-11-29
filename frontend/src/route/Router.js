import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import AdminRouter from "./AdminRouter";
import PublicRouter from "./PublicRouter";

class Router extends Component {
  render() {
    return (
      <BrowserRouter basename="/">
        <>
          <Switch>
            <Route
              path="/admin"
              render={(props) => <AdminRouter {...props} />}
            />
            <Route path="/" render={(props) => <PublicRouter {...props} />} />
          </Switch>
        </>
      </BrowserRouter>
    );
  }
}

export default Router;
