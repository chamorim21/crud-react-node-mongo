import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Home from "../components/home/Home";
import About from '../components/about/About';
import User from "../components/user/User";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/users" component={User} />
      <Route exact path="/about" component={About} />
      <Redirect from="*" to="/" />
    </Switch>
  );
};
