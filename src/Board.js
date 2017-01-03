import React, { Component } from 'react'
import './Board.css'
import Box from './Box'

class Board extends Component {
  constructor() {
    super()
    this.x = 3
    this.y = 3
    this.state = {
      turn: 'x',
    }
  }

  handleBoxClick = (boxId) => {
    const { turn } = this.state
    if (this.state[boxId] === undefined) {
      this.setState({
        [boxId]: this.state.turn,
        turn: turn === 'x' ? 'o' : 'x',
      })
    }
  }

  renderBox = (id) => {
    return (
      <Box
        key={id}
        id={id}
        onClick={this.handleBoxClick}
        type={this.state[id]}
      />
    )
  }

  renderRow = (index) => {
    let blockIndex = 0
    const blocks = []
    while (blockIndex < this.x) {
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
    while (rowIndex < this.y) {
      rows.push(rowIndex * this.x)
      rowIndex++
    }
    return (
      <div className="board">
        { rows.map(this.renderRow) }
      </div>
    )
  }
}

export default Board
