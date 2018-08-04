export const formatNumber = number => {
  if (typeof number !== 'number') {
    number = Number(number)
    if (typeof number !== 'number') {
      return 0
    }
  }
  number = String(number)
  const l = number.length
  if (l > 5) {
    number = number.slice(0, l - 4) + '万'
  }
  return number
}

export const noop = () => {}