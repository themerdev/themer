import { createContext, useState } from 'react';

const toDisplayDecimal = (value) => value / 100;
const toValueDecimal = (display) => Math.round(+display * 100);

const toDisplayZeroDecimal = (value) => value;
const toValueZeroDecimal = (display) => display;

const currencyOptions = [
  {
    label: 'AUD',
    isoCode: 'aud',
    symbol: '$',
    toDisplay: toDisplayDecimal,
    toValue: toValueDecimal,
  },
  {
    label: 'CAD',
    isoCode: 'cad',
    symbol: '$',
    toDisplay: toDisplayDecimal,
    toValue: toValueDecimal,
  },
  {
    label: 'CHF',
    isoCode: 'chf',
    symbol: 'CHF',
    toDisplay: toDisplayDecimal,
    toValue: toValueDecimal,
  },
  {
    label: 'CNY',
    isoCode: 'cny',
    symbol: 'CN¥',
    toDisplay: toDisplayDecimal,
    toValue: toValueDecimal,
  },
  {
    label: 'EUR',
    isoCode: 'eur',
    symbol: '€',
    toDisplay: toDisplayDecimal,
    toValue: toValueDecimal,
  },
  {
    label: 'GBP',
    isoCode: 'gbp',
    symbol: '£',
    toDisplay: toDisplayDecimal,
    toValue: toValueDecimal,
  },
  {
    label: 'HKD',
    isoCode: 'hkd',
    symbol: 'HK$',
    toDisplay: toDisplayDecimal,
    toValue: toValueDecimal,
  },
  {
    label: 'JPY',
    isoCode: 'jpy',
    symbol: '¥',
    toDisplay: toDisplayZeroDecimal,
    toValue: toValueZeroDecimal,
  },
  {
    label: 'KRW',
    isoCode: 'krw',
    symbol: '₩',
    toDisplay: toDisplayZeroDecimal,
    toValue: toValueZeroDecimal,
  },
  {
    label: 'MXN',
    isoCode: 'mxn',
    symbol: '$',
    toDisplay: toDisplayDecimal,
    toValue: toValueDecimal,
  },
  {
    label: 'NOK',
    isoCode: 'nok',
    symbol: 'NOK',
    toDisplay: toDisplayDecimal,
    toValue: toValueDecimal,
  },
  {
    label: 'NZD',
    isoCode: 'nzd',
    symbol: '$',
    toDisplay: toDisplayDecimal,
    toValue: toValueDecimal,
  },
  {
    label: 'SEK',
    isoCode: 'sek',
    symbol: 'SEK',
    toDisplay: toDisplayDecimal,
    toValue: toValueDecimal,
  },
  {
    label: 'SGD',
    isoCode: 'sgd',
    symbol: 'S$',
    toDisplay: toDisplayDecimal,
    toValue: toValueDecimal,
  },
  {
    label: 'USD',
    isoCode: 'usd',
    symbol: '$',
    toDisplay: toDisplayDecimal,
    toValue: toValueDecimal,
  },
];

const PriceContext = createContext();

export const PriceProvider = ({ children }) => {
  const [price, setPrice] = useState({ code: 'usd', amount: 900 });
  const selectedCurrency = currencyOptions.find(
    ({ isoCode }) => isoCode === price.code,
  );
  return (
    <PriceContext.Provider
      value={{
        price,
        setPrice,
        currencyOptions,
        selectedCurrency,
      }}
    >
      {children}
    </PriceContext.Provider>
  );
};

export default PriceContext;
