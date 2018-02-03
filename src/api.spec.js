const {fetchTicker} = require('./api')
const apiFixture = require('./fixtures/api-fixture')

describe('api', () => {
  it('fetches data for a given id', async () => {
    const mockFetch = jest.fn()
      .mockReturnValueOnce(Promise.resolve({ json: jest.fn()
        .mockReturnValueOnce(Promise.resolve(apiFixture))}))

    const expected = {
      id: 'ethereum',
      symbol: 'ETH',
      value: '970.938',
      percentageChange: {
        hour1: '-0.1',
        hour24: '9.0'
      }
    }
    const actual = await fetchTicker(mockFetch, 'ethereum')

    expect(actual).toEqual(expected)
    expect(mockFetch).toHaveBeenCalledWith('https://api.coinmarketcap.com/v1/ticker/ethereum/')
  })
})
