import { RadioIcon } from './Icons';
import styles from './Radio.module.css';

const Radio = ({ className, color, value, onChange, label }) => (
  <label
    className={[styles.wrapper, className].join(' ')}
    style={{ color }}
    tabIndex='0'
    onKeyDown={(evt) => {
      if (evt.key === ' ' || evt.key === 'Enter') {
        evt.preventDefault();
        onChange(true);
      }
    }}
  >
    <input
      type='radio'
      className={styles.input}
      checked={value}
      onChange={(evt) => onChange(evt.target.checked)}
    />
    <RadioIcon selected={value} />
    <span className={styles.label}>{label}</span>
  </label>
);

export default Radio;
