import { GET_TODOS, ADD_TODO, COMPLETE_TODO } from '../actions/types'
const uuid = require('uuid/v4')

const initialState = []

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_TODOS:
      return state
    case ADD_TODO:
      return [
        ...state, {
          id: uuid(),
          item: action.toDo,
          isDone: false
        }
      ]
    case COMPLETE_TODO:
      return state.map(toDo =>
        (toDo.id === action.id)
          ? {...toDo, isDone: !toDo.isDone}
          : toDo
      )
    default:
      return state
  }
}
