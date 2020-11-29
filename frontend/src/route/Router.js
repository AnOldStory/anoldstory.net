import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import AdminRouter from "./AdminRouter";
import PublicRouter from "./PublicRouter";

class Router extends Component {
  handleFooter(e) {
    console.log(e.key);
    if (e.key === "d") {
      window.location.replace("/admin");
    }
  }
  render() {
    return (
      <BrowserRouter basename="/">
        <Switch>
          <Route path="/admin" render={(props) => <AdminRouter {...props} />} />
          <Route path="/" render={(props) => <PublicRouter {...props} />} />
        </Switch>
        <div
          type="hidden"
          className="footer"
          ref={(i) => {
            i.focus();
          }}
          tabIndex="1"
          onKeyDown={this.handleFooter}
        />
      </BrowserRouter>
    );
  }
}

export default Router;
