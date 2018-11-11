import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class ToDoList extends Component {
  render() {
    const { toDos, onClick } = this.props
    return (
      <ul className="list">
        {toDos.map((toDo, index) => <li
          key={index}
          data-key={toDo.id} onClick={onClick}
          className={toDo.isDone ? 'is-done list-items' : 'list-items'}>
          {toDo.item}
        </li>)}
      </ul>
    )
  }
}

ToDoList.propTypes = {
  toDos: PropTypes.array.isRequired
}

const mapStateToProps = (state) => ({ toDos: state.toDos })

export default connect(mapStateToProps)(ToDoList)
