import React from 'react'
import { connect } from 'react-redux'

export const Test = ({ store }) => {
  var state = store.getState()
  var lastState = state ? state.last() : undefined
  var info = lastState ? lastState.info : undefined

  return (
    <div>
      <h1>{ info }</h1>

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

export default connect((state)=>{return {state}}) (Test)
