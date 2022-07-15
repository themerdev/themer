import { useState, useContext, useEffect } from 'react';
import Checkbox from './Checkbox';
import styles from './Download.module.css';
import Button from './Button';
import generateZip from './generateZip';
import saveAs from 'file-saver';
import ThemeContext from './ThemeContext';
import PriceInput from './PriceInput';
import CheckoutModal from './CheckoutModal';
import SupportModal from './SupportModal';
import PriceContext from './PriceContext';
import useViewportDimensions from './useViewportDimensions';
import LoadingModal from './LoadingModal';

const templateTitles = {
  alacritty: 'Alacritty',
  cmd: 'CMD.exe',
  conemu: 'ConEmu',
  gnomeTerminal: 'GNOME Terminal',
  hyper: 'Hyper',
  iterm: 'iTerm',
  kitty: 'kitty',
  konsole: 'Konsole',
  terminal: 'Terminal.app',
  terminator: 'Terminator',
  termite: 'Termite',
  windowsTerminal: 'Windows Terminal',
  atomSyntax: 'Atom (syntax)',
  atomUi: 'Atom (UI)',
  bbedit: 'BBEdit',
  emacs: 'Emacs',
  jetbrains: 'JetBrains',
  vimLightline: 'lightline.vim',
  sublimeText: 'Sublime Text',
  vim: 'Vim',
  visualStudio: 'Visual Studio',
  vscode: 'VS Code',
  xcode: 'Xcode',
  wallpaperBlockWave: 'Block Wave',
  wallpaperBurst: 'Burst',
  wallpaperCircuits: 'Circuits',
  wallpaperDiamonds: 'Diamonds',
  wallpaperDotGrid: 'Dot Grid',
  wallpaperOctagon: 'Octagon',
  wallpaperShirts: 'Shirts',
  wallpaperTriangles: 'Triangles',
  wallpaperTrianglify: 'Trianglify',
  alfred: 'Alfred.app',
  brave: 'Brave',
  chrome: 'Chrome',
  css: 'CSS',
  firefox: 'Firefox',
  kdePlasmaColors: 'KDE Plasma Colors',
  keypirinha: 'Keypirinha',
  prism: 'Prism',
  sketchPalettes: 'Sketch palettes',
  slack: 'Slack sidebar',
  tmux: 'tmux',
  wox: 'Wox',
  xresources: 'Xresources',
};

