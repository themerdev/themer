import { useContext } from 'react';
import PriceContext from './PriceContext';
import styles from './PriceInput.module.css';
import ThemeContext from './ThemeContext';

const triangle = (color) =>
  `
<svg xmlns="http://www.w3.org/2000/svg" width="8" height="6">
  <path d="M0,0 L8,0 L4,6 Z" stroke="none" fill="${color}" />
</svg>
`.trim();

const PriceInput = ({ className }) => {
  const { getActiveColorOrFallback } = useContext(ThemeContext);
  const {
    currencyOptions,
    selectedCurrency: option,
    finalPrice: { amount, code },
    setUserPrice,
    isFixedPrice,
  } = useContext(PriceContext);
  const onChange = (price) => {
    setUserPrice(price);
    window.__ssa__log('change price', { price });
  };
  return (
    <span className={className}>
      <label
        className={[styles.amountLabel, isFixedPrice && styles.fixed]
          .filter(Boolean)
          .join(' ')}
        style={{ color: getActiveColorOrFallback(['accent3']) }}
      >
        <span className={styles.symbol}>{option.symbol}</span>
        <input
          className={styles.amountInput}
          style={{ color: getActiveColorOrFallback(['shade6']) }}
          type='number'
          min='0'
          value={option.toDisplay(amount)}
          disabled={isFixedPrice}
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
