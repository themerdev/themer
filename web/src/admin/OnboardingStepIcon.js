import { useContext } from 'react';
import ThemeContext from '../ThemeContext';

const OnboardingStepIcon = ({ disabled, completed }) => {
  const { getActiveColorOrFallback } = useContext(ThemeContext);
  const colorKey =
    completed && !disabled ? 'accent3' : disabled ? 'shade3' : 'shade5';
  return (
    <svg
      style={{ color: getActiveColorOrFallback([colorKey]) }}
      width='44'
      height='44'
      viewBox='0 0 44 44'
      xmlns='http://www.w3.org/2000/svg'
    >
      <circle
        cx='22'
        cy='22'
        r='20'
        stroke='currentColor'
        strokeWidth='2'
        fill='none'
      />
      {disabled ? (
        <>
          <rect
            x='13'
            y='20'
            width='18'
            height='12'
            stroke='currentColor'
            strokeWidth='2'
            fill='none'
          />
          <path
            d='M16,20 L16,17 C 16 8, 28 8, 28 17 L 28,20'
            stroke='currentColor'
            strokeWidth='2'
            fill='none'
          />
        </>
      ) : null}
      {!disabled && completed ? (
        <path
          d='M13,23 l6,6 l12,-12'
          stroke='currentColor'
          strokeWidth='2'
          fill='none'
        />
      ) : null}
    </svg>
  );
};

export default OnboardingStepIcon;
