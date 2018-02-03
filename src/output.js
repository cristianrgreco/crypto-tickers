const colors = require('colors')

const formatOutput = data => {
  const {symbol, value, percentageChange: {hour24}} = data

  const color = getColour(hour24)
  const arrow = getArrow(hour24)

  return color(`${symbol}: ${value} ${arrow} ${hour24}%`)
}

const getColour = hour24 => hasDecreased(hour24) ? colors.red : colors.green

const getArrow = hour24 => hasDecreased(hour24) ? '⬇️' : '⬆️'

const hasDecreased = value => value.charAt(0) === '-'

module.exports = {formatOutput}
