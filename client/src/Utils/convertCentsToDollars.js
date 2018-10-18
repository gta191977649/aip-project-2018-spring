import formatMoney from './formatMoney';

export default function convertCentsToDollars(cents){
  let dollarDecimal = (cents / 100).toFixed(2);
  return formatMoney(dollarDecimal);
}