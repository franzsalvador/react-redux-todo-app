export const getToDos = () => {
  return {
    type: 'GET_TODOS'
  }
}

export const addToDo = toDo => {
  return {
    type: 'ADD_TODO',
    toDo
  }
}

export const completeToDo = id => {
  return {
    type: 'COMPLETE_TODO',
    id
  }
}
