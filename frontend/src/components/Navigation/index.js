import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

import './Navigation.css'
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';

function Navigation({ isLoaded }) {
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    )
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <NavLink to='/signup'>Sign up</NavLink>
      </>
    );
  }

  return (
    <ul>
      <li>
        <NavLink exact to='/'>Home</NavLink>
        {isLoaded && sessionLinks}
      </li>
    </ul>
  )
}


export default Navigation;