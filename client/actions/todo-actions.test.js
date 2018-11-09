import * as actions from './todo-actions'

describe('getToDos', () => {
  it('returns an action with type `GET_TODOS`', () => {
    expect(actions.getToDos()).toEqual({ type: 'GET_TODOS' })
  })
})

describe('addToDo', () => {
  it('returns an action with type `ADD_TODO`', () => {
    const toDo = 'item'
    const expectedAction = {
      type: 'ADD_TODO',
      payload: {
        toDo: 'item'
      }
    }
    expect(actions.addToDo(toDo)).toEqual(expectedAction)
  })
})

describe('completeToDo', () => {
  it('returns an action with type `COMPLETE_TODO`', () => {
    const id = 12345
    const expectedAction = {
      type: 'COMPLETE_TODO',
      payload: {
        id: id
      }
    }
    expect(actions.completeToDo(id)).toEqual(expectedAction)
  })
})
