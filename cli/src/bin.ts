#!/usr/bin/env node

import Color from 'color';
import { Command } from 'commander';
import flatten from 'lodash/flatten.js';
import { parse } from 'yaml';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import themer, {
  allBuiltInColorSetIdentifiers,
  allBuiltInTemplateIdentifiers,
  BuiltInColorSet,
  BuiltInTemplate,
  ColorSet,
  RenderOptions,
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
    '-c, --color-set <built-in color set name or file path...>',
    'the color set(s) to render',
    'default',
  )
  .option(
    '-t, --template <built-in template name or file path...>',
    'the theme template(s) to render',
    '*',
  )
  .option(
    '-s, --size <wallpaper resolution...>',
    'resolution to render in pixels, in the format [width]x[height]',
    '2880x1800',
  )
  .option('-o, --output <path>', 'the output directory', 'themer-output');

program.parse();

const options = program.opts();

const expandedColorSets: string[] = flatten(
  (typeof options['colorSet'] === 'string'
    ? [options['colorSet']]
    : options['colorSet']
  ).map((value: string) =>
    value === '*' ? allBuiltInColorSetIdentifiers : value,
  ),
);

function isBuiltInColorSet(value: string): value is BuiltInColorSet {
  return allBuiltInColorSetIdentifiers.includes(value as BuiltInColorSet);
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

function isTuplePair<T>(arr: T[]): arr is [T, T] {
  return arr.length === 2;
}

const resolvedResolutions: RenderOptions['wallpaperSizes'] = (
  typeof options['size'] === 'string' ? [options['size']] : options['size']
).map((opt: string) => {
  const dimensions = opt.split('x').map((n) => parseInt(n));
  if (isTuplePair(dimensions) && dimensions.every((n) => !isNaN(n))) {
    const [w, h] = dimensions;
    return { w, h };
  }
  console.error(
    `...size option doesn't appear to be a valid WxH resolution specifier: ${opt}`,
  );
  process.exit(1);
});

const renderOptions: RenderOptions = {
  wallpaperSizes: resolvedResolutions,
};

for await (const file of themer(
  resolvedColorSets,
  resolvedTemplates,
  renderOptions,
)) {
  const path = join(options['output'], file.path);
  console.log(`writing ${path}...`);
  await mkdir(dirname(path), { recursive: true });
  await writeFile(path, file.content);
}

console.log('done!');
