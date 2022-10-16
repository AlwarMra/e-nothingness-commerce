import React, { useState } from 'react'
import Spinner from '../UXElements/Spinner'
import useUser from '../../hooks/useUser'

import './Forms.css'

const SignInForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { submitUser, loading, error } = useUser()

  function handleSubmit(e) {
    e.preventDefault()
    submitUser({ email, password, name, isSigning: false })
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className='form'>
        <h1 className='form__title'>Register for nothing</h1>
        <label htmlFor='name'>
          <span className='label__span'>Name</span>
          <input
            type='name'
            name='name'
            id='name'
            required
            onChange={e => setName(e.target.value)}
          />
        </label>
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
            Register
          </button>
        ) : (
          <div className='form__btn'>
            <Spinner />
          </div>
        )}
        {error && <p className='form__error'>{error}</p>}
      </form>
    </div>
  )
}

export default SignInForm
