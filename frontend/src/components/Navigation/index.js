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
        <li className='navbar__login'>
          <LoginFormModal />
        </li>
        <li className='navbar__signup'>
          <NavLink className='navbar__signup--link' to='/signup'>Sign up</NavLink>
        </li>
      </>
    );
  }

  return (
    <>
      <div className='navbar'>
        <div className='glintr-logo-container'>
          <NavLink exact to='/'><img src={'/GlintrLogo.png'} alt='logo' /></NavLink>
        </div>
        <div className='links'>
          <NavLink className='navbar__browse' exact to='/photos'>
            <h2>Browse</h2>
          </NavLink>
        </div>
        <div className='links'>
          <NavLink className='navbar__browse' exact to='/photos/new'>
            <h2>Upload</h2>
          </NavLink>
        </div>
        <ul className='navbar__tools'>
          <div className='emptyholder'>
          </div>
          {isLoaded && sessionLinks}
        </ul>
      </div>
    </>
  )
}


export default Navigation;
