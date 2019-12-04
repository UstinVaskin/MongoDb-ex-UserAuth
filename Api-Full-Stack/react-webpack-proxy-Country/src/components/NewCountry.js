import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import Auth from '../lib/auth'
import CountryForm from './CountryForm'


const NewCountry = () => {

  const history = useHistory()

  const [form, setData] = useState(
    {
      name: '',
      code: ''
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
    axios.post('/api/countries', form, {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(resp => history.push(`/countries/${resp.data._id}`))
      .catch((err) => setError({ errors: err.response.data }))

  }

  return <section className="section">
    <div className="container">
      <CountryForm
        handleSubmit={e => handleSubmit(e)}
        handleChange={e => handleChange(e)}
        errors={error.errors}
        data={form}
      />
    </div>
  </section>
}


export default NewCountry