import Freecurrencyapi from '@everapi/freecurrencyapi-js';

const freecurrencyapi = new Freecurrencyapi('fca_live_nG3lZdWWybIt2mMzxEwfQM3CtXRyd3tDREf79M1v');

// convert_Currrency("USD", "INR", 3)

export async function convert_Currrency(fromcurrency, tocurrency, units) {
  const res = await freecurrencyapi.latest({
    base_currency: fromcurrency,
    currencies: tocurrency
  });
  const multiplier = res.data[tocurrency];
  // console.log(multiplier)
  return multiplier*units
}