export const resultPrice = (price, discount) => {
  let cleanedPrice = price.replace(/\s+/g, '');

  let priceToNumber = Number(cleanedPrice);

  if (!discount) {
    return cleanedPrice;
  }

  if (discount === 0) {
    return cleanedPrice;
  }
  return String(Math.round(priceToNumber - (priceToNumber / 100) * discount));
};
