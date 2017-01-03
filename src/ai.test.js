import * as ai from './ai'

describe('ai', () => {
  describe('getMatrix', () => {
    it('should work', () => {
      const columns = 3
      const rows = 2
      const board = [
        'x', null, 'o',
        'o', null, 'x',
      ]
      expect(ai.getMatrix(board, columns, rows)).toEqual([
        { y: 0, x: 0, value: 'x' },
        { y: 0, x: 1, value: null },
        { y: 0, x: 2, value: 'o' },
        { y: 1, x: 0, value: 'o' },
        { y: 1, x: 1, value: null },
        { y: 1, x: 2, value: 'x' },
      ])
    })
  })

  describe('getBlocksNeeded', () => {
    fdescribe('diagonal', () => {
      it('should work', () => {
        const columns = 3
        const rows = 3
        let board = [
          'x', null, null,
          null, null, null,
          null, null, 'x',
        ]
        expect(ai.getBlocksNeeded(board, columns, rows)).toEqual([4])

        board = [
          null, null, 'x',
          null, null, null,
          'x', null, null,
        ]
        expect(ai.getBlocksNeeded(board, columns, rows)).toEqual([4])
      })
    })

    describe('vertical', () => {
      it('should work', () => {
        let columns = 3
        let rows = 2
        let board = [
          'x', null, 'x',
          'x', null, 'x',
        ]
        expect(ai.getBlocksNeeded(board, columns, rows)).toEqual([1, 4])

        columns = 4
        rows = 3
        board = [
          'x', null, null, 'x',
          null, null, null, null,
          'x', null, null, 'x',
        ]
        expect(ai.getBlocksNeeded(board, columns, rows)).toEqual([4, 7])
      })
    })

    describe('horizontal', () => {
      it('should work', () => {
        const columns = 3
        let rows = 1
        let board = ['x', null, 'x']

        rows = 3
        expect(ai.getBlocksNeeded(board, columns, rows)).toEqual([1])

        rows = 2
        board = [
          'x', null, 'x',
          'x', null, 'x',
        ]
        expect(ai.getBlocksNeeded(board, columns, rows)).toEqual([1, 4])
      })
    })
  })
})
