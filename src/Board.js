import React, {
  Component,
  PropTypes,
} from 'react'
import './Board.css'
import Box from './Box'
import { getAiMove } from './ai'
import { connect } from 'react-redux'
import { mapStateToProps } from './redux/reducers'
const boardState = []

class Board extends Component {
  constructor(props) {
    super()
    this.state = {}
    const max = props.columns * props.rows
    while (boardState.length < max) {
      boardState.push(null)
    }
  }

  checkForGameOver = () => {
    return false
  }

  aiMove = () => {
    const delay = 1
    setTimeout(() => {
      const ai = getAiMove(boardState, this.props.columns, this.props.rows)
      boardState[ai] = 'o'
      this.setState({
        [ai]: 'o',
      }, this.checkForGameOver)
    }, delay)
  }

  handleBoxClick = (boxId) => {
    const { turn } = this.props
    boardState[boxId] = 'x'
    // TODO: dispatch claiming of a square
    this.setState({
      [boxId]: turn,
    }, () => {
      // TODO: Do not use setState callback.
      this.checkForGameOver()
      if (turn === 'x') {
        this.aiMove()
      }
    })
  }

  renderBox = (id) => {
    const canClick = !this.state[id] && this.props.turn === 'x'
    const onClick = canClick
      ? this.handleBoxClick
      : undefined
    return (
      <Box
        key={id}
        id={id}
        onClick={onClick}
        type={this.state[id]}
        canClick={canClick}
      />
    )
  }

  renderRow = (index) => {
    let blockIndex = 0
    const blocks = []
    while (blockIndex < this.props.columns) {
      blocks.push(blockIndex + index)
      blockIndex++
    }
    return (
      <div
        key={index}
        className="row"
      >
        { blocks.map(this.renderBox) }
      </div>
    )
  }

  render = () => {
    let rowIndex = 0
    const rows = []
    while (rowIndex < this.props.rows) {
      rows.push(rowIndex * this.props.columns)
      rowIndex++
    }
    return (
      <div className="board">
        <div>turn: {this.props.turn}</div>
        { rows.map(this.renderRow) }
      </div>
    )
  }
}

Board.propTypes = {
  columns: PropTypes.number.isRequired,
  rows: PropTypes.number.isRequired,
  turn: PropTypes.oneOf(['x', 'o']).isRequired,
}

export default connect(mapStateToProps)(Board)
