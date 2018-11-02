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
    return (
      <div>
        <div>
          <h2>
              Todo List
          </h2>
          <form onSubmit={onSubmit}>
            <input value={input} onChange={onChange}>
            </input>
            <button type='submit'>Submit</button>
          </form>
          {/* <div className='task-counter'>{statusMessage}</div> */}
          <ul>
            {toDos.map((toDo, index) => <li key={index} data-key={toDo.id} onClick={onClick} className={toDo.isDone ? 'is-done' : ''}>{toDo.item}</li>)}
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
