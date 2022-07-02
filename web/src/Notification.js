import { useContext, useState, useEffect } from 'react';
import styles from './Notification.module.css';
import ThemeContext from './ThemeContext';
import { CloseIcon } from './Icons';

const Notification = () => {
  const [message, setMessage] = useState('');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const messageListener = (evt) => {
      setMessage(evt.detail);
      setVisible(true);
    };
    window.addEventListener('notificationmessage', messageListener);
    return () => {
      window.removeEventListener('notificationmessage', messageListener);
    };
  });

  const { getActiveColorOrFallback } = useContext(ThemeContext);
  return (
    <span className={[styles.wrapper, visible ? styles.visible : ''].join(' ')}>
      {message ? (
        <span
          className={styles.notification}
          style={{
            backgroundColor: getActiveColorOrFallback(['shade1'], true),
            color: getActiveColorOrFallback(['accent7']),
          }}
        >
          {message}
          <button
            aria-label='Dismiss'
            className={styles.dismiss}
            style={{
              '--dismiss-resting-color': getActiveColorOrFallback(['accent7']),
              '--dismiss-hover-color': getActiveColorOrFallback(['shade7']),
              '--dismiss-active-color': getActiveColorOrFallback(['shade5']),
            }}
            onClick={() => {
              setVisible(false);
              window.__ssa__log('dismiss update notification');
            }}
          >
            <CloseIcon />
          </button>
        </span>
      ) : null}
    </span>
  );
};

export default Notification;
