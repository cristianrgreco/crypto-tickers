const fetch = require('node-fetch')
const {fetchTicker} = require('./api')

if (!process.env.TICKERS) {
  console.error('Usage: TICKERS=<ticker1,ticker2> yarn start')
  process.exit(1)
}

(async () => {
  const tickers = process.env.TICKERS.split(',')
  const results = await Promise.all(
    tickers.map(ticker => fetchTicker(fetch, ticker))
  )
  console.log(results)
})()
