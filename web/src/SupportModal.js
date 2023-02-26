import { useContext } from 'react';
import Banner from './Banner';
import Button from './Button';
import Modal from './Modal';
import ThemeContext from './ThemeContext';
import ButtonLink from './ButtonLink';
import styles from './SupportModal.module.css';

const SupportModal = ({ onClose }) => {
  const { getActiveColorOrFallback } = useContext(ThemeContext);
  return (
    <Modal
      onClose={onClose}
      footer={
        <Button secondary onClick={onClose}>
          Close
        </Button>
      }
    >
      <Banner color={getActiveColorOrFallback(['accent3'])}>
        Thank you for using themer!
      </Banner>
      <p
        className={styles.prompt}
        style={{ color: getActiveColorOrFallback(['shade7']) }}
      >
        Follow @themer on Mastodon for new themes, wallpapers, and features as
        soon as they launch:
      </p>
      <ButtonLink
        href='https://fosstodon.org/@themer'
        target='_blank'
        rel='noopener noreferrer'
        external={true}
        onClick={() => window.__ssa__log('click follow button')}
      >
        Follow
      </ButtonLink>
    </Modal>
  );
};

export default SupportModal;
