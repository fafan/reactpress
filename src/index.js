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

// Themes
require('!!script!../static/theme/assets/js/jquery.min.js')
require('!!script!../static/theme/assets/js/tether.min.js')
require('!!script!../static/theme/assets/js/toolkit.js')
require('!!script!../static/theme/assets/js/application.js')
require('../static/theme/assets/css/toolkit-startup.css')
require('../static/theme/assets/css/application-startup.css')

// Template
require('../static/template/style.css')
require('../static/template/index.php')
require('../static/template/header.php')
require('../static/template/footer.php')
require('../static/template/functions.php')
require('../static/template/api.php')

// Index
require('./index.html')

// Helper
require('../static/helper/functions.js')

// Render default component
import Website from './components/Website.jsx'
render (
  <Provider store={applicationStore}>
    <Website store={applicationStore} />
  </Provider>,
  document.getElementById('application')
)
