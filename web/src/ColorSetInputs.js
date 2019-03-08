import React, { useContext } from 'react';
import styles from './ColorSetInputs.module.css';
import ColorInput from './ColorInput';
import Checkbox from './Checkbox';
import Tabs from './Tabs';
import ThemeContext from './ThemeContext';

export default () => {
  const {
    activeCalculateIntermediaryShades,
    setActiveCalculateIntermediaryShades,
    activeColorSet,
    setActiveColorSet,
  } = useContext(ThemeContext);
  const isDark = activeColorSet === 'dark';
  return (
    <Tabs>
      { ({ tabClassName, getTabStyle, contentClassName, contentStyle }) => (
        <>
          <div>
            <button
              className={ tabClassName }
              style={ getTabStyle(isDark) }
              onClick={ () => setActiveColorSet('dark') }
            >Dark Variant</button>
            <button
              className={ tabClassName }
              style={ getTabStyle(!isDark) }
              onClick={ () => setActiveColorSet('light') }
            >Light Variant</button>
          </div>
          <div className={ `${styles.inputContainer} ${contentClassName}` } style={ contentStyle }>
            <ColorInput className={ styles.shade0 } colorKey="shade0" help="background color" />
            { !activeCalculateIntermediaryShades && (
              <>
                <ColorInput className={ styles.shade1 } colorKey="shade1" help="UI" />
                <ColorInput className={ styles.shade2 } colorKey="shade2" help="UI, text selection" />
                <ColorInput className={ styles.shade3 } colorKey="shade3" help="UI, code comments" />
                <ColorInput className={ styles.shade4 } colorKey="shade4" help="UI" />
                <ColorInput className={ styles.shade5 } colorKey="shade5" help="UI" />
                <ColorInput className={ styles.shade6 } colorKey="shade6" help="foreground text" />
              </>
            ) }
            <ColorInput
              className={ [styles.shade7, activeCalculateIntermediaryShades ? styles.collapsed : ''].join(' ') }
              colorKey="shade7"
              help="foreground text"
            />
            <Checkbox
              className={ styles.checkbox }
              label="calculate intermediary shades"
              value={ activeCalculateIntermediaryShades }
              onChange={ setActiveCalculateIntermediaryShades }
            />
            <ColorInput className={ styles.accent0 } colorKey="accent0" help="error, vcs deletion" />
            <ColorInput className={ styles.accent1 } colorKey="accent1" help="syntax" />
            <ColorInput className={ styles.accent2 } colorKey="accent2" help="warning, vcs modification" />
            <ColorInput className={ styles.accent3 } colorKey="accent3" help="success, vcs addition" />
            <ColorInput className={ styles.accent4 } colorKey="accent4" help="syntax" />
            <ColorInput className={ styles.accent5 } colorKey="accent5" help="syntax" />
            <ColorInput className={ styles.accent6 } colorKey="accent6" help="syntax, caret/cursor" />
            <ColorInput className={ styles.accent7 } colorKey="accent7" help="syntax, special" />
          </div>
        </>
      ) }
    </Tabs>
  );
};
