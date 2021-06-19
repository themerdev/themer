import { useContext } from 'react';
import styles from './PriceInput.module.css';
import ThemeContext from './ThemeContext';

const toDisplayDecimal = (value) => value / 100;
const toValueDecimal = (display) => Math.round(+display * 100);

const toDisplayZeroDecimal = (value) => value;
const toValueZeroDecimal = (display) => display;

export const currencyOptions = [
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

const triangle = (color) =>
  `
<svg xmlns="http://www.w3.org/2000/svg" width="8" height="6">
  <path d="M0,0 L8,0 L4,6 Z" stroke="none" fill="${color}" />
</svg>
`.trim();

const PriceInput = ({ className, value: { amount, code }, onChange }) => {
  const { getActiveColorOrFallback } = useContext(ThemeContext);
  const option = currencyOptions.find(({ isoCode }) => isoCode === code);
  return (
    <span className={className}>
      <label
        className={styles.amountLabel}
        style={{ color: getActiveColorOrFallback(['accent3']) }}
      >
        <span className={styles.symbol}>{option.symbol}</span>
        <input
          className={styles.amountInput}
          style={{ color: getActiveColorOrFallback(['shade6']) }}
          type='number'
          min='0'
          value={option.toDisplay(amount)}
          onChange={(evt) =>
            onChange({
              amount: option.toValue(evt.target.value),
              code,
            })
          }
        />
      </label>
      <select
        className={styles.currencySelect}
        style={{
          borderColor: getActiveColorOrFallback(['accent3']),
          color: getActiveColorOrFallback(['shade6']),
          backgroundImage: `url('data:image/svg+xml;utf8,${encodeURIComponent(
            triangle(getActiveColorOrFallback(['accent3'])),
          )}')`,
        }}
        value={code}
        onChange={(evt) =>
          onChange({
            amount,
            code: evt.target.value,
          })
        }
      >
        {currencyOptions.map((option) => (
          <option key={option.isoCode} value={option.isoCode}>
            {option.label}
          </option>
        ))}
      </select>
    </span>
  );
};

export default PriceInput;
