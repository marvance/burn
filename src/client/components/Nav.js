import React from 'react';
import {NavLink} from 'react-router-dom';

function Nav(){
  return (
    <ul className='nav'>
      <li>
        <NavLink exact activeClassName='active' to='/'>Home</NavLink>
      </li>
      <li>
        <NavLink exact activeClassName='active' to='/profile'>Profile</NavLink>
      </li>
      <li>
        <NavLink activeClassName='active' to='/stats'>Stats</NavLink>
      </li>
      <li>
        <NavLink activeClassName='active' to='/friends'>Friends</NavLink>
      </li>
    </ul>
  )
}

export default Nav