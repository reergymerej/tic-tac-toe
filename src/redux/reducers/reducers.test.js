import reducers, { actions } from './index'
import { createStore } from 'redux'

describe('reducers', () => {
  it('should have the correct initial state', () => {
    const store = createStore(reducers)
    expect(store.getState()).toEqual({
      rows: 3,
      columns: 3,
      turn: 'x',
    })
  })

  it('should handle END_TURN', () => {
    const store = createStore(reducers, {
      turn: 'x',
    })
    store.dispatch(actions.endTurn())
    expect(store.getState()).toEqual({
      turn: 'o',
    })
    store.dispatch(actions.endTurn())
    expect(store.getState()).toEqual({
      turn: 'x',
    })
  })
})
