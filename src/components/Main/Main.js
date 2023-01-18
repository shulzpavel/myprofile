import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './Main.css';
import Projects from "../Projects/Projects";
import Profile from '../Profile/Profile'
import Tech from '../Tech/Tech'

function Main() {
  return (
    <div className='main'>
      <Switch>
        <Route exact path='/' component={Profile} />
        <Route exact path='/projects' component={Projects} />
        <Route exact path='/profile' component={Profile} />
        <Route exact path='/tech' component={Tech} />
      </Switch>
      </div>
  );
}

export default Main;
