import React, { useState, useEffect } from 'react'
import { useHistory, useRouteMatch, Link } from 'react-router-dom'
import axios from 'axios'
import Auth from '../lib/auth'


const DisplayCountry = () => {
  const history = useHistory()
  const params = useRouteMatch()
  const id = params.params.id

  const [data, setData] = useState({})
  const [text, setText] = useState('Delete Country')

  useEffect(() => {
    axios.get(`/api/countries/${id}`)
      .then(resp => setData(resp.data))

  }, [])


  function handleDelete() {
    axios.delete(`/api/countries/${id}`, {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(() => history.push('/countries'))
      .catch(err => console.log(err))
  }

  function isOwner(data) {
    return getUserId() === data.user
  }

  function getUserId() {
    const token = Auth.getToken()
    if (!token) return false
    const parts = token.split('.')
    return JSON.parse(atob(parts[1])).sub
  }

  function makeSure() {
    if (text === 'Are you sure?') {
      handleDelete()
    }
    setText('Are you sure?')
  }


  return <div className="section">
    <div className="container">
      <div className="columns is-multiline">
        <div className="column is-half-tablet">
          <p className="title">
            {data.name}
          </p>
          <p className="subtitle">
            {data.code}
          </p>
          <br />
          {isOwner(data) &&
            <>
              <p><i>You created this country</i></p>
              <Link className="button is-info" to={`/countries/edit/${id}`}>
                Edit country
              </Link>
              <br />
              <br />
              <button className="button is-danger" onClick={
                () => makeSure()
              }>
                {text}
              </button>
            </>
          }
        </div>

      </div>
    </div>
  </div>
}

export default DisplayCountry