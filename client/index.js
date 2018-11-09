import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import ToDoList from './app'
import store from './store'

ReactDOM.render(
  <Provider store={store}>
    <ToDoList />
  </Provider>,
  document.getElementById('app')
)
