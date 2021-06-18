module.exports = async function themer(
  colors,
  templates,
  extraArgs,
  pathSeparator,
  instructionsHead,
) {
  const files = [];
  const instructions = [];
  for (const template of templates) {
    const outputs = (await Promise.all(template.render(colors, extraArgs))).map(
      (file) => ({
        ...file,
        name: `${template.name}${pathSeparator}${file.name}`,
      }),
    );
    files.push(...outputs);
    if (template.renderInstructions) {
      instructions.push(
        `## ${template.name}\n\n${template
          .renderInstructions(outputs.map(({ name }) => name))
          .trim()}`,
      );
    }
  }
  if (instructions.length) {
    files.push({
      name: 'README.md',
      contents: Buffer.from(
        `${instructionsHead}\n\n${instructions.join('\n\n')}`,
        'utf8',
      ),
    });
  }
  return files;
};
