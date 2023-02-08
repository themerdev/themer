import type { Template } from './index.js';
import { brightMix, colorSetToVariants } from '../color-set/index.js';
import { source } from 'common-tags';
import Color from 'color';

function format(color: string): string {
  return Color(color).rgb().round().array().join(',');
}

const template: Template = {
  name: 'Konsole',
  render: async function* (colorSet) {
    const variants = colorSetToVariants(colorSet);
    for (const { title, colors, isDark } of variants) {
      yield {
        path: `${title.kebab}.colorscheme`,
        content: Buffer.from(
          source`
            [Color0]
            Color=${format(isDark ? colors.shade2 : colors.shade6)}
            
            [Color0Intense]
            Color=${format(isDark ? colors.shade3 : colors.shade5)}
            
            [Color1]
            Color=${format(colors.accent0)}
            
            [Color1Intense]
            Color=${format(brightMix(colors, 'accent0', isDark))}
            
            [Color2]
            Color=${format(colors.accent3)}
            
            [Color2Intense]
            Color=${format(brightMix(colors, 'accent3', isDark))}
            
            [Color3]
            Color=${format(colors.accent2)}
            
            [Color3Intense]
            Color=${format(brightMix(colors, 'accent2', isDark))}
            
            [Color4]
            Color=${format(colors.accent5)}
            
            [Color4Intense]
            Color=${format(brightMix(colors, 'accent5', isDark))}
            
            [Color5]
            Color=${format(colors.accent7)}
            
            [Color5Intense]
            Color=${format(brightMix(colors, 'accent7', isDark))}
            
            [Color6]
            Color=${format(colors.accent4)}
            
            [Color6Intense]
            Color=${format(brightMix(colors, 'accent4', isDark))}
            
            [Color7]
            Color=${format(isDark ? colors.shade6 : colors.shade2)}
            
            [Color7Intense]
            Color=${format(isDark ? colors.shade7 : colors.shade1)}
            
            [Background]
            Color=${format(colors.shade0)}
            
            [BackgroundIntense]
            Color=${format(colors.shade1)}
            
            [Foreground]
            Color=${format(colors.shade6)}
            
            [ForegroundIntense]
            Color=${format(colors.shade7)}
            
            [General]
            Description=Themer ${isDark ? 'Dark' : 'Light'}
            Opacity=1
          `,
          'utf8',
        ),
      };
    }
  },
  renderInstructions: (paths) => source`
    Copy (or symlink) the generated ${
      paths.length > 0 ? 'files' : 'file'
    } to \`~/.local/share/konsole/\`:

    \`\`\`
    ${paths.map((p) => `cp '${p}' ~/.local/share/konsole/`).join('\n')}
    \`\`\`

    Then choose the desired theme in Konsole > Settings > Edit Current Profile > Appearance.
  `,
};

export default template;
