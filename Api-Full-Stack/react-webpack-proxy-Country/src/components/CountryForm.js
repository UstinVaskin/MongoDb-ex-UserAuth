import React from 'react'

const CountryForm = ({ data, handleSubmit, handleChange }) => (
  <form action="" className="form" onSubmit={handleSubmit}>
    <div className="field">

      <label htmlFor="" className="label">
        Name
      </label>
      <div className="control">
        <input
          onChange={handleChange}
          type="text"
          name="name"
          className="input"
          value={data.name}
        />
      </div>
      <div className="field">
        <label htmlFor="" className="label">
          Code
        </label>
        <div className="control">
          <input
            onChange={handleChange}
            type="text"
            name="code"
            className="input"
            value={data.code}
          />
        </div>
      </div>
      <button className="button is-success">
        Create Country
      </button>
    </div>
  </form>
)

export default CountryForm