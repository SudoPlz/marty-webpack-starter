import React from 'react';
import {Route,DefaultRoute,NotFoundRoute} from 'react-router';
import Layout from './layout';
import AuthenticatedPage from './components/authenticatedPage';
import LogoutPage from './pages/logout';
import HomePage from './pages/home';
import Home from './pages/home';
import About from './pages/about';
import NotFound from './pages/notfound';
import Register from './pages/register';
import Verify from './pages/verify.js';
import Profile from './pages/profile.js';
import Login from './pages/login.js';

var userRole = 'user',
    publicRole = 'public';
export default (
    <Route name="public" path="/" handler={Layout} >
        <DefaultRoute handler={Home}/>
        <NotFoundRoute handler={NotFound}/>
        <Route name="home" path="/" handler={Home} />
        <Route name="about" path="/about" handler={About} />
        <Route name="register" path="/register" handler={Register} />
        <Route name="login" path="/login" handler={AuthenticatedPage(Login, [publicRole])} />
        <Route name="verify" path="/verification/:username/:verificationId" handler={Verify} />
        <Route name="profile" path="/profile" handler={AuthenticatedPage(Profile, [userRole])} />
        <Route name="logout" path="/logout" handler={AuthenticatedPage(LogoutPage, [userRole] )} />
    </Route>
);
//<Route name="profile" path="/profile" handler={AuthenticatedPage(Profile)} />
