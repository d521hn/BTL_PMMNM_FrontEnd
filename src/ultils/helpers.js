export const formatPrice = number => Math.round(number / 1000) * 1000

export const countPrice = (percent, priceOld) => {
  return priceOld * (100 - percent) / 100
}

export const numberWithCommas = (num) => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")