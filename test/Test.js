import React from 'react'
import { shallow, mount } from 'enzyme'
import { expect } from 'chai'

import { Test } from '../src/components/Test.jsx'

const { describe, it } = global

describe('Test', () => {

  it('should has class "test-page"', () => {
    const Test = require('../src/components/Test.jsx').default
    const wrapper = shallow(
      <Test />
    )
    expect(wrapper.props().className).to.equal("test-page")
  })

})
