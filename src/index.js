const fetch = require('node-fetch')
const {fetchTicker} = require('./api')
const {formatOutput} = require('./output')

if (!process.env.TICKERS) {
  console.error('Usage: TICKERS=<ticker1,ticker2> yarn start')
  process.exit(1)
}

(async () => {
  const tickers = process.env.TICKERS.split(',')
  const results = await Promise.all(tickers.map(ticker => fetchTicker(fetch, ticker)))
  results.forEach(result => console.log(formatOutput(result)))
})()
