import React, {
  Component,
  PropTypes,
} from 'react'
import './Board.css'
import Box from './Box'

class Board extends Component {
  constructor(props) {
    super()
    this.state = {
      turn: 'x',
    }
  }

  handleBoxClick = (boxId) => {
    const { turn } = this.state
    this.setState({
      [boxId]: turn,
      turn: turn === 'x'
        ? 'o'
        : 'x',
    })
  }

  renderBox = (id) => {
    const canClick = this.state.turn === 'x'
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

  render() {
    let rowIndex = 0
    const rows = []
    while (rowIndex < this.props.rows) {
      rows.push(rowIndex * this.props.columns)
      rowIndex++
    }
    return (
      <div className="board">
        { rows.map(this.renderRow) }
      </div>
    )
  }
}

Board.propTypes = {
  columns: PropTypes.number.isRequired,
  rows: PropTypes.number.isRequired,
}

Board.defaultProps = {
  columns: 3,
  rows: 3,
}

export default Board
