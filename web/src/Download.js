import React, { useState, useContext } from 'react';
import Checkbox from './Checkbox';
import styles from './Download.module.css';
import Button from './Button';
import generateZip from './generateZip';
import saveAs from 'file-saver';
import ThemeContext from './ThemeContext';
import PriceInput from './PriceInput';
import CheckoutModal from './CheckoutModal';
import SupportModal from './SupportModal';

export default () => {
  const [alacritty, setAlacritty] = useState(false);
  const [alfred, setAlfred] = useState(false);
  const [atomSyntax, setAtomSyntax] = useState(false);
  const [atomUi, setAtomUi] = useState(false);
  const [bbedit, setBbedit] = useState(false);
  const [brave, setBrave] = useState(false);
  const [chrome, setChrome] = useState(false);
  const [cmd, setCmd] = useState(false);
  const [conemu, setConemu] = useState(false);
  const [css, setCss] = useState(false);
  const [emacs, setEmacs] = useState(false);
  const [firefox, setFirefox] = useState(false);
  const [gnomeTerminal, setGnomeTerminal] = useState(false);
  const [hyper, setHyper] = useState(false);
  const [iterm, setIterm] = useState(false);
  const [jetbrains, setJetbrains] = useState(false);
  const [kitty, setKitty] = useState(false);
  const [konsole, setKonsole] = useState(false);
  const [prism, setPrism] = useState(false);
  const [sketchPalettes, setSketchPalettes] = useState(false);
  const [slack, setSlack] = useState(false);
  const [sublimeText, setSublimeText] = useState(false);
  const [termite, setTermite] = useState(false);
  const [tmux, setTmux] = useState(false);
  const [vim, setVim] = useState(false);
  const [vimLightline, setVimLightline] = useState(false);
  const [visualStudio, setVisualStudio] = useState(false);
  const [vscode, setVscode] = useState(false);
  const [wallpaperBlockWave, setWallpaperBlockWave] = useState(false);
  const [wallpaperBurst, setWallpaperBurst] = useState(false);
  const [wallpaperDiamonds, setWallpaperDiamonds] = useState(false);
  const [wallpaperOctagon, setWallpaperOctagon] = useState(false);
  const [wallpaperShirts, setWallpaperShirts] = useState(false);
  const [wallpaperTriangles, setWallpaperTriangles] = useState(false);
  const [wallpaperTrianglify, setWallpaperTrianglify] = useState(false);
  const [windowsTerminal, setWindowsTerminal] = useState(false);
  const [wox, setWox] = useState(false);
  const [xcode, setXcode] = useState(false);
  const [xresources, setXresources] = useState(false);

  const { getActiveColorOrFallback, preparedColorSet, cliColorSet } = useContext(ThemeContext);

  const [price, setPrice] = useState({ code: 'usd', amount: 900 });
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);
  const [showSupportModal, setShowSupportModal] = useState(false);

  const download = async () => {
    const selections = {
      alacritty,
      alfred,
      atomSyntax,
      atomUi,
      bbedit,
      brave,
      chrome,
      cmd,
      conemu,
      css,
      emacs,
      firefox,
      gnomeTerminal,
      hyper,
      iterm,
      jetbrains,
      kitty,
      konsole,
      prism,
      sketchPalettes,
      slack,
      sublimeText,
      termite,
      tmux,
      vim,
      vimLightline,
      visualStudio,
      vscode,
      wallpaperBlockWave,
      wallpaperBurst,
      wallpaperDiamonds,
      wallpaperOctagon,
      wallpaperShirts,
      wallpaperTriangles,
      wallpaperTrianglify,
      windowsTerminal,
      wox,
      xcode,
      xresources,
    };
    const zip = await generateZip(
      selections,
      preparedColorSet,
      window.innerWidth * window.devicePixelRatio,
      window.innerHeight * window.devicePixelRatio,
      window.location.href,
      cliColorSet,
    );
    const contents = await zip.generateAsync({ type: 'blob' })
    saveAs(contents, 'themer.zip');
    window.__ssa__log('download zip', { selections });
    setShowSupportModal(true);
    window.__ssa__log('open support modal');
  };

  return (
    <>
      <div className={ styles.fieldsetWrapper }>
        <fieldset style={{ borderColor: getActiveColorOrFallback(['shade2']) }}>
          <legend style={{ color: getActiveColorOrFallback(['shade5']) }}>Terminals</legend>
          <Checkbox
            value={ alacritty }
            onChange={ () => setAlacritty(!alacritty) }
            label="Alacritty"
            accentSelected
          />
          <Checkbox
            value={ cmd }
            onChange={ () => setCmd(!cmd) }
            label="CMD.exe"
            accentSelected
          />
          <Checkbox
            value={ conemu }
            onChange={ () => setConemu(!conemu) }
            label="ConEmu"
            accentSelected
          />
          <Checkbox
            value={ gnomeTerminal }
            onChange={ () => setGnomeTerminal(!gnomeTerminal) }
            label="GNOME Terminal"
            accentSelected
          />
          <Checkbox
            value={ hyper }
            onChange={ () => setHyper(!hyper) }
            label="Hyper"
            accentSelected
          />
          <Checkbox
            value={ iterm }
            onChange={ () => setIterm(!iterm) }
            label="iTerm"
            accentSelected
          />
          <Checkbox
            value={ kitty }
            onChange={ () => setKitty(!kitty) }
            label="kitty"
            accentSelected
          />
          <Checkbox
            value={ konsole }
            onChange={ () => setKonsole(!konsole) }
            label="Konsole"
            accentSelected
          />
          <Checkbox
            value={ termite }
            onChange={ () => setTermite(!termite) }
            label="Termite"
            accentSelected
          />
          <Checkbox
            value={ windowsTerminal }
            onChange={ () => setWindowsTerminal(!windowsTerminal) }
            label="Windows Terminal"
            accentSelected
          />
        </fieldset>
        <fieldset style={{ borderColor: getActiveColorOrFallback(['shade2']) }}>
          <legend style={{ color: getActiveColorOrFallback(['shade5']) }}>Editors / IDEs</legend>
          <Checkbox
            value={ atomSyntax }
            onChange={ () => setAtomSyntax(!atomSyntax) }
            label="Atom (syntax)"
            accentSelected
          />
          <Checkbox
            value={ atomUi }
            onChange={ () => setAtomUi(!atomUi) }
            label="Atom (UI)"
            accentSelected
          />
          <Checkbox
            value={ bbedit }
            onChange={ () => setBbedit(!bbedit) }
            label="BBEdit"
            accentSelected
          />
          <Checkbox
            value={ emacs }
            onChange={ () => setEmacs(!emacs) }
            label="Emacs"
            accentSelected
          />
          <Checkbox
            value={ jetbrains }
            onChange={ () => setJetbrains(!jetbrains) }
            label="JetBrains"
            accentSelected
          />
          <Checkbox
            value={ vimLightline }
            onChange={ () => setVimLightline(!vimLightline) }
            label="lightline.vim"
            accentSelected
          />
          <Checkbox
            value={ sublimeText }
            onChange={ () => setSublimeText(!sublimeText) }
            label="Sublime Text"
            accentSelected
          />
          <Checkbox
            value={ vim }
            onChange={ () => setVim(!vim) }
            label="Vim"
            accentSelected
          />
          <Checkbox
            value={ visualStudio }
            onChange={ () => setVisualStudio(!visualStudio) }
            label="Visual Studio"
            accentSelected
          />
          <Checkbox
            value={ vscode }
            onChange={ () => setVscode(!vscode) }
            label="VS Code"
            accentSelected
          />
          <Checkbox
            value={ xcode }
            onChange={ () => setXcode(!xcode) }
            label="Xcode"
            accentSelected
          />
        </fieldset>
        <fieldset style={{ borderColor: getActiveColorOrFallback(['shade2']) }}>
          <legend style={{ color: getActiveColorOrFallback(['shade5']) }}>Wallpapers</legend>
          <Checkbox
            value={ wallpaperBlockWave }
            onChange={ () => setWallpaperBlockWave(!wallpaperBlockWave) }
            label="“Block Wave”"
            accentSelected
          />
          <Checkbox
            value={ wallpaperBurst }
            onChange={ () => setWallpaperBurst(!wallpaperBurst) }
            label="“Burst”"
            accentSelected
          />
          <Checkbox
            value={ wallpaperDiamonds }
            onChange={ () => setWallpaperDiamonds(!wallpaperDiamonds) }
            label="“Diamonds”"
            accentSelected
          />
          <Checkbox
            value={ wallpaperOctagon }
            onChange={ () => setWallpaperOctagon(!wallpaperOctagon) }
            label="“Octagon”"
            accentSelected
          />
          <Checkbox
            value={ wallpaperShirts }
            onChange={ () => setWallpaperShirts(!wallpaperShirts) }
            label="“Shirts”"
            accentSelected
          />
          <Checkbox
            value={ wallpaperTriangles }
            onChange={ () => setWallpaperTriangles(!wallpaperTriangles) }
            label="“Triangles”"
            accentSelected
          />
          <Checkbox
            value={ wallpaperTrianglify }
            onChange={ () => setWallpaperTrianglify(!wallpaperTrianglify) }
            label="“Trianglify”"
            accentSelected
          />
          <div
            className={ styles.wallpaperHint }
            style={{ color: getActiveColorOrFallback(['shade3']) }}
          >
            Wallpapers will be rendered at the browser viewport's resolution.
          </div>
          { window.document.fullscreenEnabled ? (
            <Button
              className={ styles.fullscreen }
              small
              onClick={ () => {
                window.document.documentElement.requestFullscreen();
                window.__ssa__log('go fullscreen');
              } }
            >Go fullscreen</Button>
          ) : null }
        </fieldset>
        <fieldset style={{ borderColor: getActiveColorOrFallback(['shade2']) }}>
          <legend style={{ color: getActiveColorOrFallback(['shade5']) }}>Other</legend>
          <Checkbox
            value={ alfred }
            onChange={ () => setAlfred(!alfred) }
            label="Alfred.app"
            accentSelected
          />
          <Checkbox
            value={ brave }
            onChange={ () => setBrave(!brave) }
            label="Brave"
            accentSelected
          />
          <Checkbox
            value={ chrome }
            onChange={ () => setChrome(!chrome) }
            label="Chrome"
            accentSelected
          />
          <Checkbox
            value={ css }
            onChange={ () => setCss(!css) }
            label="CSS"
            accentSelected
          />
          <Checkbox
            value={ firefox }
            onChange={ () => setFirefox(!firefox) }
            label="Firefox"
            accentSelected
          />
          <Checkbox
            value={ prism }
            onChange={ () => setPrism(!prism) }
            label="Prism"
            accentSelected
          />
          <Checkbox
            value={ sketchPalettes }
            onChange={ () => setSketchPalettes(!sketchPalettes) }
            label="Sketch palettes"
            accentSelected
          />
          <Checkbox
            value={ slack }
            onChange={ () => setSlack(!slack) }
            label="Slack sidebar"
            accentSelected
          />
          <Checkbox
            value={ tmux }
            onChange={ () => setTmux(!tmux) }
            label="tmux"
            accentSelected
          />
          <Checkbox
            value={ wox }
            onChange={ () => setWox(!wox) }
            label="Wox"
            accentSelected
          />
          <Checkbox
            value={ xresources }
            onChange={ () => setXresources(!xresources) }
            label="Xresources"
            accentSelected
          />
        </fieldset>
      </div>
      <div className={ styles.inputs }>
        <span style={{ color: getActiveColorOrFallback(['shade6']) }}>Pay what you want:</span>
        <PriceInput className={ styles.priceInput } value={ price } onChange={ price => {
          setPrice(price);
          window.__ssa__log('change price', { price });
        } } />
        <Button
          special
          disabled={ !preparedColorSet.dark && !preparedColorSet.light }
          onClick={ () => {
            if (price.amount > 0) {
              setShowCheckoutModal(true);
              window.__ssa__log('open checkout modal');
            }
            else {
              download();
            }
          } }
        >{ price.amount > 0 ? 'Purchase' : 'Download' }</Button>
      </div>
      { showCheckoutModal ? (
        <CheckoutModal
          price={ price }
          onClose={ () => {
            setShowCheckoutModal(false);
            window.__ssa__log('close checkout modal');
          } }
          onComplete={ () => {
            setShowCheckoutModal(false);
            download();
          } }
        />
      ) : null }
      { showSupportModal ? (
        <SupportModal
          onClose={ () => {
            setShowSupportModal(false);
            window.__ssa__log('close support modal');
          } }
        />
      ) : null }
    </>
  );
}
