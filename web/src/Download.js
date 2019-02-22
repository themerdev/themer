import React, { PureComponent } from 'react';
import Checkbox from './Checkbox';
import styles from './Download.module.css';
import ColorState from './ColorState';
import Button from './Button';
import generateZip from './generateZip';
import saveAs from 'file-saver';
import { UrlStateConsumer } from './UrlState';

export default class DownloadOptions extends PureComponent {
  state = {
    hyper: false,
    iterm: false,
    gnomeTerminal: false,
    conemu: false,
    cmd: false,
    termite: false,
    kitty: false,
    atomSyntax: false,
    atomUi: false,
    sublimeText: false,
    vim: false,
    vimLightline: false,
    vscode: false,
    xcode: false,
    bbedit: false,
    jetbrains: false,
    wallpaperBlockWave: false,
    wallpaperOctagon: false,
    wallpaperTriangles: false,
    wallpaperTrianglify: false,
    wallpaperShirts: false,
    slack: false,
    alfred: false,
    chrome: false,
    sketchPalettes: false,
    tmux: false,
  }
  render() {
    return (
      <ColorState>
        { ({ getColor }) => (
          <>
            <div className={ styles.fieldsetWrapper }>
              <fieldset style={{ borderColor: getColor('shade2', 'shade7') }}>
                <legend style={{ color: getColor('shade5', 'shade7') }}>Terminals</legend>
                <Checkbox
                  value={ this.state.hyper }
                  onChange={ () => this.toggleStateKey('hyper') }
                  label="Hyper"
                  accentSelected
                />
                <Checkbox
                  value={ this.state.iterm }
                  onChange={ () => this.toggleStateKey('iterm') }
                  label="iTerm"
                  accentSelected
                />
                <Checkbox
                  value={ this.state.gnomeTerminal }
                  onChange={ () => this.toggleStateKey('gnomeTerminal') }
                  label="GNOME Terminal"
                  accentSelected
                />
                <Checkbox
                  value={ this.state.conemu }
                  onChange={ () => this.toggleStateKey('conemu') }
                  label="ConEmu"
                  accentSelected
                />
                <Checkbox
                  value={ this.state.cmd }
                  onChange={ () => this.toggleStateKey('cmd') }
                  label="CMD.exe"
                  accentSelected
                />
                <Checkbox
                  value={ this.state.termite }
                  onChange={ () => this.toggleStateKey('termite') }
                  label="Termite"
                  accentSelected
                />
                <Checkbox
                  value={ this.state.kitty }
                  onChange={ () => this.toggleStateKey('kitty') }
                  label="kitty"
                  accentSelected
                />
              </fieldset>
              <fieldset style={{ borderColor: getColor('shade2', 'shade7') }}>
                <legend style={{ color: getColor('shade5', 'shade7') }}>Editors / IDEs</legend>
                <Checkbox
                  value={ this.state.atomSyntax }
                  onChange={ () => this.toggleStateKey('atomSyntax') }
                  label="Atom (syntax)"
                  accentSelected
                />
                <Checkbox
                  value={ this.state.atomUi }
                  onChange={ () => this.toggleStateKey('atomUi') }
                  label="Atom (UI)"
                  accentSelected
                />
                <Checkbox
                  value={ this.state.sublimeText }
                  onChange={ () => this.toggleStateKey('sublimeText') }
                  label="Sublime Text"
                  accentSelected
                />
                <Checkbox
                  value={ this.state.vim }
                  onChange={ () => this.toggleStateKey('vim') }
                  label="Vim"
                  accentSelected
                />
                <Checkbox
                  value={ this.state.vimLightline }
                  onChange={ () => this.toggleStateKey('vimLightline') }
                  label="lightline.vim"
                  accentSelected
                />
                <Checkbox
                  value={ this.state.vscode }
                  onChange={ () => this.toggleStateKey('vscode') }
                  label="VS Code"
                  accentSelected
                />
                <Checkbox
                  value={ this.state.xcode }
                  onChange={ () => this.toggleStateKey('xcode') }
                  label="Xcode"
                  accentSelected
                />
                <Checkbox
                  value={ this.state.bbedit }
                  onChange={ () => this.toggleStateKey('bbedit') }
                  label="BBEdit"
                  accentSelected
                />
                <Checkbox
                  value={ this.state.jetbrains }
                  onChange={ () => this.toggleStateKey('jetbrains') }
                  label="JetBrains"
                  accentSelected
                />
              </fieldset>
              <fieldset style={{ borderColor: getColor('shade2', 'shade7') }}>
                <legend style={{ color: getColor('shade5', 'shade7') }}>Wallpapers</legend>
                <Checkbox
                  value={ this.state.wallpaperBlockWave }
                  onChange={ () => this.toggleStateKey('wallpaperBlockWave') }
                  label="“Block Wave”"
                  accentSelected
                />
                <Checkbox
                  value={ this.state.wallpaperOctagon }
                  onChange={ () => this.toggleStateKey('wallpaperOctagon') }
                  label="“Octagon”"
                  accentSelected
                />
                <Checkbox
                  value={ this.state.wallpaperTriangles }
                  onChange={ () => this.toggleStateKey('wallpaperTriangles') }
                  label="“Triangles”"
                  accentSelected
                />
                <Checkbox
                  value={ this.state.wallpaperTrianglify }
                  onChange={ () => this.toggleStateKey('wallpaperTrianglify') }
                  label="“Trianglify”"
                  accentSelected
                />
                <Checkbox
                  value={ this.state.wallpaperShirts }
                  onChange={ () => this.toggleStateKey('wallpaperShirts') }
                  label="“Shirts”"
                  accentSelected
                />
                <div
                  className={ styles.wallpaperHint }
                  style={{ color: getColor('shade3', 'shade7') }}
                >
                  Wallpapers will be rendered at the browser viewport's resolution.
                </div>
                { window.document.fullscreenEnabled ? (
                  <Button
                    className={ styles.fullscreen }
                    small
                    onClick={
                      () => window.document.documentElement.requestFullscreen()
                    }
                  >Go fullscreen</Button>
                ) : null }
              </fieldset>
              <fieldset style={{ borderColor: getColor('shade2', 'shade7') }}>
                <legend style={{ color: getColor('shade5', 'shade7') }}>Other</legend>
                <Checkbox
                  value={ this.state.slack }
                  onChange={ () => this.toggleStateKey('slack') }
                  label="Slack sidebar"
                  accentSelected
                />
                <Checkbox
                  value={ this.state.alfred }
                  onChange={ () => this.toggleStateKey('alfred') }
                  label="Alfred.app"
                  accentSelected
                />
                <Checkbox
                  value={ this.state.chrome }
                  onChange={ () => this.toggleStateKey('chrome') }
                  label="Chrome"
                  accentSelected
                />
                <Checkbox
                  value={ this.state.sketchPalettes }
                  onChange={ () => this.toggleStateKey('sketchPalettes') }
                  label="Sketch palettes"
                  accentSelected
                />
                <Checkbox
                  value={ this.state.tmux }
                  onChange={ () => this.toggleStateKey('tmux') }
                  label="tmux"
                  accentSelected
                />
              </fieldset>
            </div>
            <UrlStateConsumer>
              { ({ rawState }) => (
                <Button
                  special
                  onClick={ async () => {
                    const zip = await generateZip(
                      this.state,
                      rawState.colors,
                      window.innerWidth * window.devicePixelRatio,
                      window.innerHeight * window.devicePixelRatio,
                    );
                    zip.generateAsync({ type: 'blob' }).then(contents => {
                      saveAs(contents, 'themer.zip');
                    });
                  } }
                >Download</Button>
              ) }
            </UrlStateConsumer>
          </>
        ) }
      </ColorState>
    );
  }
  toggleStateKey(key) {
    this.setState({ [key]: !this.state[key] });
  }
}
