import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { addToDo, completeToDo } from './actions/todo-actions'

class ToDoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: ''
    }
    this.onSubmit = this.onSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
    this.onClick = this.onClick.bind(this)
  }
  onChange(e) {
    e.preventDefault()
    const input = e.target.value
    this.setState({ input })
  }
  onClick(e) {
    const { completeToDo } = this.props
    const id = e.target.getAttribute('data-key')
    completeToDo(id)

  }
  onSubmit(e) {
    e.preventDefault()
    const { addToDo } = this.props
    const { input } = this.state
    if (!input.trim()) {
      return
    }
    addToDo(input)
    this.setState({ input: '' })
  }

  render() {
    const { input } = this.state
    const { toDos } = this.props
    const { onSubmit, onChange, onClick } = this
    let remainingTasks = 0
    toDos.forEach(item => {
      if (item.isDone === false) {
        remainingTasks += 1
      }
    })
    const statusMessage = remainingTasks + ' remaining out of ' + toDos.length + ' tasks'
    return (
      <div>
        <div>
          <h2 className="text">
              Todo List
          </h2>
          <form className="form" onSubmit={onSubmit}>
            <input className="input" value={input} onChange={onChange}>
            </input>
            <button className="button" type='submit'>Submit</button>
          </form>
          <div className='status-message'>{statusMessage}</div>
          <ul className="list">
            {toDos.map((toDo, index) => <li
              key={index}
              data-key={toDo.id} onClick={onClick}
              className={toDo.isDone ? 'is-done list-items' : 'list-items'}>
              {toDo.item}
            </li>)}
          </ul>
        </div>
        <style>{`
            .is-done {
                text-decoration: line-through;
            }
        `}</style>
      </div>
    )
  }
}

ToDoList.propTypes = {
  toDos: PropTypes.array.isRequired,
  addToDo: PropTypes.func.isRequired,
  completeToDo: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({toDos: state.toDos})

export default connect(
  mapStateToProps,
  {addToDo, completeToDo}
)(ToDoList)
