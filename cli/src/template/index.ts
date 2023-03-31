import { source } from 'common-tags';
import type { AnnotatedColorSet } from '../color-set/index.js';

export type RenderOptions = {
  wallpaperSizes: { w: number; h: number }[];
};

export type OutputFile = {
  path: string;
  content: string;
};

export interface Template {
  name: string;
  render: (
    colorSet: AnnotatedColorSet,
    options: RenderOptions,
  ) => AsyncGenerator<OutputFile>;
  renderInstructions: (paths: string[], colorSet: AnnotatedColorSet) => string;
}

export const listOutputFiles: Template['renderInstructions'] = (
  paths: string[],
) => source`
    Files generated:

    ${paths.map((p) => `* \`${p}\``).join('\n')}
  `;

export function weightedRandom<T>(map: Map<T, number>): T {
  if (map.size === 0) throw new Error('weightedRandom map must have values');
  const cumulativeWeights = [...map.values()].reduce<number[]>(
    (c, weight, i) => c.concat(weight + (c[i - 1] || 0)),
    [],
  );
  const random =
    (cumulativeWeights[cumulativeWeights.length - 1] || 0) * Math.random();
  return [...map.keys()][cumulativeWeights.findIndex((cw) => random < cw)]!;
}

export const version = '5.0.1';

export function join(...parts: string[]): string {
  return parts.join('/');
}

export function dirname(path: string): string {
  return path.substring(0, path.lastIndexOf('/'));
}
