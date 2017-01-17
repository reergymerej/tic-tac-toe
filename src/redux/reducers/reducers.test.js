import reducers, { actionCreators, actions } from './index'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const getStore = (state = {}) => {
  if (state) {
    return createStore(reducers, state, applyMiddleware(thunk))
  }
  return createStore(reducers, applyMiddleware(thunk))
}

describe('reducers', () => {
  describe('action creators', () => {
    it('should handle END_TURN', () => {
      const store = getStore({
        turn: 'x',
      })
      store.dispatch(actionCreators.endTurn())
      expect(store.getState()).toEqual({
        turn: 'o',
      })
      store.dispatch(actionCreators.endTurn())
      expect(store.getState()).toEqual({
        turn: 'x',
      })
    })

    it('should handle SELECT_BOARD_SIZE', () => {
      const store = getStore()
      store.dispatch(actionCreators.selectBoardSize(3, 3))
      expect(store.getState()).toEqual({
        columns: 3,
        rows: 3,
      })
    })

    it('should handle START_GAME', () => {
      const store = getStore()
      store.dispatch(actionCreators.startGame())
      expect(store.getState()).toEqual({
        started: true,
        turn: 'x',
      })
    })
  })

  describe('actions', () => {
    it('should handle selectBoardSize', () => {
      const dispatch = jest.fn()
      actions.selectBoardSize(3, 3)(dispatch)
      expect(dispatch).toHaveBeenCalledWith(
        actionCreators.selectBoardSize(3, 3)
      )
      expect(dispatch).toHaveBeenLastCalledWith(
        actionCreators.startGame()
      )
    })
  })
})
