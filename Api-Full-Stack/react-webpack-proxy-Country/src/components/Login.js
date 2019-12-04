import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import Auth from '../lib/auth'


const Login = () => {
  const history = useHistory()

  const [form, setData] = useState(
    {
      email: '',
      password: ''
    })

  const [error, setError] = useState({
    erros: ''
  })

  function handleChange(e) {
    setData({ ...form, [e.target.name]: e.target.value })
    setError({ ...error, errors: '' })
  }

  function handleSubmit(e) {
    e.preventDefault()
    axios.post('/api/login', form)

      .then(resp => {
        Auth.setToken(resp.data.token)
        history.push('/countries')
      })

      .catch(() => setError({ errors: 'Incorrect credentials' }))
  }

  return <section className="section">
    <div className="container">
      <div className="title">Login</div>
      <form className="form" onSubmit={(e) => handleSubmit(e)}>
        <div className="field">
          <label htmlFor="" className="label">
            Email
          </label>
          <div className="control">
            <input
              onChange={(e) => handleChange(e)}
              type="text"
              name="email"
              className="input"
            />
          </div>
        </div>
        <div className="field">
          <label htmlFor="" className="label">
            Password
          </label>
          <div className="control">
            <input
              onChange={(e) => handleChange(e)}
              type="password"
              name="password"
              className="input"
            />
          </div>
          {error.errors && <small className="help is-danger">
            {error.errors}
          </small>}
        </div>
        <button className="button is-success">
          Login
        </button>
      </form>
    </div>
  </section>
}



export default Login