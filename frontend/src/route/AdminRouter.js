import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import MainContainer from "container/admin/main/MainContainer";

import MessageContainer from "container/admin/message/MessageContainer";

import PingContainer from "container/admin/ping/PingContainer";

import Navigation from "container/common/navigation/Navigation";

let list = [
  {
    dest: "",
    msg: "Direct",
    sub: [
      {
        dest: "http://220.94.42.246:8081",
        msg: "Code",
        sub: [],
      },
      {
        dest: "http://220.94.42.246:8080",
        msg: "Dev Page",
        sub: [],
      },
    ],
  },
  {
    dest: "/admin/ping",
    msg: "Ping",
    sub: [],
  },
  {
    dest: "/admin/message",
    msg: "Message",
    sub: [],
  },
];

const AdminRouter = ({ match: { url } }) => {
  return (
    <>
      <Navigation list={list} />
      <Switch>
        <Route exact path={url} component={MainContainer} />
        <Route exact path={url + "/message"} component={MessageContainer} />
        <Route exact path={url + "/ping"} component={PingContainer} />
        <Redirect path="*" to="/admin" />
      </Switch>
    </>
  );
};

export default AdminRouter;
