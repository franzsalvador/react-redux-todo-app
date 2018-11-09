import toDoReducer from './todo-reducer'
const uuid = require('uuid/v4')

describe('toDoReducer', () => {
  it('should return the initial state', () => {
    expect(toDoReducer(undefined, {})).toEqual([])
  })

  it('should handle addToDo', () => {
    expect(
      toDoReducer(undefined, {
        type: 'ADD_TODO',
        payload: {
          toDo: 'Walk the dog.'
        }
      })
    ).toEqual([
      {
        id: expect.any(String),
        item: 'Walk the dog.',
        isDone: false
      }
    ])
  })

  it('should handle completeToDo', () => {
    const currentState = [
      {
        id: 0,
        item: 'Walk the dog.',
        isDone: false
      },
      {
        id: 1,
        item: 'Paint the fence.',
        isDone: false
      }
    ]
    expect(
      toDoReducer(currentState, {
        type: 'COMPLETE_TODO',
        payload: {
          id: 0
        }
      })
    ).toEqual([
      {
        id: 0,
        item: 'Walk the dog.',
        isDone: true
      },
      {
        id: 1,
        item: 'Paint the fence.',
        isDone: false
      }
    ])
  })
})
