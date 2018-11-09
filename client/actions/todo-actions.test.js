import { getToDos, addToDo, completeToDo } from './todo-actions'

describe('getToDos', () => {
  it('returns an action with type `GET_TODOS`', () => {
    const action = getToDos()
    expect(action).toEqual({ type: 'GET_TODOS' })
  })
})

describe('addToDo', () => {
  it('returns an action with type `ADD_TODO`', () => {
    const toDo = 'item'
    const action = addToDo(toDo)
    expect(action).toEqual({
      type: 'ADD_TODO',
      payload: {
        toDo: 'item'
      }
    })
  })
})

describe('completeToDo', () => {
  it('returns an action with type `COMPLETE_TODO`', () => {
    const id = 12345
    const action = completeToDo(id)
    expect(action).toEqual({
      type: 'COMPLETE_TODO',
      payload: {
        id: id
      }
    })
  })
})
