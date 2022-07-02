import { useContext } from 'react';
import PriceContext from './PriceContext';

import styles from './Price.module.css';

const Price = ({ amount }) => {
  const { selectedCurrency: currency } = useContext(PriceContext);
  return (
    <span>
      <span className={styles.symbol}>{currency.symbol}</span>
      {currency.toDisplay(amount)}
    </span>
  );
};

export default Price;
