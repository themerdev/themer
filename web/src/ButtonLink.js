import { ExternalIcon } from './Icons';
import styles from './ButtonLink.module.css';
import useButton from './useButton';

const ButtonLink = ({
  className,
  small,
  special,
  secondary,
  disabled,
  external,
  children,
  ...props
}) => {
  const [fullClassName, styleProperty] = useButton(className, {
    small,
    special,
    secondary,
    disabled,
  });
  return (
    <a className={fullClassName} style={styleProperty} {...props}>
      {children}
      {external ? <ExternalIcon className={styles.externalIcon} /> : null}
    </a>
  );
};

export default ButtonLink;
