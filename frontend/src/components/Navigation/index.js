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
    <>
      <div className='navbar'>
        <div className='glintr-logo-container'>
          <NavLink exact to='/'><img src={'/GlintrLogo.png'} alt='logo' /></NavLink>
        </div>
        <ul>
          <li>
            {isLoaded && sessionLinks}
          </li>
        </ul>
      </div>
    </>
  )
}


export default Navigation;
