const uuid = require('uuid/v4')

export default function (state = [], action) {
  switch (action.type) {
    case 'GET_TODOS':
      return state
    case 'ADD_TODO':
      return [
        ...state, {
          id: uuid(),
          item: action.toDo,
          isDone: false
        }
      ]
    case 'COMPLETE_TODO':
      return state.map(toDo =>
        (toDo.id === action.id)
          ? {...toDo, isDone: !toDo.isDone}
          : toDo
      )
    default:
      return state
  }
}
