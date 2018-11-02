import React from 'react'
import ReactDOM from 'react-dom'
import ToDoList from './app'
import store from './store'

ReactDOM.render(
  <ToDoList store={store}/>,
  document.getElementById('app')
)
