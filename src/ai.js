export function getMatrix(board, columns, rows) {
  const matrix = []
  let column = 0
  let row = 0
  while (row < rows) {
    while (column < columns) {
      matrix.push({
        x: column,
        y: row,
        value: board[row * columns + column],
      })
      column++
    }
    column = 0
    row++
  }
  return matrix
}

export function getBlocksNeeded(boardState, columns, rows) {
  const blocksNeeded = []
  const matrix = getMatrix(boardState, columns, rows)

  // This only blocks X-X, not XX-.
  // TODO: block XX-

  // in row
  let row = 0
  while (row < rows) {
    let column = 0
    while (column < columns - 2) {
      const index = row * columns + column
      const cell = matrix[index]
      if (cell.value === 'x') {
        const right = matrix[index + 1]
        if (right.value === null) {
          const rightTwo = matrix[index + 2]
          if (rightTwo.value === cell.value) {
            blocksNeeded.push(index + 1)
          }
        }
      }
      column++
    }
    row++
  }

  // column
  let column = 0
  while (column < columns) {
    let row = 0
    while (row < rows - 2) {
      const index = row * columns + column
      const cell = matrix[index]
      if (cell.value === 'x') {
        const downIndex = (row + 1) * columns + column
        const down = matrix[downIndex]
        if (down.value === null) {
          const downTwoIndex = (row + 2) * columns + column
          const downTwo = matrix[downTwoIndex]
          if (downTwo.value === cell.value) {
            blocksNeeded.push(downIndex)
          }
        }
      }
      row++
    }
    column++
  }

  // diagonal
  column = 0
  while (column < columns) {
    row = 0
    while (row < rows - 2) {
      const index = row * columns + column
      const cell = matrix[index]
      if (cell.value === 'x') {
        if (column < columns - 1) {
          const downRightIndex = (row + 1) * columns + column + 1
          const downRight = matrix[downRightIndex]
          if (downRight.value === null) {
            const downRightTwoIndex = (row + 2) * columns + column + 2
            const downRightTwo = matrix[downRightTwoIndex]
            if (downRightTwo.value === cell.value) {
              blocksNeeded.push(downRightIndex)
            }
          }
        } else if (column > 1) {
          const downLeftIndex = (row + 1) * columns + column - 1
          const downLeft = matrix[downLeftIndex]
          if (downLeft.value === null) {
            const downLeftTwoIndex = (row + 2) * columns + column - 2
            const downLeftTwo = matrix[downLeftTwoIndex]
            if (downLeftTwo.value === cell.value) {
              blocksNeeded.push(downLeftIndex)
            }
          }
        }
      }
      row++
    }
    column++
  }

  return blocksNeeded
}

function getAnyAvailable(boardState) {
  let pick
  boardState.some((x, i) => {
    if (x === null) {
      pick = i
    }
    return pick !== undefined
  })
  return pick
}

export function getAiMove(boardState, columns, rows) {
  // defense
  const needBlocks = getBlocksNeeded(boardState, columns, rows)
  if (needBlocks.length) {
    return needBlocks[0]
  } else {
    // offense
    return getAnyAvailable(boardState)
  }
}
