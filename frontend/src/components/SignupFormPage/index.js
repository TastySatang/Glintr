import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';

import './SignupForm.css';
import * as sessionActions from '../../store/session';

function SignupFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user)
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to='/' />

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password === confirm) {
      setErrors([]);
      return dispatch(sessionActions.signup({ email, username, password }))
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) setErrors(data.errors);
        })
    }

    return setErrors(['Confirm Password field must be the same as the Password field'])
  };

  return (
    <>
      <div className='inspiration'>
        <div className='signup__container'>
          <form onSubmit={handleSubmit}>
            <ul>
              {errors.map((error, idx) => <li key={idx}>{error}</li>)}
            </ul>
            <h3 className='signup__title'>Sign up for Glintr</h3>

            <input
              type='text'
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder='Email'
              required
            />


            <input
              type='text'
              value={username}
              onChange={e => setUsername(e.target.value)}
              placeholder='Username'
              required
            />

            <input
              type='password'
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder='Password'
              required
            />

            <input
              type='password'
              value={confirm}
              onChange={e => setConfirm(e.target.value)}
              placeholder='Confirm Password'
              required
            />

            <button className='button' type='submit'>Sign up</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignupFormPage;
