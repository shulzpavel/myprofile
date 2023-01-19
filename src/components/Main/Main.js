import React from "react";
import { Switch, Route } from "react-router-dom";
import "./Main.css";
import Projects from "../Projects/Projects";
import Profile from "../Profile/Profile";
import Tech from "../Tech/Tech";

function Main() {
  return (
    <div className="main">
      <Switch>
        {/* <Profile /> */}
        <Route exact path="/" component={Profile} />
        <Route path="/projects" component={Projects} />
        <Route path="/profile" component={Profile} />
      </Switch>
    </div>
  );
}

export default Main;
