import React from 'react'
import { connect } from 'react-redux'

export const Test = () => {

  return (
    <div className="test-page">
      <h1>Test</h1>

      <button className="btn btn-primary" onClick={e => {
            store.dispatch({ type: 'PUSH', info: 'Hello' })
          }}>Hello</button> &nbsp;
      <button className="btn btn-primary" onClick={e => {
            store.dispatch({ type: 'PUSH', info: 'World' })
          }}>World</button> &nbsp;
      <button className="btn btn-primary" onClick={e => {
            store.dispatch({ type: 'PUSH', info: 'Application' })
          }}>Application</button> &nbsp;
      <br /><br />
      <button className="btn btn-primary" onClick={e => {
            store.dispatch({ type: 'API', data: 'users', append: false,
              service: {
                method: 'GET',
                endpoint: '/users',
                params: {}
              }
            })
          }}>API Test</button> &nbsp;

    </div>
  )
}

export default Test
