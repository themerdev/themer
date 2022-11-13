const themator = (theme, colorSet) => {
  const palette = [
    colorSet.shade0,
    colorSet.accent0,
    colorSet.accent3,
    colorSet.accent2,
    colorSet.accent4,
    colorSet.accent6,
    colorSet.accent7,
    colorSet.shade6,
    colorSet.shade5,
    colorSet.accent0,
    colorSet.accent4,
    colorSet.accent2,
    colorSet.accent5,
    colorSet.accent6,
    colorSet.accent7,
    colorSet.shade7,
  ];

  return `[[Themer ${theme}]]
  background_color = "${colorSet.shade0}"
  cursor_color = "${colorSet.shade6}"
  foreground_color = "${colorSet.shade6}"
  palette = "${palette.join(':')}"
`;
};

export const render = (colors) =>
  Object.entries(colors).map(([theme, colorSet]) =>
    Promise.resolve({
      name: `themer-terminator-${theme}.txt`,
      contents: Buffer.from(themator(theme, colorSet)),
    }),
  );

export const renderInstructions = (paths) => `
Copy the contents of ${paths
  .map((p) => `\`${p}\``)
  .join(' or ')} to the Terminator's config file.

The config file is usually located at \`~/.config/terminator/config\`.

You can paste it as a new profile, or copy the contents into your existing profile.

Finally, restart Terminator to see the new theme.
`;
