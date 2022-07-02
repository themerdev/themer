import { useContext, useMemo } from 'react';
import ThemeContext from './ThemeContext';

const renderImage = ({
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
}) => `
  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 1920 1080'>
    <g clip-path='url(#a)'>
      <path fill='url(#b)' d='M0 0h1920v1080H0z' />
      <path fill='url(#c)' d='M0 0h1920v1080H0z' />
      <g filter='url(#d)'>
        <rect
          width='1920'
          height='1080'
          x='203.2'
          y='305.9'
          fill='${shade0}'
          rx='16'
          transform='rotate(-8 203.2 305.9)'
        />
        <rect
          width='1920'
          height='1080'
          x='203.2'
          y='305.9'
          fill='url(#e)'
          fill-opacity='.2'
          rx='16'
          transform='rotate(-8 203.2 305.9)'
        />
        <path
          fill='url(#f)'
          d='M205.4 321.7a16 16 0 0 1 13.6-18L2088.7 40.8a16 16 0 0 1 18 13.6l6.7 47.5L212.1 369.2l-6.7-47.5Z'
        />
        <circle
          cx='239.3'
          cy='333.1'
          r='16'
          fill='${accent0}'
          transform='rotate(-8 239.3 333.1)'
        />
        <circle
          cx='286.9'
          cy='326.4'
          r='16'
          fill='${accent2}'
          transform='rotate(-8 286.9 326.4)'
        />
        <circle
          cx='334.4'
          cy='319.7'
          r='16'
          fill='${accent3}'
          transform='rotate(-8 334.4 319.7)'
        />
        <path fill='${accent6}' d='m304.7 453.2 111-15.6 4.4 31.7-111 15.6z' />
        <path fill='${shade7}' d='m447.3 433.1 206-29 4.4 31.7-206 29z' />
        <path fill='${accent6}' d='m684.9 399.7 63.4-8.9 4.4 31.7-63.3 8.9z' />
        <path fill='${accent3}' d='m780 386.4 206-29 4.4 31.7-206 29z' />
        <path fill='${accent6}' d='m311.4 500.7 111-15.6 4.4 31.7-111 15.6z' />
        <path fill='${shade7}' d='m454 480.7 174.3-24.5 4.4 31.7-174.2 24.5z' />
        <path fill='${accent6}' d='m659.9 451.7 63.4-8.9 4.4 31.7-63.3 8.9z' />
        <path fill='${accent3}' d='m755 438.4 206-29 4.4 31.7-206 29z' />
        <path fill='${accent6}' d='m318 548.2 111-15.6 4.4 31.7-111 15.6z' />
        <path fill='${shade7}' d='m460.6 528.2 237.7-33.4 4.4 31.7-237.6 33.4z' />
        <path fill='${accent6}' d='m730 490.3 63.4-9 4.4 31.8-63.4 8.9z' />
        <path fill='${accent3}' d='m825.1 477 95-13.4 4.5 31.7-95 13.4z' />
        <path fill='${accent1}' d='m331.4 643.3 79.2-11.1 4.5 31.7-79.2 11z' />
        <path fill='${accent4}' d='m442.3 627.7 126.8-17.8 4.4 31.7-126.7 17.8z' />
        <path fill='${accent6}' d='m600.8 605.4 15.8-2.2 4.5 31.7-15.9 2.2z' />
        <path
          fill='${shade7}'
          d='m648.3 598.8 142.6-20 4.5 31.6-142.6 20zM901.8 563.1l15.8-2.2 4.5 31.7-15.9 2.2z'
        />
        <path
          fill='${accent1}'
          d='m822.6 574.3 47.5-6.7 4.5 31.7L827 606zM401.5 681.9l79.2-11.1 4.5 31.6-79.3 11.2zM434.9 919.6l79.2-11.1 4.5 31.6-79.2 11.2zM387.1 1039.4l79.2-11.1 4.5 31.7-79.2 11z'
        />
        <path
          fill='${shade7}'
          d='m512.4 666.3 15.8-2.2 4.5 31.7-15.9 2.2zM428.2 872.1l15.8-2.2 4.5 31.7-15.8 2.2zM726.5 1040.2l15.8-2.2 4.5 31.7-15.8 2.2zM973.3 957l15.8-2.2 4.5 31.7-15.8 2.2zM378.2 976l31.7-4.5 4.4 31.7-31.7 4.5zM471.5 720.6l142.6-20 4.5 31.6-142.6 20zM478.2 768.1l95-13.4 4.5 31.7-95 13.4zM799.3 868.4l95-13.4 4.5 31.7-95 13.4zM484.9 815.6l158.4-22.3 4.5 31.7-158.4 22.3zM545.8 904l174.3-24.5 4.4 31.7-174.2 24.5zM767.3 986l174.3-24.5 4.4 31.7-174.2 24.5zM498 1023.8l79.2-11.1 4.5 31.7-79.2 11z'
        />
        <path
          fill='${accent4}'
          d='m523.2 858.7 111-15.6 4.4 31.7-111 15.6zM656.4 1001.5l110.9-15.6 4.5 31.7-111 15.6z'
        />
        <path
          fill='${accent6}'
          d='m475.7 865.4 15.8-2.2 4.5 31.7-15.8 2.2zM608.9 1008.2l15.8-2.2 4.5 31.7-15.9 2.2zM751.7 875.1l15.9-2.2 4.4 31.7-15.8 2.2z'
        />
        <path fill='${accent0}' d='m894.3 855 31.7-4.4 4.4 31.6-31.6 4.5z' />
        <path
          fill='url(#g)'
          d='M1143.9 302.9h8v864h-8z'
          transform='rotate(-8 1144 303)'
        />
        <path
          fill='${shade6}'
          d='m1302.9 312.9 15.8-2.2 4.5 31.7-15.8 2.2zM1372.9 351.5l15.8-2.2 4.5 31.7-15.8 2.2zM1406.3 589.2l15.8-2.2 4.5 31.7-15.8 2.2zM1413 636.7l15.8-2.2 4.5 31.7-15.8 2.2zM1453.1 921.9l15.8-2.2 4.5 31.7-15.8 2.2zM1446.4 874.4l15.8-2.2 4.5 31.7-15.8 2.2zM1538 376.8l15.8-2.2 4.5 31.7-15.8 2.2zM1578.1 662l15.8-2.2 4.5 31.7-15.8 2.2zM1618.2 947.2l15.8-2.2 4.5 31.7-15.8 2.2zM1558.1 519.4l15.8-2.2 4.5 31.7-15.8 2.2zM1598.2 804.6l15.8-2.2 4.5 31.7-15.8 2.2zM1513 428.8l15.9-2.2 4.4 31.7-15.8 2.2zM1553.1 714l15.9-2.2 4.4 31.7-15.8 2.2zM1593.2 999.2l15.9-2.2 4.4 31.7-15.8 2.2zM1583.1 467.4l15.8-2.2 4.5 31.7-15.8 2.2zM1623.2 752.6l15.8-2.2 4.5 31.7-15.8 2.2zM1663.3 1037.8l15.8-2.2 4.5 31.7-15.8 2.2z'
        />
        <path
          fill='${accent4}'
          d='m1443 390.1 79.2-11.1 4.5 31.7-79.3 11zM1483.1 675.3l79.2-11.1 4.5 31.7-79.3 11zM1523.2 960.5l79.2-11.1 4.5 31.6-79.3 11.2zM1463 532.7l79.2-11.1 4.5 31.7-79.3 11zM1503.1 817.9l79.2-11.1 4.5 31.7-79.3 11zM1449.7 437.7l47.5-6.7 4.5 31.7-47.5 6.7zM1489.8 722.9l47.5-6.7 4.5 31.7-47.5 6.7zM1529.8 1008.1l47.5-6.7 4.5 31.7-47.5 6.7zM1456.3 485.2l111-15.6 4.4 31.7-111 15.6zM1496.4 770.4l111-15.6 4.4 31.7-111 15.6zM1536.5 1055.6l111-15.6 4.4 31.7-111 15.6z'
        />
        <path
          fill='${accent5}'
          d='m1585.6 370.1 111-15.6 4.4 31.7-111 15.6zM1625.7 655.3l111-15.6 4.4 31.7-111 15.6zM1665.8 940.5l111-15.6 4.4 31.7-111 15.6zM1605.6 512.7l111-15.6 4.4 31.7-111 15.6zM1645.7 797.9l111-15.6 4.4 31.7-111 15.6zM1685.8 1083.1l111-15.6 4.4 31.7-111 15.6zM1560.6 422.1l63.4-9 4.4 31.8-63.3 8.9zM1600.7 707.3l63.4-9 4.4 31.8-63.3 8.9zM1640.7 992.5l63.4-8.9 4.4 31.7-63.3 8.9z'
        />
        <path
          fill='${accent3}'
          d='m1630.6 460.7 190.1-26.7 4.5 31.7-190.1 26.7zM1670.7 745.9l190.1-26.7 4.5 31.7-190.1 26.7zM425.4 1082.5l285.2-40 4.5 31.6-285.2 40zM774 1033.5l142.6-20 4.5 31.6-142.6 20zM1710.8 1031.1l190.1-26.7 4.5 31.7-190.1 26.7z'
        />
        <path
          stroke='${accent0}'
          stroke-linecap='round'
          stroke-linejoin='round'
          stroke-width='4'
          d='m553.2 949.4 6.8-9 9 6.8 6.8-9 8 6.9 6.9-9 8 7 7.3-9.2 8.6 6.9 6.8-9 9 6.8 6.8-9 9 6.7 6.9-9 9 6.8 6.8-9 9 6.8 6.8-9 9 6.8 6.9-9 9 6.7 6.8-9 9 6.8'
        />
      </g>
    </g>
    <defs>
      <linearGradient
        id='b'
        x1='0'
        x2='1920'
        y1='1080'
        y2='0'
        gradientUnits='userSpaceOnUse'
      >
        <stop stop-color='${accent6}' />
        <stop offset='.5' stop-color='${accent0}' />
        <stop offset='1' stop-color='${accent2}' />
      </linearGradient>
      <linearGradient
        id='e'
        x1='387.6'
        x2='1826.4'
        y1='412.9'
        y2='1337.6'
        gradientUnits='userSpaceOnUse'
      >
        <stop stop-color='${shade7}' stop-opacity='0' />
        <stop offset='1' stop-color='${shade7}' stop-opacity='.3' />
      </linearGradient>
      <linearGradient
        id='f'
        x1='207.6'
        x2='2109'
        y1='337.6'
        y2='70.3'
        gradientUnits='userSpaceOnUse'
      >
        <stop stop-color='${shade1}' />
        <stop offset='1' stop-color='${shade1}' stop-opacity='0' />
      </linearGradient>
      <linearGradient
        id='g'
        x1='1147.9'
        x2='1147.9'
        y1='302.9'
        y2='1166.9'
        gradientUnits='userSpaceOnUse'
      >
        <stop stop-color='${shade3}' stop-opacity='.3' />
        <stop offset='1' stop-color='${shade3}' stop-opacity='0' />
      </linearGradient>
      <radialGradient
        id='c'
        cx='0'
        cy='0'
        r='1'
        gradientTransform='rotate(-122.4 509.4 164.4) scale(697.977 558.952)'
        gradientUnits='userSpaceOnUse'
      >
        <stop offset='.4' stop-color='${accent7}' />
        <stop offset='1' stop-color='${accent7}' stop-opacity='0' />
      </radialGradient>
      <clipPath id='a'>
        <path fill='white' d='M0 0h1920v1080H0z' />
      </clipPath>
      <filter
        id='d'
        width='2083.6'
        height='1368.7'
        x='187.2'
        y='26.6'
        color-interpolation-filters='sRGB'
        filterUnits='userSpaceOnUse'
      >
        <feFlood flood-opacity='0' result='BackgroundImageFix' />
        <feColorMatrix
          in='SourceAlpha'
          result='hardAlpha'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
        />
        <feOffset dy='4' />
        <feGaussianBlur stdDeviation='8' />
        <feComposite in2='hardAlpha' operator='out' />
        <feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0' />
        <feBlend in2='BackgroundImageFix' result='effect1_dropShadow_2_2' />
        <feBlend
          in='SourceGraphic'
          in2='effect1_dropShadow_2_2'
          result='shape'
        />
      </filter>
    </defs>
  </svg>
`;

const ProThemeHero = ({ theme, className }) => {
  const { activeColorSet } = useContext(ThemeContext);
  const svgData = useMemo(
    () =>
      Buffer.from(
        renderImage(theme.preparedColors[activeColorSet]),
        'utf-8',
      ).toString('base64'),
    [theme, activeColorSet],
  );
  return (
    <img
      className={className}
      alt={`Preview for ${theme.title}`}
      src={`data:image/svg+xml;base64,${svgData}`}
    />
  );
};

export default ProThemeHero;
