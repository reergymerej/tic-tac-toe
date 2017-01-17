const initialState = {
  rows: 3,
  columns: 3,
  turn: 'x',
}

const END_TURN = 'END_TURN'
const SELECT_BOARD_SIZE = 'SELECT_BOARD_SIZE'

export const actionCreators = {
  endTurn: () => ({ type: END_TURN }),
  selectBoardSize: (columns, rows) => ({
    type: SELECT_BOARD_SIZE,
    columns,
    rows,
  }),
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

    default:
      return state
  }
}

export const mapStateToProps = state => ({
  rows: state.rows,
  columns: state.columns,
  turn: state.turn,
})

export const actions = {
  selectBoardSize: (columns, rows) => {
    return dispatch => {
      dispatch(actionCreators.selectBoardSize(columns, rows))
    }
  },
}
