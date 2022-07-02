import { forwardRef } from 'react';
import useButton from './useButton';

const Button = forwardRef(
  (
    {
      className,
      small,
      special,
      secondary,
      disabled,
      onClick,
      children,
      ...props
    },
    buttonRef,
  ) => {
    const [fullClassName, styleProperty] = useButton(className, {
      small,
      special,
      secondary,
      disabled,
    });
    return (
      <button
        className={fullClassName}
        data-text={children}
        style={styleProperty}
        onClick={onClick}
        disabled={disabled}
        ref={buttonRef}
        {...props}
      >
        {children}
      </button>
    );
  },
);

export default Button;
