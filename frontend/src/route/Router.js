import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import AdminRouter from "./AdminRouter";
import PublicRouter from "./PublicRouter";

/* hotkey */

class Router extends Component {
  _handleKeyDown = (event) => {
    switch (event.key) {
      case "q":
        window.location.replace("/");
        break;
      case "a":
        window.location.replace("/admin");
        break;
      case "s":
        window.location.replace("/admin/stock");
        break;
      case "d":
        window.location.replace("/admin/message");
        break;
      default:
        break;
    }
  };
  componentDidMount() {
    document.addEventListener("keydown", this._handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this._handleKeyDown);
  }

  render() {
    return (
      <BrowserRouter basename="/">
        <Switch>
          <Route path="/admin" render={(props) => <AdminRouter {...props} />} />
          <Route path="/" render={(props) => <PublicRouter {...props} />} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
