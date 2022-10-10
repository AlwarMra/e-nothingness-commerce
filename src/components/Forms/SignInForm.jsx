import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { signIn } from '../../services/signIn'
import Spinner from '../UXElements/Spinner'
import './Forms.css'

const SignInForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setError(false)
    setLoading(true)

    setTimeout(() => {
      signIn({ email, password }).then(res => {
        if (res.err) return setError(res.message)
        window.localStorage.setItem('userToken', res.token)
      })
      setLoading(false)
    }, 1000)
  }
  return (
    <div>
      <form onSubmit={handleSubmit} className='form'>
        <h1>Sign In for nothing</h1>
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
