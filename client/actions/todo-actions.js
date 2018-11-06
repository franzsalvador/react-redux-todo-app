export const getToDos = () => {
  return {
    type: 'GET_TODOS'
  }
}

export const addToDo = toDo => {
  return {
    type: 'ADD_TODO',
    payload: {
      toDo: toDo
    }
  }
}

export const completeToDo = id => {
  return {
    type: 'COMPLETE_TODO',
    payload: {
      id: id
    }
  }
}
