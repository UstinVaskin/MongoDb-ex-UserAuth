import React, { useState, useEffect } from 'react'
import { useHistory, useRouteMatch } from 'react-router-dom'
import axios from 'axios'
import Auth from '../lib/auth'
import CountryForm from './CountryForm'

const EditCountry = () => {
  const history = useHistory()
  const params = useRouteMatch()
  const id = params.params.id

  const [form, setData] = useState(
    {
      name: '',
      code: ''
    })

  const [error, setError] = useState({
    erros: ''
  })

  useEffect(() => {
    axios.get(`/api/countries/${id}`)
      .then(resp => setData(resp.data))
      .catch(err => setError({ errors: err.response.status }))
  }, [])


  function handleChange(e) {
    setData({ ...form, [e.target.name]: e.target.value })
    setError({ ...error, errors: '' })
  }

  function handleSubmit(e) {
    e.preventDefault()
    axios.put(`/api/countries/${id}`, form, {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(() => {
        if (error.errors === '') {
          history.push(`/countries/${id}`)
        }
      })
      .catch(() => setError({ errors: 'Unauthorized' }))
  }

  useEffect


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

export default EditCountry


