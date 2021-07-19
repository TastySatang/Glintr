import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session'

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);

  // const toggleMenu = () => {
  //   setShowMenu(!showMenu)
  // }

  const openMenu = () => {
    if (showMenu) return
    setShowMenu(true);
  }

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener('click', closeMenu)
  }, [showMenu])

  const logout = e => {
    dispatch(sessionActions.logout());
    e.preventDefault();
  }


  return (
    <>
      <div className='navbar__profile' onClick={openMenu}>
        <i className="fas fa-user-circle"></i>
      </div>
      {showMenu && (
        <ul className='dropdown__content'>
          <section>{user.username}</section>
          <section>{user.email}</section>
          <section>
            <button onClick={logout}>Log Out</button>
          </section>
        </ul>
      )}
    </>
  )
}

export default ProfileButton;
