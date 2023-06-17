import defaultColorSet from './default.js';
import dracula from './dracula.js';
import fingerPaint from './finger-paint.js';
import githubUniverse from './github-universe.js';
import greenAsAWhistle from './green-as-a-whistle.js';
import type { ColorSet } from './index.js';
import lucid from './lucid.js';
import mojave from './mojave.js';
import monkey from './monkey.js';
import nightSky from './night-sky.js';
import nova from './nova.js';
import one from './one.js';
import polarIce from './polar-ice.js';
import rightInTheTeals from './right-in-the-teals.js';
import rivet from './rivet.js';
import seti from './seti.js';
import shoulderPads from './shoulder-pads.js';
import solarized from './solarized.js';

const BUILT_IN_COLOR_SET_IDENTIFIERS = [
  'default',
  'dracula',
  'finger-paint',
  'github-universe',
  'green-as-a-whistle',
  'lucid',
  'mojave',
  'monkey',
  'night-sky',
  'nova',
  'one',
  'polar-ice',
  'right-in-the-teals',
  'rivet',
  'seti',
  'shoulder-pads',
  'solarized',
] as const;

export type BuiltInColorSet = (typeof BUILT_IN_COLOR_SET_IDENTIFIERS)[number];
export const allBuiltInColorSetIdentifiers: BuiltInColorSet[] = [
  ...BUILT_IN_COLOR_SET_IDENTIFIERS,
];

export function resolveColorSet(
  colorSet: BuiltInColorSet | ColorSet,
): ColorSet {
  switch (colorSet) {
    case 'default':
      return defaultColorSet;
    case 'dracula':
      return dracula;
    case 'finger-paint':
      return fingerPaint;
    case 'github-universe':
      return githubUniverse;
    case 'green-as-a-whistle':
      return greenAsAWhistle;
    case 'lucid':
      return lucid;
    case 'mojave':
      return mojave;
    case 'monkey':
      return monkey;
    case 'night-sky':
      return nightSky;
    case 'nova':
      return nova;
    case 'one':
      return one;
    case 'polar-ice':
      return polarIce;
    case 'right-in-the-teals':
      return rightInTheTeals;
    case 'rivet':
      return rivet;
    case 'seti':
      return seti;
    case 'shoulder-pads':
      return shoulderPads;
    case 'solarized':
      return solarized;
    default:
      return colorSet;
  }
}

export const allBuiltInColorSets: Map<BuiltInColorSet, ColorSet> = new Map(
  allBuiltInColorSetIdentifiers.map((id) => [id, resolveColorSet(id)]),
);
