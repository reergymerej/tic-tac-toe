export function getBlocksNeeded(boardState, columns, rows) {
  const blocksNeeded = []

  // in row
  if (boardState[0] === 'x' && boardState[2] === 'x') {
    blocksNeeded.push(1)
  }
  if (boardState[3] === 'x' && boardState[5] === 'x') {
    blocksNeeded.push(4)
  }
  if (boardState[6] === 'x' && boardState[8] === 'x') {
    blocksNeeded.push(4)
  }

  // column
  if (boardState[0] === 'x' && boardState[6] === 'x') {
    blocksNeeded.push(3)
  }
  if (boardState[1] === 'x' && boardState[7] === 'x') {
    blocksNeeded.push(4)
  }
  if (boardState[2] === 'x' && boardState[8] === 'x') {
    blocksNeeded.push(5)
  }

  // diagonal
  if (boardState[0] === 'x' && boardState[8] === 'x') {
    blocksNeeded.push(4)
  }
  if (boardState[2] === 'x' && boardState[6] === 'x') {
    blocksNeeded.push(4)
  }

  return blocksNeeded
}

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
