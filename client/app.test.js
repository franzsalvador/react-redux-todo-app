import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'
import configureStore from 'redux-mock-store'
import PropTypes from 'prop-types'
import checkPropTypes from 'check-prop-types'

import ToDoList from './app'

const mockStore = configureStore()

const toDos = [
  {
    id: 0,
    item: 'Walk the dog.',
    isDone: false
  },
  {
    id: 1,
    item: 'Paint the fence.',
    isDone: false
  }
]

const store = mockStore(toDos)

Enzyme.configure({ adapter: new EnzymeAdapter() })

describe('<ToDoList/>', () => {
  it('renders without error', () => {
    const wrapper = shallow(<ToDoList store={store} />)
    expect(wrapper).toMatchSnapshot()
  })
})
