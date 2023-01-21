import React from "react";
import { Switch, Route } from "react-router-dom";
import "./Main.css";
import Profile from "../Profile/Profile";
import Projects from "../Projects/Projects";

function Main() {
  return (
    <div className="main">
      <Switch>
        <Route exact path="/" component={Profile} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/profile" component={Profile} />
      </Switch>
    </div>
  );
}

export default Main;
