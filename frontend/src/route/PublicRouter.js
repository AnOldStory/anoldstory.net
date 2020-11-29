import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import MainContainer from "container/public/main/MainContainer";

const AdminRouter = ({ match: { url } }) => {
  return (
    <>
      <Switch>
        <Route exact path={url} component={MainContainer} />

        <Redirect path="*" to="/admin" />
      </Switch>
    </>
  );
};

export default AdminRouter;
