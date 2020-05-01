import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Login from "../components/Login";
import Say from "../components/Say";

export default function AppRouter() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/say" exact component={Say} />
      </Switch>
    </HashRouter>
  );
}
