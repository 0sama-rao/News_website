import React from 'react';
import {NavLink} from 'react-router-dom';

import './NavLinks.css';

const NavLinks = props =>{

    return <ul className="nav-links">
    <li>
      <NavLink to="/" exact>BUISNESS</NavLink>
    </li>
    <li>
      <NavLink to="/politics">POLITICS</NavLink>
    </li>
  
    <li>
      <NavLink to="/TechSci" >TEC-SCI</NavLink>
    </li>
    <li>
      <NavLink to="/about" >ABOUT</NavLink>
    </li>
    </ul>

};
export default NavLinks;
