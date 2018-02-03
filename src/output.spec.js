const colors = require('colors')
const {formatOutput} = require('./output')

describe('output', () => {
  it('returns a formatted, red string if price has decreased', () => {
    const data = {
      id: 'omisego',
      symbol: 'OMG',
      value: '14.226',
      percentageChange: { hour1: '0.37', hour24: '-10.88' }
    }

    expect(formatOutput(data)).toEqual(colors.red('OMG: 14.226 ⬇️ -10.88%'))
  })

  it('returns a formatted, green string if price has not decreased', () => {
    const data = {
      id: 'omisego',
      symbol: 'OMG',
      value: '14.226',
      percentageChange: { hour1: '0.37', hour24: '10.88' }
    }

    expect(formatOutput(data)).toEqual(colors.green('OMG: 14.226 ⬆️ 10.88%'))
  })
})
