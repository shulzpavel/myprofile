import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Contacts from '../Contacts/Contacts'

import Header from '../Header/Header';
import Projects from "../Projects/Projects";
import Footer from '../Footer/Footer';
import Profile from '../Profile/Profile'
import Tech from '../Tech/Tech'

function App() {
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route exact path='/' component={Projects} />
        <Route exact path='/profile' component={Profile} />
        <Route exact path='/tech' component={Tech} />
      </Switch>
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
