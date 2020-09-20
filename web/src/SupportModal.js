import React, { useContext } from 'react';
import Banner from './Banner';
import Button from './Button';
import Modal from './Modal';
import ThemeContext from './ThemeContext';
import ButtonLink from './ButtonLink';
import styles from './SupportModal.module.css';

export default ({ onClose }) => {
  const { getActiveColorOrFallback } = useContext(ThemeContext);
  const tweetIntentUrl = 'https://twitter.com/intent/tweet' +
    '?text=' + encodeURIComponent('Check out my personal development environment theme:') +
    '&url=' + encodeURIComponent(window.location.href) +
    '&via=themerdev';
  return (
    <Modal onClose={ onClose } footer={ (
      <Button
        secondary
        onClick={ onClose }
      >Close</Button>
    ) }>
      <Banner color={ getActiveColorOrFallback(['accent3']) }>
        Thank you for using themer!
      </Banner>
      <p
        className={ styles.prompt }
        style={{ color: getActiveColorOrFallback(['shade7']) }}
      >
        Share a direct link to your theme's color configuration:
      </p>
      <ButtonLink
        href={ tweetIntentUrl }
        target="_blank"
        rel="noopener noreferrer"
        external={ true }
        onClick={ () => window.__ssa__log('click tweet button') }
      >Tweet</ButtonLink>
      <p
        className={ styles.prompt }
        style={{ color: getActiveColorOrFallback(['shade7']) }}
      >
        Follow @themerdev on Twitter for new themes, wallpapers, and features as soon as they launch:
      </p>
      <ButtonLink
        href="https://twitter.com/intent/follow?screen_name=themerdev"
        target="_blank"
        rel="noopener noreferrer"
        external={ true }
        onClick={ () => window.__ssa__log('click follow button') }
        >Follow</ButtonLink>
    </Modal>
  );
}
