import { getToDos, addToDo } from './todo-actions'

describe('getToDos', () => {
  it('returns an action with type `GET_TODOS`', () => {
    const action = getToDos()
    expect(action).toEqual({ type: 'GET_TODOS' })
  })
})
