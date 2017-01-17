const initialState = {
  rows: 3,
  columns: 3,
  turn: 'x',
}

const END_TURN = 'END_TURN'

export const actions = {
  endTurn: () => ({ type: END_TURN }),
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case END_TURN:
      return {
        ...state,
        turn: state.turn === 'x' ? 'o': 'x',
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
