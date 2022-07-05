import { useContext } from 'react';
import Modal from './Modal';
import ThemeContext from './ThemeContext';

const LoadingModal = () => {
  const { getActiveColorOrFallback } = useContext(ThemeContext);
  return (
    <Modal>
      <p style={{ color: getActiveColorOrFallback('shade7') }}>Loading...</p>
    </Modal>
  );
};

export default LoadingModal;
