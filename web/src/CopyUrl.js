import React, { PureComponent } from 'react';
import Button from './Button';

const ORIGINAL_TEXT = 'Copy URL';

export default class CopyUrl extends PureComponent {
  state = { buttonText: ORIGINAL_TEXT, disabled: false };

  render() {
    if (window.navigator.clipboard) {
      return (
        <Button
          className={ this.props.className }
          onClick={ this.copy }
          disabled={ this.state.disabled }
        >{ this.state.buttonText.padEnd(ORIGINAL_TEXT.length, '\u00a0') }</Button>
      );
    } else {
      return null;
    }
  }
  copy = async () => {
    try {
      await window.navigator.clipboard.writeText(window.location.href)
      this.setState({ buttonText: 'Copied!' });
      window.setTimeout(() => {
        this.setState({ buttonText: ORIGINAL_TEXT });
      }, 1000);
    } catch (e) {
      window.alert('Clipboard write failed. This application may not have permission to access the clipboard. Please copy the URL directly from the address bar.');
      this.setState({ disabled: true });
    }
  }
}
