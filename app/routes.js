import React from 'react';
import {Route,DefaultRoute,NotFoundRoute} from 'react-router';

import Layout from './layout';

import AuthenticatedPage from './components/authenticatedPage';

import LogoutPage from './pages/logout';
import HomePage from './pages/home';
import Home from './pages/home';
import About from './pages/about';
import NotFound from './pages/notfound';

export default (
  <Route name="public" path="/" handler={Layout} >
    <DefaultRoute handler={Home}/>
    <NotFoundRoute handler={NotFound}/>
    <Route name="home" path="/" handler={Home} />
    <Route name="about" path="/about" handler={About} />
    <Route name="logout" path="/logout" handler={AuthenticatedPage(LogoutPage)} />
  </Route>
);
//<Route name="profile" path="/profile" handler={AuthenticatedPage(Profile)} />
