import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import 'bulma'


function useFetch(url, initialState = []) {
  const [data, setData] = useState(initialState)
  useEffect(() => {
    fetch(url)
      .then(resp => resp.json())
      .then(resp => setData(resp))
  }, [])

  return data
}



const CountriesIndex = () => {
  const data = useFetch('/api/countries')
  return <div>{data.map((country, index) => {
    return <div className='row' key={index} >

      <div className="card">

        <h1 className='is-size-3 has-text-danger has-text-centered'>
          <Link className='has-text-danger' to={`/countries/${country._id}`}>{country.name}, {country.code}</Link>
        </h1>
      </div>
    </div>

  })}</div >
}


import Navbar from './components/Navbar'
import Home from './components/Home'
import Register from './components/Register'
import Login from './components/Login'
import NewCountry from './components/NewCountry'
import EditCountry from './components/EditCountrie'
import DisplayCountry from './components/SingleCountry'






const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>

        <Route path="/countries/edit/:id" component={EditCountry} />
        <Route exact path="/countries/:id" component={DisplayCountry} />
        <Route exact path="/countries" component={CountriesIndex} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/countries/new" component={NewCountry} />
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)


// To run open file from restful API as a backend 

// then npm i 

// then npm run serve 

