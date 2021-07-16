import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';

import './SignupForm.css'
import * as sessionActions from '../../store/session';

function SignupFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.sesssion.user)
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
    <form onSubmit={handleSubmit}>
      <ul>
        {errors.map((error, idx) => <li key={idx}>{error}</li>)}
      </ul>
      <label>
        Email
        <input
          type='text'
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
      </label>
      <label>
        Username
        <input
          type='text'
          value={username}
          onChange={e => setUsername(e.target.value)}
          required
        />
      </label>
      <label>
        Password
        <input
          type='password'
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
      </label>
      <label>
        Confirm Password
        <input
          type='password'
          value={confirm}
          onChange={e => setConfirm(e.target.value)}
          required
        />
      </label>
      <button type='submit'>Sign up</button>
    </form>
  );
}

export default SignupFormPage;
