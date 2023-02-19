import Color from 'color';
import { Command } from 'commander';
import flatten from 'lodash/flatten.js';
import { parse } from 'yaml';
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

console.log('resolving color set(s)...');

const resolvedColorSets: (BuiltInColorSet | ColorSet)[] = await Promise.all(
  expandedColorSets.map(async (value: string) => {
    if (isBuiltInColorSet(value)) return value;
    else {
      const absolutePath = resolve(value);
      console.log(`loading color set ${value} (path: ${absolutePath})...`);
      try {
        return (await import(absolutePath)).default;
      } catch {
        console.log(
          `color set ${absolutePath} does not appear to be a themer color set JavaScript file...`,
        );
      }
      try {
        const content = await readFile(absolutePath, 'utf8');
        const base16 = parse(content);
        const variant = {
          shade0: `#${base16.base00}`,
          shade1: `#${base16.base01}`,
          shade2: `#${base16.base02}`,
          shade3: `#${base16.base03}`,
          shade4: `#${base16.base04}`,
          shade5: `#${base16.base05}`,
          shade6: `#${base16.base06}`,
          shade7: `#${base16.base07}`,
          accent0: `#${base16.base08}`,
          accent1: `#${base16.base09}`,
          accent2: `#${base16.base0A}`,
          accent3: `#${base16.base0B}`,
          accent4: `#${base16.base0C}`,
          accent5: `#${base16.base0D}`,
          accent6: `#${base16.base0E}`,
          accent7: `#${base16.base0F}`,
        };
        const isDark =
          Color(variant.shade0).luminosity() <
          Color(variant.shade7).luminosity();
        const colors: ColorSet = {
          name: base16.scheme,
          variants: isDark ? { dark: variant } : { light: variant },
        };
        return colors;
      } catch (e: any) {
        console.error(e.message);
        console.log(
          `color set ${absolutePath} does not appear to be a base16 theme...`,
        );
      }
      console.error(`...unable to load color set ${value}`);
      process.exit(1);
    }
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
    else {
      const absolutePath = resolve(value);
      console.log(`loading template ${value} (path: ${absolutePath})...`);
      try {
        return (await import(absolutePath)).default;
      } catch {
        console.log(
          `template ${absolutePath} does not appear to be a themer template file...`,
        );
      }
    }
    console.error(`...unable to resolve template: ${value}`);
    process.exit(1);
  }),
);

for await (const file of themer(resolvedColorSets, resolvedTemplates)) {
  const path = join(options['output'], file.path);
  console.log(`writing ${path}...`);
  await mkdir(dirname(path), { recursive: true });
  await writeFile(path, file.content);
}

console.log('done!');
