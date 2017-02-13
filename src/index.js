/*******************************************************************************
 * Setup dispatcher, store, reducer, etc.
 **/
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { List } from 'immutable'

const readState = () => {
  var storage = localStorage ? localStorage : require('cookie-storage').CookieStorage
  var state = storage.state ? JSON.parse(storage.state) : undefined
  return List(state)
}

const writeState = (state) => {
  var storage = localStorage ? localStorage : require('cookie-storage').CookieStorage
  state = state ? ( state.size >= 10 ? state.delete(0) : state ) : state
  storage.state = JSON.stringify(state)
}

const ajax = (service, callback) => {
  var request = {
    url: '/api/' + service.endpoint,
    type: service.method,
    data: service.params,
    beforeSend: (xhr) => {
      xhr.setRequestHeader('X-Timestamp', new Date().getTime())
    },
    success: (data) => {
      if (callback) callback(data, false)
    },
    error: function (jqXHR, textStatus, errorThrown) {
      if (callback) callback([jqXHR, textStatus, errorThrown], true)
    }
  }

  jQuery(function ($) {
    if (service.formId !== undefined) {
      var formElement = $('#' + service.formId)
      var formData = new FormData()
      $.each(formElement.find('input[type="file"]'), function(index, value) {
        var name = $(this).attr('name')
        var file = $(this)[0].files[0]
        var file_length = $(this)[0].files.length
        if (file_length > 0) formData.append(name, file);
      })
      request = Object.assign(request, { data: formData, cache: false, contentType: false, processData: false })
    }
    else {
      request = Object.assign(request, { dataType: 'json', timeout: 10000 })
    }
    $.ajax(request)
  })
}

const applicationStore = createStore(
  (state = List(), payload) => {
    var state = readState()

    switch (payload.type) {
      case 'PUSH':
        var target = {
          identity: payload.identity,
          element: payload.element,
          component: payload.component,
          composition: payload.composition,
          layout: payload.layout,
          page: payload.page
        }
        state = state.push({ target: target, info: payload.info })
        writeState(state)
        return state

      case 'POP':
        state = state ? state.pop() : state
        writeState(state)
        return state

      case 'API':
        ajax(payload.service, (data, error) => {
          if (!error) {
            var lastState = state.last()
            lastState.data[payload.data] =
              payload.append ? Object.assign(lastState.data[payload.data], data) : data
            state = state.pop()
            state = state.push(lastState)
            writeState(state)
            return state
          }
        })
        return state

      default:
        return state
    }
  }
)

/*******************************************************************************
 * Setup application
 **/
require('!!script!../theme/js/jquery.min.js')
require('../theme/css/_bootstrap.scss')
require('../theme/js/bootstrap.min.js')

require('../theme/wp/style.css')
require('../theme/wp/index.php')
require('../theme/wp/header.php')
require('../theme/wp/footer.php')
require('../theme/wp/functions.php')

import Application from './components/Application.jsx'

render (
  <Provider store={applicationStore}>
    <Application store={applicationStore} />
  </Provider>,
  document.getElementById('application')
)
