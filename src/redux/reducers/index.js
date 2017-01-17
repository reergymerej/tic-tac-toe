const initialState = {
}

const END_TURN = 'END_TURN'
const SELECT_BOARD_SIZE = 'SELECT_BOARD_SIZE'
const START_GAME = 'START_GAME'

export const actionCreators = {
  endTurn: () => ({ type: END_TURN }),
  selectBoardSize: (columns, rows) => ({
    type: SELECT_BOARD_SIZE,
    columns,
    rows,
  }),
  startGame: () => ({ type: START_GAME }),
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case END_TURN:
      return {
        ...state,
        turn: state.turn === 'x' ? 'o': 'x',
      }

    case SELECT_BOARD_SIZE:
      return {
        ...state,
        columns: action.columns,
        rows: action.rows,
      }

    case START_GAME:
      return {
        ...state,
        started: true,
        turn: 'x',
      }

    default:
      return state
  }
}

export const mapStateToProps = state => ({
  rows: state.rows,
  columns: state.columns,
  turn: state.turn,
  started: state.started,
})

export const actions = {
  selectBoardSize: (columns, rows) => {
    return dispatch => {
      dispatch(actionCreators.selectBoardSize(columns, rows))
      dispatch(actionCreators.startGame())
    }
  },
}

export const mapDispatchToProps = {
  selectBoardSize: actions.selectBoardSize,
}
