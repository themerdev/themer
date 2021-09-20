import { useContext } from 'react';
import Link from './Link';
import { has } from 'lodash';
import styles from './PreBuiltList.module.css';
import ThemeContext, { paramsFromState } from './ThemeContext';

import { colors as defaultColors } from '@themerdev/colors-default';
import { colors as draculaColors } from '@themerdev/colors-dracula';
import { colors as fingerPaintColors } from '@themerdev/colors-finger-paint';
import { colors as githubUniverseColors } from '@themerdev/colors-github-universe';
import { colors as greenAsAWhistleColors } from '@themerdev/colors-green-as-a-whistle';
import { colors as lucidColors } from '@themerdev/colors-lucid';
import { colors as mojaveColors } from '@themerdev/colors-mojave';
import { colors as monkeyColors } from '@themerdev/colors-monkey';
import { colors as nightSkyColors } from '@themerdev/colors-night-sky';
import { colors as novaColors } from '@themerdev/colors-nova';
import { colors as oneColors } from '@themerdev/colors-one';
import { colors as polarIceColors } from '@themerdev/colors-polar-ice';
import { colors as rightInTheTealsColors } from '@themerdev/colors-right-in-the-teals';
import { colors as rivetColors } from '@themerdev/colors-rivet';
import { colors as setiColors } from '@themerdev/colors-seti';
import { colors as solarizedColors } from '@themerdev/colors-solarized';

const PreBuiltLink = ({ colors, children }) => {
  const { activeColorSet } = useContext(ThemeContext);
  const oppositeColorSet = activeColorSet === 'dark' ? 'light' : 'dark';
  const preparedState = {
    colors,
    activeColorSet: has(colors, activeColorSet)
      ? activeColorSet
      : oppositeColorSet,
    calculateIntermediaryShades: {
      dark: !has(colors, 'dark.shade1'),
      light: !has(colors, 'light.shade1'),
    },
  };
  return <Link href={paramsFromState(preparedState)}>{children}</Link>;
};

const PreBuiltList = () => {
  const { getActiveColorOrFallback } = useContext(ThemeContext);
  return (
    <ul
      className={styles.linksets}
      style={{ color: getActiveColorOrFallback(['shade5']) }}
    >
      <li>
        Original color sets:{' '}
        <ul className={styles.links}>
          <li>
            <PreBuiltLink colors={defaultColors}>Default</PreBuiltLink>
          </li>
          <li>
            <PreBuiltLink colors={nightSkyColors}>Night Sky</PreBuiltLink>
          </li>
          <li>
            <PreBuiltLink colors={polarIceColors}>Polar Ice</PreBuiltLink>
          </li>
          <li>
            <PreBuiltLink colors={fingerPaintColors}>Finger Paint</PreBuiltLink>
          </li>
          <li>
            <PreBuiltLink colors={monkeyColors}>Monkey</PreBuiltLink>
          </li>
          <li>
            <PreBuiltLink colors={rightInTheTealsColors}>
              Right in the Teals
            </PreBuiltLink>
          </li>
          <li>
            <PreBuiltLink colors={greenAsAWhistleColors}>
              Green as a Whistle
            </PreBuiltLink>
          </li>
        </ul>
      </li>
      <li>
        Ports from third party themes:{' '}
        <ul className={styles.links}>
          <li>
            <PreBuiltLink colors={oneColors}>One</PreBuiltLink>
          </li>
          <li>
            <PreBuiltLink colors={lucidColors}>Lucid</PreBuiltLink>
          </li>
          <li>
            <PreBuiltLink colors={solarizedColors}>Solarized</PreBuiltLink>
          </li>
          <li>
            <PreBuiltLink colors={githubUniverseColors}>
              GitHub Universe
            </PreBuiltLink>
          </li>
          <li>
            <PreBuiltLink colors={novaColors}>Nova</PreBuiltLink>
          </li>
          <li>
            <PreBuiltLink colors={mojaveColors}>Mojave</PreBuiltLink>
          </li>
          <li>
            <PreBuiltLink colors={rivetColors}>Rivet</PreBuiltLink>
          </li>
          <li>
            <PreBuiltLink colors={draculaColors}>Dracula</PreBuiltLink>
          </li>
          <li>
            <PreBuiltLink colors={setiColors}>Seti</PreBuiltLink>
          </li>
        </ul>
      </li>
    </ul>
  );
};

export default PreBuiltList;