const Download = () => {
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
  const [kdePlasmaColors, setKdePlasmaColors] = useState(false);
  const [keypirinha, setKeypirinha] = useState(false);
  const [kitty, setKitty] = useState(false);
  const [konsole, setKonsole] = useState(false);
  const [prism, setPrism] = useState(false);
  const [sketchPalettes, setSketchPalettes] = useState(false);
  const [slack, setSlack] = useState(false);
  const [sublimeText, setSublimeText] = useState(false);
  const [terminal, setTerminal] = useState(false);
  const [terminator, setTerminator] = useState(false);
  const [termite, setTermite] = useState(false);
  const [tmux, setTmux] = useState(false);
  const [vim, setVim] = useState(false);
  const [vimLightline, setVimLightline] = useState(false);
  const [visualStudio, setVisualStudio] = useState(false);
  const [vscode, setVscode] = useState(false);
  const [wallpaperBlockWave, setWallpaperBlockWave] = useState(false);
  const [wallpaperBurst, setWallpaperBurst] = useState(false);
  const [wallpaperCircuits, setWallpaperCircuits] = useState(false);
  const [wallpaperDiamonds, setWallpaperDiamonds] = useState(false);
  const [wallpaperDotGrid, setWallpaperDotGrid] = useState(false);
  const [wallpaperOctagon, setWallpaperOctagon] = useState(false);
  const [wallpaperShirts, setWallpaperShirts] = useState(false);
  const [wallpaperTriangles, setWallpaperTriangles] = useState(false);
  const [wallpaperTrianglify, setWallpaperTrianglify] = useState(false);
  const [windowsTerminal, setWindowsTerminal] = useState(false);
  const [wox, setWox] = useState(false);
  const [xcode, setXcode] = useState(false);
  const [xresources, setXresources] = useState(false);

  const {
    getActiveColorOrFallback,
    preparedColorSet,
    cliColorSet,
    selectedProTheme,
  } = useContext(ThemeContext);

  const { finalPrice, isFixedPrice } = useContext(PriceContext);
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);
  const [showSupportModal, setShowSupportModal] = useState(false);

  function quoteWrap(str) {
    return `“${str}”`;
  }

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
    kdePlasmaColors,
    keypirinha,
    kitty,
    konsole,
    prism,
    sketchPalettes,
    slack,
    sublimeText,
    terminal,
    terminator,
    termite,
    tmux,
    vim,
    vimLightline,
    visualStudio,
    vscode,
    wallpaperBlockWave,
    wallpaperBurst,
    wallpaperCircuits,
    wallpaperDiamonds,
    wallpaperDotGrid,
    wallpaperOctagon,
    wallpaperShirts,
    wallpaperTriangles,
    wallpaperTrianglify,
    windowsTerminal,
    wox,
    xcode,
    xresources,
  };

  const [themeTitles, wallpaperTitles] = Object.entries(selections)
    .filter(([_, v]) => v)
    .reduce(
      ([themeTitles, wallpaperTitles], [k]) => {
        if (k.startsWith('wallpaper')) {
          return [themeTitles, [...wallpaperTitles, templateTitles[k]]];
        } else {
          return [[...themeTitles, templateTitles[k]], wallpaperTitles];
        }
      },
      [[], []],
    );

  const [resolutionWidth, resolutionHeight] = useViewportDimensions();

  let details = '';
  const variantTitles = [...Object.keys(preparedColorSet)];
  if (themeTitles.length > 0) {
    details += variantTitles.join(' and ');
    if (themeTitles.length > 1 || variantTitles.length > 1) {
      details += ' themes for ';
    } else {
      details += ' theme for ';
    }
    details += themeTitles.join(', ');
  }
  if (themeTitles.length && wallpaperTitles.length) {
    details += '; ';
  }
  if (wallpaperTitles.length > 0) {
    details += variantTitles.join(' and ') + ' ';
    details += wallpaperTitles.join(',|').split('|').map(quoteWrap).join(' ');
    if (themeTitles.length > 1 || wallpaperTitles.length > 1) {
      details += ' wallpapers';
    } else {
      details += ' wallpaper';
    }
    details += ` at ${resolutionWidth}×${resolutionHeight}`;
  }
  if (themeTitles.length || wallpaperTitles.length) {
    details += '; ';
  }
  details += 'a colors.js file for use with the themer CLI.';

  const [rendering, setRendering] = useState(false);
  useEffect(() => {
    if (rendering) {
      (async () => {
        const zip = await generateZip(
          selections,
          preparedColorSet,
          resolutionWidth,
          resolutionHeight,
          window.location.href,
          cliColorSet,
          selectedProTheme,
        );
        const contents = await zip.generateAsync({ type: 'blob' });
        saveAs(contents, 'themer.zip');
        window.__ssa__log('download zip', { selections });
        setRendering(false);
        setShowSupportModal(true);
        window.__ssa__log('open support modal');
      })();
    }
  });

  return (
    <>
      <div className={styles.fieldsetWrapper}>
        <fieldset style={{ borderColor: getActiveColorOrFallback(['shade2']) }}>
          <legend style={{ color: getActiveColorOrFallback(['shade5']) }}>
            Terminals
          </legend>
          <Checkbox
            value={alacritty}
            onChange={() => setAlacritty(!alacritty)}
            label={templateTitles.alacritty}
            accentSelected
          />
          <Checkbox
            value={cmd}
            onChange={() => setCmd(!cmd)}
            label={templateTitles.cmd}
            accentSelected
          />
          <Checkbox
            value={conemu}
            onChange={() => setConemu(!conemu)}
            label={templateTitles.conemu}
            accentSelected
          />
          <Checkbox
            value={gnomeTerminal}
            onChange={() => setGnomeTerminal(!gnomeTerminal)}
            label={templateTitles.gnomeTerminal}
            accentSelected
          />
          <Checkbox
            value={hyper}
            onChange={() => setHyper(!hyper)}
            label={templateTitles.hyper}
            accentSelected
          />
          <Checkbox
            value={iterm}
            onChange={() => setIterm(!iterm)}
            label={templateTitles.iterm}
            accentSelected
          />
          <Checkbox
            value={kitty}
            onChange={() => setKitty(!kitty)}
            label={templateTitles.kitty}
            accentSelected
          />
          <Checkbox
            value={konsole}
            onChange={() => setKonsole(!konsole)}
            label={templateTitles.konsole}
            accentSelected
          />
          <Checkbox
            value={terminal}
            onChange={() => setTerminal(!terminal)}
            label={templateTitles.terminal}
            accentSelected
          />
          <Checkbox
            value={terminator}
            onChange={() => setTerminator(!terminator)}
            label={templateTitles.terminator}
            accentSelected
          />
          <Checkbox
            value={termite}
            onChange={() => setTermite(!termite)}
            label={templateTitles.termite}
            accentSelected
          />
          <Checkbox
            value={windowsTerminal}
            onChange={() => setWindowsTerminal(!windowsTerminal)}
            label={templateTitles.windowsTerminal}
            accentSelected
          />
        </fieldset>
        <fieldset style={{ borderColor: getActiveColorOrFallback(['shade2']) }}>
          <legend style={{ color: getActiveColorOrFallback(['shade5']) }}>
            Editors / IDEs
          </legend>
          <Checkbox
            value={atomSyntax}
            onChange={() => setAtomSyntax(!atomSyntax)}
            label={templateTitles.atomSyntax}
            accentSelected
          />
          <Checkbox
            value={atomUi}
            onChange={() => setAtomUi(!atomUi)}
            label={templateTitles.atomUi}
            accentSelected
          />
          <Checkbox
            value={bbedit}
            onChange={() => setBbedit(!bbedit)}
            label={templateTitles.bbedit}
            accentSelected
          />
          <Checkbox
            value={emacs}
            onChange={() => setEmacs(!emacs)}
            label={templateTitles.emacs}
            accentSelected
          />
          <Checkbox
            value={jetbrains}
            onChange={() => setJetbrains(!jetbrains)}
            label={templateTitles.jetbrains}
            accentSelected
          />
          <Checkbox
            value={vimLightline}
            onChange={() => setVimLightline(!vimLightline)}
            label={templateTitles.vimLightline}
            accentSelected
          />
          <Checkbox
            value={sublimeText}
            onChange={() => setSublimeText(!sublimeText)}
            label={templateTitles.sublimeText}
            accentSelected
          />
          <Checkbox
            value={vim}
            onChange={() => setVim(!vim)}
            label={templateTitles.vim}
            accentSelected
          />
          <Checkbox
            value={visualStudio}
            onChange={() => setVisualStudio(!visualStudio)}
            label={templateTitles.visualStudio}
            accentSelected
          />
          <Checkbox
            value={vscode}
            onChange={() => setVscode(!vscode)}
            label={templateTitles.vscode}
            accentSelected
          />
          <Checkbox
            value={xcode}
            onChange={() => setXcode(!xcode)}
            label={templateTitles.xcode}
            accentSelected
          />
        </fieldset>
        <fieldset style={{ borderColor: getActiveColorOrFallback(['shade2']) }}>
          <legend style={{ color: getActiveColorOrFallback(['shade5']) }}>
            Wallpapers
          </legend>
          <Checkbox
            value={wallpaperBlockWave}
            onChange={() => setWallpaperBlockWave(!wallpaperBlockWave)}
            label={quoteWrap(templateTitles.wallpaperBlockWave)}
            accentSelected
          />
          <Checkbox
            value={wallpaperBurst}
            onChange={() => setWallpaperBurst(!wallpaperBurst)}
            label={quoteWrap(templateTitles.wallpaperBurst)}
            accentSelected
          />
          <Checkbox
            value={wallpaperCircuits}
            onChange={() => setWallpaperCircuits(!wallpaperCircuits)}
            label={quoteWrap(templateTitles.wallpaperCircuits)}
            accentSelected
          />
          <Checkbox
            value={wallpaperDiamonds}
            onChange={() => setWallpaperDiamonds(!wallpaperDiamonds)}
            label={quoteWrap(templateTitles.wallpaperDiamonds)}
            accentSelected
          />
          <Checkbox
            value={wallpaperDotGrid}
            onChange={() => setWallpaperDotGrid(!wallpaperDotGrid)}
            label={quoteWrap(templateTitles.wallpaperDotGrid)}
            accentSelected
          />
          <Checkbox
            value={wallpaperOctagon}
            onChange={() => setWallpaperOctagon(!wallpaperOctagon)}
            label={quoteWrap(templateTitles.wallpaperOctagon)}
            accentSelected
          />
          <Checkbox
            value={wallpaperShirts}
            onChange={() => setWallpaperShirts(!wallpaperShirts)}
            label={quoteWrap(templateTitles.wallpaperShirts)}
            accentSelected
          />
          <Checkbox
            value={wallpaperTriangles}
            onChange={() => setWallpaperTriangles(!wallpaperTriangles)}
            label={quoteWrap(templateTitles.wallpaperTriangles)}
            accentSelected
          />
          <Checkbox
            value={wallpaperTrianglify}
            onChange={() => setWallpaperTrianglify(!wallpaperTrianglify)}
            label={quoteWrap(templateTitles.wallpaperTrianglify)}
            accentSelected
          />
          <div
            className={styles.wallpaperHint}
            style={{ color: getActiveColorOrFallback(['shade3']) }}
          >
            Wallpapers will be rendered at the browser viewport's resolution.
          </div>
          {window.document.fullscreenEnabled ? (
            <Button
              className={styles.fullscreen}
              small
              onClick={() => {
                window.document.documentElement.requestFullscreen();
                window.__ssa__log('go fullscreen');
              }}
            >
              Go fullscreen
            </Button>
          ) : null}
        </fieldset>
        <fieldset style={{ borderColor: getActiveColorOrFallback(['shade2']) }}>
          <legend style={{ color: getActiveColorOrFallback(['shade5']) }}>
            Other
          </legend>
          <Checkbox
            value={alfred}
            onChange={() => setAlfred(!alfred)}
            label={templateTitles.alfred}
            accentSelected
          />
          <Checkbox
            value={brave}
            onChange={() => setBrave(!brave)}
            label={templateTitles.brave}
            accentSelected
          />
          <Checkbox
            value={chrome}
            onChange={() => setChrome(!chrome)}
            label={templateTitles.chrome}
            accentSelected
          />
          <Checkbox
            value={css}
            onChange={() => setCss(!css)}
            label={templateTitles.css}
            accentSelected
          />
          <Checkbox
            value={firefox}
            onChange={() => setFirefox(!firefox)}
            label={templateTitles.firefox}
            accentSelected
          />
          <Checkbox
            value={kdePlasmaColors}
            onChange={() => setKdePlasmaColors(!kdePlasmaColors)}
            label={templateTitles.kdePlasmaColors}
            accentSelected
          />
          <Checkbox
            value={keypirinha}
            onChange={() => setKeypirinha(!keypirinha)}
            label={templateTitles.keypirinha}
            accentSelected
          />
          <Checkbox
            value={prism}
            onChange={() => setPrism(!prism)}
            label={templateTitles.prism}
            accentSelected
          />
          <Checkbox
            value={sketchPalettes}
            onChange={() => setSketchPalettes(!sketchPalettes)}
            label={templateTitles.sketchPalettes}
            accentSelected
          />
          <Checkbox
            value={slack}
            onChange={() => setSlack(!slack)}
            label={templateTitles.slack}
            accentSelected
          />
          <Checkbox
            value={tmux}
            onChange={() => setTmux(!tmux)}
            label={templateTitles.tmux}
            accentSelected
          />
          <Checkbox
            value={wox}
            onChange={() => setWox(!wox)}
            label={templateTitles.wox}
            accentSelected
          />
          <Checkbox
            value={xresources}
            onChange={() => setXresources(!xresources)}
            label={templateTitles.xresources}
            accentSelected
          />
        </fieldset>
      </div>
      <div className={styles.inputs}>
        {isFixedPrice ? null : (
          <span
            className={styles.payWhatYouWant}
            style={{ color: getActiveColorOrFallback(['shade6']) }}
          >
            Pay what you want:
          </span>
        )}
        <PriceInput className={styles.priceInput} />
        <Button
          special
          disabled={!preparedColorSet.dark && !preparedColorSet.light}
          onClick={() => {
            setShowCheckoutModal(true);
            window.__ssa__log('open checkout modal');
          }}
        >
          {finalPrice.amount > 0 ? 'Purchase' : 'Download'}
        </Button>
      </div>
      <div
        className={styles.details}
        style={{ color: getActiveColorOrFallback(['shade4']) }}
      >
        What you're {finalPrice.amount > 0 ? 'purchasing' : 'downloading'}:{' '}
        {details}
      </div>
      {showCheckoutModal ? (
        <CheckoutModal
          price={finalPrice}
          onClose={() => {
            setShowCheckoutModal(false);
            window.__ssa__log('close checkout modal');
          }}
          onComplete={() => {
            setShowCheckoutModal(false);
            setRendering(true);
          }}
        />
      ) : null}
      {showSupportModal ? (
        <SupportModal
          onClose={() => {
            setShowSupportModal(false);
            window.__ssa__log('close support modal');
          }}
        />
      ) : null}
      {rendering ? <LoadingModal /> : null}
    </>
  );
};

export default Download;
