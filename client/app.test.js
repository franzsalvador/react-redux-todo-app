import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'
import ToDoList from './app'
import configureMockStore from 'redux-mock-store'

const mockStore = configureMockStore()
const store = mockStore({})

Enzyme.configure({ adapter: new EnzymeAdapter() })

const setup = (props = {}, state = null) => {
  return shallow(<ToDoList store={store} {...props}/>)
}
const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test='${val}']`)
}
it('renders without error', () => {
  // const wrapper = setup()
  // const appComponent = findByTestAttr(wrapper, 'component-app')
  // expect(appComponent.length).toBe(1)
})

it('when submit is clicked, the todo is added', () => {

})

it('when a todo is clicked, the todo toggled for being done', () => {

})

it('when todos are added, status message is updated', () => {

})

it('when todo is clicked, status message is updated', () => {

})
