import Color from 'color';

const capitalize = (str) => `${str.charAt(0).toUpperCase()}${str.slice(1)}`;

const format = (hex) => Color(hex).rgb().array().join(',');

const renderTheme = (theme, colorSet) =>
  `
[ColorEffects:Disabled]
Color=${format(colorSet.shade2)}
ColorAmount=0
ColorEffect=0
ContrastAmount=0.65
ContrastEffect=1
IntensityAmount=0.1
IntensityEffect=2

[ColorEffects:Inactive]
ChangeSelectionColor=true
Color=${format(colorSet.shade3)}
ColorAmount=0.025
ColorEffect=2
ContrastAmount=0.1
ContrastEffect=2
Enable=false
IntensityAmount=0
IntensityEffect=0

[Colors:Button]
BackgroundAlternate=${format(colorSet.shade2)}
BackgroundNormal=${format(colorSet.shade0)}
DecorationFocus=${format(colorSet.accent4)}
DecorationHover=${format(colorSet.accent4)}
ForegroundActive=${format(colorSet.accent4)}
ForegroundInactive=${format(colorSet.shade4)}
ForegroundLink=${format(colorSet.accent5)}
ForegroundNegative=${format(colorSet.accent0)}
ForegroundNeutral=${format(colorSet.accent1)}
ForegroundNormal=${format(colorSet.shade7)}
ForegroundPositive=${format(colorSet.accent3)}
ForegroundVisited=${format(colorSet.accent6)}

[Colors:Complementary]
BackgroundAlternate=${format(colorSet.shade2)}
BackgroundNormal=${format(colorSet.shade0)}
DecorationFocus=${format(colorSet.accent4)}
DecorationHover=${format(colorSet.accent4)}
ForegroundActive=${format(colorSet.accent4)}
ForegroundInactive=${format(colorSet.shade4)}
ForegroundLink=${format(colorSet.accent5)}
ForegroundNegative=${format(colorSet.accent0)}
ForegroundNeutral=${format(colorSet.accent1)}
ForegroundNormal=${format(colorSet.shade7)}
ForegroundPositive=${format(colorSet.accent3)}
ForegroundVisited=${format(colorSet.shade4)}

[Colors:Header]
BackgroundAlternate=${format(colorSet.shade0)}
BackgroundNormal=${format(colorSet.shade0)}
DecorationFocus=${format(colorSet.accent4)}
DecorationHover=${format(colorSet.accent4)}
ForegroundActive=${format(colorSet.accent4)}
ForegroundInactive=${format(colorSet.shade4)}
ForegroundLink=${format(colorSet.accent5)}
ForegroundNegative=${format(colorSet.accent0)}
ForegroundNeutral=${format(colorSet.accent1)}
ForegroundNormal=${format(colorSet.shade7)}
ForegroundPositive=${format(colorSet.accent3)}
ForegroundVisited=${format(colorSet.accent6)}

[Colors:Header][Inactive]
BackgroundAlternate=${format(colorSet.shade0)}
BackgroundNormal=${format(colorSet.shade0)}
DecorationFocus=${format(colorSet.accent4)}
DecorationHover=${format(colorSet.accent4)}
ForegroundActive=${format(colorSet.accent4)}
ForegroundInactive=${format(colorSet.shade4)}
ForegroundLink=${format(colorSet.accent5)}
ForegroundNegative=${format(colorSet.accent0)}
ForegroundNeutral=${format(colorSet.accent1)}
ForegroundNormal=${format(colorSet.shade7)}
ForegroundPositive=${format(colorSet.accent3)}
ForegroundVisited=${format(colorSet.accent6)}

[Colors:Selection]
BackgroundAlternate=${format(colorSet.shade6)}
BackgroundNormal=${format(colorSet.accent2)}
DecorationFocus=${format(colorSet.accent4)}
DecorationHover=${format(colorSet.accent4)}
ForegroundActive=${format(colorSet.shade0)}
ForegroundInactive=${format(colorSet.shade2)}
ForegroundLink=${format(
    Color(colorSet.accent2).mix(Color(colorSet.shade0), 0.25),
  )}
ForegroundNegative=${format(
    Color(colorSet.accent0).mix(Color(colorSet.shade0), 0.25),
  )}
ForegroundNeutral=${format(
    Color(colorSet.accent1).mix(Color(colorSet.shade0), 0.25),
  )}
ForegroundNormal=${format(colorSet.shade0)}
ForegroundPositive=${format(
    Color(colorSet.accent3).mix(Color(colorSet.shade0), 0.25),
  )}
ForegroundVisited=${format(
    Color(colorSet.accent6).mix(Color(colorSet.shade0), 0.25),
  )}

[Colors:Tooltip]
BackgroundAlternate=${format(colorSet.shade0)}
BackgroundNormal=${format(colorSet.shade0)}
DecorationFocus=${format(colorSet.accent4)}
DecorationHover=${format(colorSet.accent4)}
ForegroundActive=${format(colorSet.accent4)}
ForegroundInactive=${format(colorSet.shade4)}
ForegroundLink=${format(colorSet.accent5)}
ForegroundNegative=${format(colorSet.accent0)}
ForegroundNeutral=${format(colorSet.accent1)}
ForegroundNormal=${format(colorSet.shade7)}
ForegroundPositive=${format(colorSet.accent3)}
ForegroundVisited=${format(colorSet.accent6)}

[Colors:View]
BackgroundAlternate=${format(colorSet.shade0)}
BackgroundNormal=${format(colorSet.shade0)}
DecorationFocus=${format(colorSet.accent4)}
DecorationHover=${format(colorSet.accent4)}
ForegroundActive=${format(colorSet.accent4)}
ForegroundInactive=${format(colorSet.shade4)}
ForegroundLink=${format(colorSet.accent5)}
ForegroundNegative=${format(colorSet.accent0)}
ForegroundNeutral=${format(colorSet.accent1)}
ForegroundNormal=${format(colorSet.shade7)}
ForegroundPositive=${format(colorSet.accent3)}
ForegroundVisited=${format(colorSet.accent6)}

[Colors:Window]
BackgroundAlternate=${format(colorSet.shade0)}
BackgroundNormal=${format(colorSet.shade0)}
DecorationFocus=${format(colorSet.accent4)}
DecorationHover=${format(colorSet.accent4)}
ForegroundActive=${format(colorSet.accent4)}
ForegroundInactive=${format(colorSet.shade4)}
ForegroundLink=${format(colorSet.accent5)}
ForegroundNegative=${format(colorSet.accent0)}
ForegroundNeutral=${format(colorSet.accent1)}
ForegroundNormal=${format(colorSet.shade7)}
ForegroundPositive=${format(colorSet.accent3)}
ForegroundVisited=${format(colorSet.accent6)}

[General]
ColorScheme=Themer${capitalize(theme)}
Name=Themer ${capitalize(theme)}
shadeSortColumn=true

[KDE]
contrast=4

[WM]
activeBackground=${format(colorSet.shade0)}
activeBlend=${format(colorSet.shade7)}
activeForeground=${format(colorSet.shade7)}
inactiveBackground=${format(colorSet.shade0)}
inactiveBlend=${format(colorSet.shade4)}
inactiveForeground=${format(colorSet.shade4)}
`.trim();

export const render = (colors) =>
  [...Object.entries(colors)].map(([theme, colorSet]) =>
    Promise.resolve({
      name: `Themer${capitalize(theme)}.colors`,
      contents: Buffer.from(renderTheme(theme, colorSet), 'utf8'),
    }),
  );

export const renderInstructions = (paths) => `
1. Open System Settings
2. Navigate to Appearance > Colors
3. Click "Install from File..." and choose the generated theme file (${paths
  .map((p) => `\`${p}\``)
  .join(' or ')})
`;
