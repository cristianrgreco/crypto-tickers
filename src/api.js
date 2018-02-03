const {coinMarketCap: {apiUrl}} = require('./conf')

const fetchTicker = async (fetch, id) => {
  const response = await fetch(`${apiUrl}/${id}/`)
  const json = (await response.json())[0]

  return {
    id: json.id,
    symbol: json.symbol,
    value: json.price_usd,
    percentageChange: {
      hour1: json.percent_change_1h,
      hour24: json.percent_change_24h
    }
  }
}

module.exports = {fetchTicker}
