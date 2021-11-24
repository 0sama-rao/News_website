import React, {useState} from 'react';

import {Link} from 'react-router-dom';

import NavLinks from './NavLinks';
import SideDrawer from './SideDrawer';
import MainHeader from './MainHeader';
import BackDrop from '../UIElements/BackDrop';

import './MainNavigation.css';

const MainNavigation = props =>{
  const [drawerIsOpen, setDrawerIsOpen] = useState (false);

const openDrawerHandler=()=>{
setDrawerIsOpen(true);
};
const closeDrawerHandler=()=>{
setDrawerIsOpen(false);
};

  return(
    <React.Fragment>
    {drawerIsOpen && <BackDrop onClick ={closeDrawerHandler}/>}

    <SideDrawer show ={drawerIsOpen} onClick={closeDrawerHandler}>
      <nav className="main-navigation__drawer-nav">
      <NavLinks/>
      </nav>
      </SideDrawer>
    <MainHeader>
      <button className="main-navigation__menu-btn ">
       <span />
       <span />
       <span />
      </button>

      <h1 className="main-navigation__title">
     <Link to="/"> BNB </Link>
      </h1>
      <nav className="main-navigation__header-nav">
      <NavLinks/>
      </nav>
   </MainHeader>
   </React.Fragment>
);

};


export default MainNavigation;
