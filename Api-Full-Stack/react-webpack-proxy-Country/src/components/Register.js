import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { ToastContainer, toast, Zoom } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'



const Register = () => {
  const history = useHistory()

  function notify() {
    toast.error(`${error.errors.general}`, {
      position: 'top-left',
      autoClose: 4500,
      exit: 'zoomOut',
      transition: Zoom
    })
  }

  const [form, setData] = useState(
    {
      email: '',
      username: '',
      password: '',
      passwordConfirmation: ''
    })

  const [error, setError] = useState({
    errors: ''
  })

  function handleChange(e) {
    setData({ ...form, [e.target.name]: e.target.value })
    setError({ ...error, errors: '' })
  }


  function handleSubmit(e) {
    e.preventDefault()
    axios.post('/api/register', form)
      .then(() => {
        if (error.errors === '') {
          history.push('/login')
        }
      })
      .catch((err) => setError({ errors: err.response.data }))
  }

  if (error.errors !== '') {
    notify()
  }

  return <section className="section">
    <div className="container">
      <div className="title">Register</div>
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
          {error.errors.email && !form.email && <small className="help is-danger">
            {error.errors.email}
          </small>}
        </div>
        <div className="field">
          <label htmlFor="" className="label">
            Username
          </label>
          <div className="control">
            <input
              onChange={(e) => handleChange(e)}
              type="text"
              name="username"
              className="input"
            />
          </div>
          {error.errors && !form.username && <small className="help is-danger">
            {error.errors.username}
          </small>}
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
          {error.errors && !form.password && <small className="help is-danger">
            {error.errors.password}
          </small>}
        </div>
        <ToastContainer
          className="test" />
        <div className="field">
          <label htmlFor="" className="label">
            Confirm password
          </label>
          <div className="control">
            <input
              onChange={(e) => handleChange(e)}
              type="password"
              name="passwordConfirmation"
              className="input"
            />
          </div>
          {error.errors && form.passwordConfirmation !== form.password && <small className="help is-danger">
            {error.errors.confirm}
          </small>}
        </div>
        <button className="button is-success">
          Complete registration
        </button>
      </form>
    </div>
  </section>
}

export default Register