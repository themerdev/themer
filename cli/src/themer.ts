import { ColorSet, prepareColorSet } from './color-set/index.js';
import { BuiltInColorSet, resolveColorSet } from './color-set/all.js';
import type { Template, OutputFile, RenderOptions } from './template/index.js';
import { BuiltInTemplate, resolveTemplate } from './template/all.js';

export async function* themer(
  colorSets: (BuiltInColorSet | ColorSet)[],
  templates: (BuiltInTemplate | Template)[],
  options: RenderOptions,
): AsyncGenerator<OutputFile> {
  for (const colorSet of colorSets) {
    const resolvedColorSet = resolveColorSet(colorSet);
    const fullColorSet = prepareColorSet(resolvedColorSet);
    const resolvedTemplates = templates.map(resolveTemplate);
    const instructions: string[] = [`# themer - ${fullColorSet.name}`];
    const rootDir = fullColorSet.name;
    for (const template of resolvedTemplates) {
      const templatePaths: string[] = [];
      for await (const file of template.render(fullColorSet, options)) {
        const path = `${template.name}/${file.path}`;
        yield {
          ...file,
          path: `${rootDir}/${path}`,
        };
        templatePaths.push(path);
      }
      instructions.push(`## ${template.name}`);
      instructions.push(
        template.renderInstructions(templatePaths, fullColorSet).trim(),
      );
    }
    yield {
      path: `${rootDir}/README.md`,
      content: instructions.join('\n\n'),
    };
  }
}
