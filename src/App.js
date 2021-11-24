import React from 'react';

import {BrowserRouter as Router,Route,Redirect,Switch } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import Accordion from 'react-bootstrap/Accordion';

import MainNavigation from './Business/MainNavigation/MainNavigation';
import MainNewsFeed from './Business/NewsFeed/MainNewsFeed';
import NewsFeedItems from './Business/NewsFeed/NewsFeedItems';
import Intro from './Business/NewsFeed/Intro';
import Accord from './Business/NewsFeed/Accord';
import Footer from './Business/NewsFeed/Footer';
import Cards from './Politics/Cards';
import Latest from './Business/NewsFeed/Latest';
import MainCards from './TechSci/Cards';

import './App.css';

const App = ()=> {
  return (

    <Router>
<MainNavigation/>

    <main>

        <Switch>
        <Route path="/"exact>
        <Accord/>


          <Footer/>

        </Route>
        <Route path="/"exact>

        </Route>
        <Route path="/politics" >
        <Cards/>

        </Route>
        <Route path="/TechSci">

        </Route>
        <Redirect to="/"/>
        </Switch>
</main>
      </Router>
  );
};

export default App;
