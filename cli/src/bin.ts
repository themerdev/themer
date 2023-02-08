import { Command } from 'commander';
import flatten from 'lodash/flatten.js';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import themer, {
  allBuiltInColorSetIdentfiers,
  allBuiltInTemplateIdentifiers,
  BuiltInColorSet,
  BuiltInTemplate,
  ColorSet,
  Template,
} from './index.js';

const packageJsonPath = resolve(
  dirname(fileURLToPath(import.meta.url)),
  '..',
  'package.json',
);
const { version, description } = JSON.parse(
  (await readFile(packageJsonPath)).toString('utf8'),
);

const program = new Command();

program
  .name('themer')
  .description(description)
  .version(version, '-v, --version', 'display the current version')
  .option(
    '-c, --color-set <identifier or file...>',
    'the color set(s) to render',
    '*',
  )
  .option(
    '-t, --template <identifier or file...>',
    'the theme template(s) to render',
    '*',
  )
  .option('-o, --output <path>', 'the output directory', 'output');

program.parse();

const options = program.opts();

const expandedColorSets: string[] = flatten(
  (typeof options['colorSet'] === 'string'
    ? [options['colorSet']]
    : options['colorSet']
  ).map((value: string) =>
    value === '*' ? allBuiltInColorSetIdentfiers : value,
  ),
);

function isBuiltInColorSet(value: string): value is BuiltInColorSet {
  return allBuiltInColorSetIdentfiers.includes(value as BuiltInColorSet);
}

const resolvedColorSets: (BuiltInColorSet | ColorSet)[] = await Promise.all(
  expandedColorSets.map((value: string) => {
    if (isBuiltInColorSet(value)) return value;
    throw new Error(`Unable to resolve color set: ${value}`);
  }),
);

const expandedTemplates: string[] = flatten(
  (typeof options['template'] === 'string'
    ? [options['template']]
    : options['template']
  ).map((value: string) =>
    value === '*' ? allBuiltInTemplateIdentifiers : value,
  ),
);

function isBuiltInTemplate(value: string): value is BuiltInTemplate {
  return allBuiltInTemplateIdentifiers.includes(value as BuiltInTemplate);
}

const resolvedTemplates: (BuiltInTemplate | Template)[] = await Promise.all(
  expandedTemplates.map(async (value) => {
    if (isBuiltInTemplate(value)) return value;
    throw new Error(`Unable to resolve template: ${value}`);
  }),
);

for await (const file of themer(resolvedColorSets, resolvedTemplates)) {
  const path = join(options['output'], file.path);
  console.log(`writing ${path}...`);
  await mkdir(dirname(path), { recursive: true });
  await writeFile(path, file.content);
}

console.log('done!');
