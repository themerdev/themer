const render = (colors, options) => {
  const colorSets = [
    {name: 'dark', colors: colors.dark},
    {name: 'light', colors: colors.light},
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
      name: `themer-alfred-${colorSet.name}.alfredappearance`,
      contents: Buffer.from(
        JSON.stringify(
          {
            alfredtheme: {
              result: {
                textSpacing: 6,
                subtext: {
                  size: 12,
                  colorSelected: `${shade2}FF`,
                  font: 'System Light',
                  color: `${shade5}FF`,
                },
                shortcut: {
                  size: 16,
                  colorSelected: `${shade1}FF`,
                  font: 'System',
                  color: `${shade6}FF`,
                },
                backgroundSelected: `${accent4}FF`,
                text: {
                  size: 18,
                  colorSelected: `${shade0}FF`,
                  font: 'System Light',
                  color: `${shade7}FF`,
                },
                iconPaddingHorizontal: 12,
                paddingVertical: 12,
                iconSize: 36,
              },
              search: {
                paddingVertical: 8,
                background: `${shade0}00`,
                spacing: 10,
                text: {
                  size: 22,
                  colorSelected: `${accent5}FF`,
                  font: 'System',
                  color: `${shade7}FF`,
                },
                backgroundSelected: `${accent7}FF`,
              },
              window: {
                color: `${shade0}FF`,
                paddingHorizontal: 10,
                width: 559,
                borderPadding: 4,
                borderColor: `${shade0}DD`,
                blur: 15,
                roundness: 3,
                paddingVertical: 10,
              },
              credit: 'Themer',
              separator: {
                color: `${shade0}00`,
                thickness: 0,
              },
              scrollbar: {
                color: `${accent7}FF`,
                thickness: 4,
              },
              name: `Themer ${colorSet.name === 'dark' ? 'Dark' : 'Light'}`,
            },
          },
          null,
          2
        ),
        'utf8'
      ),
    });
  });
};

module.exports = {render};
