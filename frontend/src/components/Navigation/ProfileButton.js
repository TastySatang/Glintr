import react from 'react';
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session'

function ProfileButton() {
  const dispatch = useDispatch();

  const logout = e => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  }


  return (
    <>
      <button >
        <i class="far fa-id-badge"></i>
      </button>
      <button onClick={logout}>Log Out</button>
    </>
  )
}

export default ProfileButton;
