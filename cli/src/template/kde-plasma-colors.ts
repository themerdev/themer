import type { Template } from './index.js';
import { colorSetToVariants } from '../color-set/index.js';
import Color from 'color';
import { source } from 'common-tags';

function formatColor(color: string | Color): string {
  return Color(color).rgb().array().join(',');
}

const template: Template = {
  name: 'KDE Plasma Colors',
  render: async function* (colorSet) {
    const variants = colorSetToVariants(colorSet);
    for (const variant of variants) {
      yield {
        path: `${variant.title.upperCamel}.colors`,
        content: source`
          [ColorEffects:Disabled]
          Color=${formatColor(variant.colors.shade2)}
          ColorAmount=0
          ColorEffect=0
          ContrastAmount=0.65
          ContrastEffect=1
          IntensityAmount=0.1
          IntensityEffect=2
          
          [ColorEffects:Inactive]
          ChangeSelectionColor=true
          Color=${formatColor(variant.colors.shade3)}
          ColorAmount=0.025
          ColorEffect=2
          ContrastAmount=0.1
          ContrastEffect=2
          Enable=false
          IntensityAmount=0
          IntensityEffect=0
          
          [Colors:Button]
          BackgroundAlternate=${formatColor(variant.colors.shade2)}
          BackgroundNormal=${formatColor(variant.colors.shade0)}
          DecorationFocus=${formatColor(variant.colors.accent4)}
          DecorationHover=${formatColor(variant.colors.accent4)}
          ForegroundActive=${formatColor(variant.colors.accent4)}
          ForegroundInactive=${formatColor(variant.colors.shade4)}
          ForegroundLink=${formatColor(variant.colors.accent5)}
          ForegroundNegative=${formatColor(variant.colors.accent0)}
          ForegroundNeutral=${formatColor(variant.colors.accent1)}
          ForegroundNormal=${formatColor(variant.colors.shade7)}
          ForegroundPositive=${formatColor(variant.colors.accent3)}
          ForegroundVisited=${formatColor(variant.colors.accent6)}
          
          [Colors:Complementary]
          BackgroundAlternate=${formatColor(variant.colors.shade2)}
          BackgroundNormal=${formatColor(variant.colors.shade0)}
          DecorationFocus=${formatColor(variant.colors.accent4)}
          DecorationHover=${formatColor(variant.colors.accent4)}
          ForegroundActive=${formatColor(variant.colors.accent4)}
          ForegroundInactive=${formatColor(variant.colors.shade4)}
          ForegroundLink=${formatColor(variant.colors.accent5)}
          ForegroundNegative=${formatColor(variant.colors.accent0)}
          ForegroundNeutral=${formatColor(variant.colors.accent1)}
          ForegroundNormal=${formatColor(variant.colors.shade7)}
          ForegroundPositive=${formatColor(variant.colors.accent3)}
          ForegroundVisited=${formatColor(variant.colors.shade4)}
          
          [Colors:Header]
          BackgroundAlternate=${formatColor(variant.colors.shade0)}
          BackgroundNormal=${formatColor(variant.colors.shade0)}
          DecorationFocus=${formatColor(variant.colors.accent4)}
          DecorationHover=${formatColor(variant.colors.accent4)}
          ForegroundActive=${formatColor(variant.colors.accent4)}
          ForegroundInactive=${formatColor(variant.colors.shade4)}
          ForegroundLink=${formatColor(variant.colors.accent5)}
          ForegroundNegative=${formatColor(variant.colors.accent0)}
          ForegroundNeutral=${formatColor(variant.colors.accent1)}
          ForegroundNormal=${formatColor(variant.colors.shade7)}
          ForegroundPositive=${formatColor(variant.colors.accent3)}
          ForegroundVisited=${formatColor(variant.colors.accent6)}
          
          [Colors:Header][Inactive]
          BackgroundAlternate=${formatColor(variant.colors.shade0)}
          BackgroundNormal=${formatColor(variant.colors.shade0)}
          DecorationFocus=${formatColor(variant.colors.accent4)}
          DecorationHover=${formatColor(variant.colors.accent4)}
          ForegroundActive=${formatColor(variant.colors.accent4)}
          ForegroundInactive=${formatColor(variant.colors.shade4)}
          ForegroundLink=${formatColor(variant.colors.accent5)}
          ForegroundNegative=${formatColor(variant.colors.accent0)}
          ForegroundNeutral=${formatColor(variant.colors.accent1)}
          ForegroundNormal=${formatColor(variant.colors.shade7)}
          ForegroundPositive=${formatColor(variant.colors.accent3)}
          ForegroundVisited=${formatColor(variant.colors.accent6)}
          
          [Colors:Selection]
          BackgroundAlternate=${formatColor(variant.colors.shade6)}
          BackgroundNormal=${formatColor(variant.colors.accent2)}
          DecorationFocus=${formatColor(variant.colors.accent4)}
          DecorationHover=${formatColor(variant.colors.accent4)}
          ForegroundActive=${formatColor(variant.colors.shade0)}
          ForegroundInactive=${formatColor(variant.colors.shade2)}
          ForegroundLink=${formatColor(
            Color(variant.colors.accent2).mix(
              Color(variant.colors.shade0),
              0.25,
            ),
          )}
          ForegroundNegative=${formatColor(
            Color(variant.colors.accent0).mix(
              Color(variant.colors.shade0),
              0.25,
            ),
          )}
          ForegroundNeutral=${formatColor(
            Color(variant.colors.accent1).mix(
              Color(variant.colors.shade0),
              0.25,
            ),
          )}
          ForegroundNormal=${formatColor(variant.colors.shade0)}
          ForegroundPositive=${formatColor(
            Color(variant.colors.accent3).mix(
              Color(variant.colors.shade0),
              0.25,
            ),
          )}
          ForegroundVisited=${formatColor(
            Color(variant.colors.accent6).mix(
              Color(variant.colors.shade0),
              0.25,
            ),
          )}
          
          [Colors:Tooltip]
          BackgroundAlternate=${formatColor(variant.colors.shade0)}
          BackgroundNormal=${formatColor(variant.colors.shade0)}
          DecorationFocus=${formatColor(variant.colors.accent4)}
          DecorationHover=${formatColor(variant.colors.accent4)}
          ForegroundActive=${formatColor(variant.colors.accent4)}
          ForegroundInactive=${formatColor(variant.colors.shade4)}
          ForegroundLink=${formatColor(variant.colors.accent5)}
          ForegroundNegative=${formatColor(variant.colors.accent0)}
          ForegroundNeutral=${formatColor(variant.colors.accent1)}
          ForegroundNormal=${formatColor(variant.colors.shade7)}
          ForegroundPositive=${formatColor(variant.colors.accent3)}
          ForegroundVisited=${formatColor(variant.colors.accent6)}
          
          [Colors:View]
          BackgroundAlternate=${formatColor(variant.colors.shade0)}
          BackgroundNormal=${formatColor(variant.colors.shade0)}
          DecorationFocus=${formatColor(variant.colors.accent4)}
          DecorationHover=${formatColor(variant.colors.accent4)}
          ForegroundActive=${formatColor(variant.colors.accent4)}
          ForegroundInactive=${formatColor(variant.colors.shade4)}
          ForegroundLink=${formatColor(variant.colors.accent5)}
          ForegroundNegative=${formatColor(variant.colors.accent0)}
          ForegroundNeutral=${formatColor(variant.colors.accent1)}
          ForegroundNormal=${formatColor(variant.colors.shade7)}
          ForegroundPositive=${formatColor(variant.colors.accent3)}
          ForegroundVisited=${formatColor(variant.colors.accent6)}
          
          [Colors:Window]
          BackgroundAlternate=${formatColor(variant.colors.shade0)}
          BackgroundNormal=${formatColor(variant.colors.shade0)}
          DecorationFocus=${formatColor(variant.colors.accent4)}
          DecorationHover=${formatColor(variant.colors.accent4)}
          ForegroundActive=${formatColor(variant.colors.accent4)}
          ForegroundInactive=${formatColor(variant.colors.shade4)}
          ForegroundLink=${formatColor(variant.colors.accent5)}
          ForegroundNegative=${formatColor(variant.colors.accent0)}
          ForegroundNeutral=${formatColor(variant.colors.accent1)}
          ForegroundNormal=${formatColor(variant.colors.shade7)}
          ForegroundPositive=${formatColor(variant.colors.accent3)}
          ForegroundVisited=${formatColor(variant.colors.accent6)}
          
          [General]
          ColorScheme=${variant.title.upperCamel}
          Name=${variant.title.human}
          shadeSortColumn=true
          
          [KDE]
          contrast=4
          
          [WM]
          activeBackground=${formatColor(variant.colors.shade0)}
          activeBlend=${formatColor(variant.colors.shade7)}
          activeForeground=${formatColor(variant.colors.shade7)}
          inactiveBackground=${formatColor(variant.colors.shade0)}
          inactiveBlend=${formatColor(variant.colors.shade4)}
          inactiveForeground=${formatColor(variant.colors.shade4)}
        `,
      };
    }
  },
  renderInstructions: (paths) => source`
    1. Open System Settings
    2. Navigate to Appearance > Colors
    3. Click "Install from File..." and choose the generated theme file (${paths
      .map((p) => `\`${p}\``)
      .join(' or ')})
  `,
};

export default template;
