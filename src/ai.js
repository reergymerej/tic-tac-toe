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
  row = 0
  while (column < columns - 2 && row < rows - 2) {
    const index = row * columns + column
    const cell = matrix[index]
    if (cell.value === 'x') {
      const downRightIndex = (row + 1) * columns + column + 1
      const downRight = matrix[downRightIndex]
      if (downRight.value === null) {
        const downRightTwoIndex = (row + 2) * columns + column + 2
        const downRightTwo = matrix[downRightTwoIndex]
        if (downRightTwo.value === cell.value) {
          blocksNeeded.push(downRightIndex)
        }
      }
    }
    column++
    row++
  }

  return blocksNeeded
}
export function getAiMove(boardState) {
  console.log('What should we do?')
  console.dir(boardState)
  // Do I need to block?
  const needBlocks = getBlocksNeeded(boardState)
  if (needBlocks.length) {
    return needBlocks[0]
  } else {
    return 4
  }
}
