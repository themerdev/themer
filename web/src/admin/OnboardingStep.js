import classNames from 'classnames';
import { useContext } from 'react';
import ThemeContext from '../ThemeContext';
import styles from './OnboardingStep.module.css';
import OnboardingStepIcon from './OnboardingStepIcon';

const OnboardingStep = ({ disabled, completed, title, detail, children }) => {
  const { getActiveColorOrFallback } = useContext(ThemeContext);
  return (
    <div className={styles.step}>
      <OnboardingStepIcon disabled={disabled} completed={completed} />
      <div className={styles.header}>
        <span
          className={classNames({ [styles.completed]: completed })}
          style={{
            color: completed ? getActiveColorOrFallback(['shade3']) : null,
          }}
        >
          {title}
        </span>
        {detail}
      </div>
      {children ? <div className={styles.content}>{children}</div> : null}
    </div>
  );
};

export default OnboardingStep;
