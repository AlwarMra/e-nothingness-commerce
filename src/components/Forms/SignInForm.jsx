import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useUser from '../../hooks/useUser'
import Spinner from '../UXElements/Spinner'
import './Forms.css'

const SignInForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { submitSignIn, loading, error } = useUser()

  function handleSubmit(e) {
    e.preventDefault()
    submitSignIn({ email, password })
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className='form'>
        <h1 className='form__title'>Sign In for nothing</h1>
        <label htmlFor='email'>
          <span className='label__span'>Email</span>
          <input
            type='email'
            name='email'
            id='email'
            required
            onChange={e => setEmail(e.target.value)}
          />
        </label>
        <label htmlFor='password'>
          <span className='label__span'>Password</span>
          <input
            minLength='7'
            type='password'
            name='password'
            id='password'
            required
            onChange={e => setPassword(e.target.value)}
          />
        </label>
        {!loading ? (
          <button type='submit' className='form__btn'>
            Sign in
          </button>
        ) : (
          <div className='form__btn'>
            <Spinner />
          </div>
        )}
        {error && <p className='form__error'>{error}</p>}
        <p className='form__info'>
          New customer?{' '}
          <Link to='/register' className=''>
            Register
          </Link>
        </p>
      </form>
    </div>
  )
}

export default SignInForm
