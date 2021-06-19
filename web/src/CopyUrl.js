import { useState } from 'react';
import Button from './Button';

const ORIGINAL_TEXT = 'Copy URL';

const CopyUrl = ({ className }) => {
  const [buttonText, setButtonText] = useState(ORIGINAL_TEXT);
  const [disabled, setDisabled] = useState(false);

  const copy = async () => {
    try {
      await window.navigator.clipboard.writeText(window.location.href);
      setButtonText('Copied!');
      window.setTimeout(() => {
        setButtonText(ORIGINAL_TEXT);
      }, 1000);
    } catch (e) {
      window.alert(
        'Clipboard write failed. This application may not have permission to access the clipboard. Please copy the URL directly from the address bar.',
      );
      setDisabled(true);
    }
  };

  if (window.navigator.clipboard) {
    return (
      <Button
        className={className}
        onClick={() => {
          copy();
          window.__ssa__log('copy URL');
        }}
        disabled={disabled}
      >
        {buttonText.padEnd(ORIGINAL_TEXT.length, '\u00a0')}
      </Button>
    );
  } else {
    return null;
  }
};

export default CopyUrl;
