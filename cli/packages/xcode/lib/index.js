const _ = require('lodash');
const Color = require('color');

const formatColorSet = colors =>
  _.mapValues(colors, hex =>
    Color(hex)
      .rgb()
      .array()
      .concat(255)
      .map(component => _.round(component / 255, 6))
      .join(' ')
  );

const render = colors => {
  const colorSets = [
    {name: 'dark', colors: colors.dark && formatColorSet(colors.dark)},
    {name: 'light', colors: colors.light && formatColorSet(colors.light)},
  ].filter(colorSet => !!colorSet.colors);
  return colorSets.map(colorSet => {
    const {
      shade0,
      shade1,
      shade2,
      shade3,
      shade4,
      shade5,
      shade6,
      shade7,
      accent0,
      accent1,
      accent2,
      accent3,
      accent4,
      accent5,
      accent6,
      accent7,
    } = colorSet.colors;
    return Promise.resolve({
      name: `Themer ${_.capitalize(colorSet.name)}.dvtcolortheme`,
      contents: Buffer.from(
        `<?xml version="1.0" encoding="UTF-8"?>
        <!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
        <plist version="1.0">
          <dict>
            <key>DVTConsoleDebuggerInputTextColor</key>
            <string>${shade7}</string>
            <key>DVTConsoleDebuggerOutputTextColor</key>
            <string>${shade5}</string>
            <key>DVTConsoleDebuggerPromptTextColor</key>
            <string>${accent1}</string>
            <key>DVTConsoleExectuableInputTextColor</key>
            <string>${shade5}</string>
            <key>DVTConsoleExectuableOutputTextColor</key>
            <string>${shade7}</string>
            <key>DVTConsoleTextBackgroundColor</key>
            <string>${shade0}</string>
            <key>DVTConsoleTextInsertionPointColor</key>
            <string>${accent6}</string>
            <key>DVTConsoleTextSelectionColor</key>
            <string>${shade1}</string>
            <key>DVTDebuggerInstructionPointerColor</key>
            <string>${accent3}</string>
            <key>DVTSourceTextBackground</key>
            <string>${shade0}</string>
            <key>DVTSourceTextBlockDimBackgroundColor</key>
            <string>${shade4}</string>
            <key>DVTSourceTextInsertionPointColor</key>
            <string>${accent6}</string>
            <key>DVTSourceTextInvisiblesColor</key>
            <string>${shade1}</string>
            <key>DVTSourceTextSelectionColor</key>
            <string>${shade1}</string>
            <key>DVTSourceTextSyntaxColors</key>
            <dict>
              <key>xcode.syntax.attribute</key>
              <string>${accent3}</string>
              <key>xcode.syntax.character</key>
              <string>${accent4}</string>
              <key>xcode.syntax.comment</key>
              <string>${shade2}</string>
              <key>xcode.syntax.comment.doc</key>
              <string>${shade3}</string>
              <key>xcode.syntax.comment.doc.keyword</key>
              <string>${shade4}</string>
              <key>xcode.syntax.identifier.class</key>
              <string>${accent2}</string>
              <key>xcode.syntax.identifier.class.system</key>
              <string>${accent2}</string>
              <key>xcode.syntax.identifier.constant</key>
              <string>${accent3}</string>
              <key>xcode.syntax.identifier.constant.system</key>
              <string>${accent3}</string>
              <key>xcode.syntax.identifier.function</key>
              <string>${accent4}</string>
              <key>xcode.syntax.identifier.function.system</key>
              <string>${accent4}</string>
              <key>xcode.syntax.identifier.macro</key>
              <string>${accent7}</string>
              <key>xcode.syntax.identifier.macro.system</key>
              <string>${accent7}</string>
              <key>xcode.syntax.identifier.type</key>
              <string>${accent0}</string>
              <key>xcode.syntax.identifier.type.system</key>
              <string>${accent1}</string>
              <key>xcode.syntax.identifier.variable</key>
              <string>${shade7}</string>
              <key>xcode.syntax.identifier.variable.system</key>
              <string>${shade7}</string>
              <key>xcode.syntax.keyword</key>
              <string>${accent5}</string>
              <key>xcode.syntax.number</key>
              <string>${accent3}</string>
              <key>xcode.syntax.plain</key>
              <string>${shade6}</string>
              <key>xcode.syntax.preprocessor</key>
              <string>${accent6}</string>
              <key>xcode.syntax.string</key>
              <string>${accent3}</string>
              <key>xcode.syntax.url</key>
              <string>${accent5}</string>
            </dict>
          </dict>
        </plist>`,
        'utf8'
      ),
    });
  });
};

const renderInstructions = paths => `
Copy (or symlink) the generated theme ${paths.length > 1 ? 'files' : 'file'} to Xcode's themes directory:

    mkdir -p ~/Library/Developer/Xcode/UserData/FontAndColorThemes
${paths.map(p => `    cp '${p}' ~/Library/Developer/Xcode/UserData/FontAndColorThemes/`).join('\n')}

Then restart Xcode. The ${paths.length > 1 ? 'themes' : 'theme'} will be available in Preferences > Fonts and Colors.
`;

module.exports = {
  formatColorSet,
  render,
  renderInstructions,
};
