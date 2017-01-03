import * as ai from './ai'

describe('ai', () => {
  describe('getBlocksNeeded', () => {
    it('should work', () => {
      const columns = 3
      const rows = 0
      let board = ['x', null, 'x']
      expect(ai.getBlocksNeeded(board, columns, rows)).toEqual([1])
      board = [
        'x', null, 'x',
        'x', null, 'x',
      ]
      expect(ai.getBlocksNeeded(board, columns, rows)).toEqual([1, 4])
      board = [
        'x', null, null,
        null, null, null,
        null, null, 'x',
      ]
      expect(ai.getBlocksNeeded(board, columns, rows)).toEqual([4])
      board = [
        'x', null, null,
        null, null, null,
        'x', null, null,
      ]
      expect(ai.getBlocksNeeded(board, columns, rows)).toEqual([3])
    })
  })
})
