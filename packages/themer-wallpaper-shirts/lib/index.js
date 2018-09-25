const CELL_WIDTH = 386;
const CELL_HEIGHT = 412;
const PATTERN_WIDTH = CELL_WIDTH * 8;
const PATTERN_HEIGHT = CELL_HEIGHT * 6;

// TODO: DRY this up
const getSizesFromOptOrDefault = opt => {
  if (opt) {
    const unparsedSizes = Array.isArray(opt) ? opt : [opt];
    return unparsedSizes.map(unparsedSize => {
      const results = /(\d+)x(\d+)/.exec(unparsedSize);
      if (results) {
        const w = parseInt(results[1], 10);
        const h = parseInt(results[2], 10);
        return {
          w,
          h,
        };
      } else {
        throw new Error(`Malformed resolution argument: ${unparsedSize}`);
      }
    });
  } else {
    return [
      {
        w: 2880,
        h: 1800,
      },
      {
        w: 750,
        h: 1334,
      },
    ];
  }
};

// TODO: DRY this up
const deepFlatten = arr =>
  arr.reduce(
    (cumulative, inner) =>
      cumulative.concat(Array.isArray(inner) ? deepFlatten(inner) : inner),
    []
  );

const render = (colors, options) => {
  try {
    var sizes = getSizesFromOptOrDefault(
      options['themer-wallpaper-triangles-size']
    );
  } catch (e) {
    return [Promise.reject(e.message)];
  }

  // TODO: DRY this up
  const colorSets = Object.entries(colors).map(([name, colors]) => ({name, colors}));

  return deepFlatten(
    sizes.map(
      size => colorSets.map(colorSet => {
        const {
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
        } = colorSet.colors;
        const scaleFactor = 4;
        const adjustedCellWidth = CELL_WIDTH / scaleFactor;
        const adjustedCellHeight = CELL_HEIGHT / scaleFactor;
        const cellCountX = size.w / adjustedCellWidth;
        const cellCountY = size.h / adjustedCellHeight;
        const surpriseX = Math.floor(cellCountX / 2) * adjustedCellWidth + (Math.floor(cellCountY / 2) % 2 === 0 ? 0 : (adjustedCellWidth / 2));
        const surpriseY = Math.floor(cellCountY / 2) * adjustedCellHeight;
        return Promise.resolve({
          name: `themer-wallpaper-shirts-${colorSet.name}-${size.w}-${size.h}.svg`,
          contents: Buffer.from(
            `
              <svg width="${size.w}" height="${size.h}" viewBox="0 0 ${size.w} ${size.h}" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="bg" width="${PATTERN_WIDTH / scaleFactor}" height="${PATTERN_HEIGHT / scaleFactor}" viewBox="0 0 ${PATTERN_WIDTH} ${PATTERN_HEIGHT}" patternUnits="userSpaceOnUse">
                    <rect width="${PATTERN_WIDTH}" height="${PATTERN_HEIGHT}" fill="${shade0}"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M151.113 84.8875L59 138.069L91.1245 193.71L128 172.42V326.569H190.021H196H258.021V172.42L294.897 193.71L327.021 138.069L235.77 85.3846C231.138 104.429 213.97 118.569 193.5 118.569C172.852 118.569 155.564 104.183 151.113 84.8875Z" fill="${accent1}"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M571.96 126.022C575.858 129.886 582.142 129.886 586.04 126.022L627.072 85.3497L690 121.82L667.196 161.468L642.378 147.085C637.734 156.807 630.655 175.016 630.308 196.255C629.869 223.153 641.717 297.89 645.338 320.047V326.836H583.002H574.998H512.662V320.047C516.284 297.89 528.131 223.153 527.692 196.255C527.345 175.016 520.266 156.807 515.622 147.085L490.804 161.468L468 121.82L530.928 85.3497L571.96 126.022Z" fill="url(#paint0_linear)"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M923.113 84.8875L831 138.069L863.125 193.71L900 172.42V326.569H962.021H968H1030.02V172.42L1066.9 193.71L1099.02 138.069L1007.77 85.3846C1003.14 104.429 985.97 118.569 965.5 118.569C944.852 118.569 927.564 104.183 923.113 84.8875Z" fill="${accent7}"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1009 155H979V187L994 191L1009 187V155Z" fill="${shade2}"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1309.11 84.8875L1217 138.069L1249.12 193.71L1286 172.42V326.569H1348.02H1354H1416.02V172.42L1452.9 193.71L1485.02 138.069L1393.77 85.3846C1389.14 104.429 1371.97 118.569 1351.5 118.569C1330.85 118.569 1313.56 104.183 1309.11 84.8875Z" fill="url(#paint1_radial)"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1729.96 126.022C1733.86 129.886 1740.14 129.886 1744.04 126.022L1785.07 85.3497L1848 121.82L1825.2 161.468L1800.38 147.085C1795.73 156.807 1788.66 175.016 1788.31 196.255C1787.87 223.153 1799.72 297.89 1803.34 320.047V326.836H1741H1733H1670.66V320.047C1674.28 297.89 1686.13 223.153 1685.69 196.255C1685.34 175.016 1678.27 156.807 1673.62 147.085L1648.8 161.468L1626 121.82L1688.93 85.3497L1729.96 126.022Z" fill="${shade6}"/>
                    <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="1626" y="85" width="223" height="242">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M1729.96 126.022C1733.86 129.886 1740.14 129.886 1744.04 126.022L1785.07 85.3497L1848 121.82L1825.2 161.468L1800.38 147.085C1795.73 156.807 1788.66 175.016 1788.31 196.255C1787.87 223.153 1799.72 297.89 1803.34 320.047V326.836H1741H1733H1670.66V320.047C1674.28 297.89 1686.13 223.153 1685.69 196.255C1685.34 175.016 1678.27 156.807 1673.62 147.085L1648.8 161.468L1626 121.82L1688.93 85.3497L1729.96 126.022Z" fill="#C4C4C4"/>
                    </mask>
                    <g mask="url(#mask0)">
                      <rect x="1610.33" y="115.577" width="199.795" height="290.528" transform="rotate(-34.9168 1610.33 115.577)" fill="${shade4}"/>
                    </g>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1778 147H1748V179L1763 183L1778 179V147Z" fill="${accent7}"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M344.113 496.887L252 550.069L284.125 605.71L321 584.42V738.569H383.021H389H451.021V584.42L487.897 605.71L520.021 550.069L428.77 497.385C424.138 516.43 406.97 530.569 386.5 530.569C365.852 530.569 348.564 516.183 344.113 496.887Z" fill="${shade7}"/>
                    <mask id="mask1" mask-type="alpha" maskUnits="userSpaceOnUse" x="252" y="496" width="269" height="243">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M344.113 496.887L252 550.069L284.125 605.71L321 584.42V738.569H383.021H389H451.021V584.42L487.897 605.71L520.021 550.069L428.77 497.385C424.138 516.43 406.97 530.569 386.5 530.569C365.852 530.569 348.564 516.183 344.113 496.887Z" fill="#C4C4C4"/>
                    </mask>
                    <g mask="url(#mask1)">
                      <rect x="269" y="643.408" width="134" height="49" transform="rotate(-18 269 643.408)" fill="${shade5}" fill-opacity="0.5"/>
                      <rect x="269" y="670.408" width="122.167" height="49" transform="rotate(-18 269 670.408)" fill="${accent5}" fill-opacity="0.5"/>
                    </g>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M764.96 538.022C768.858 541.886 775.142 541.886 779.04 538.022L820.072 497.35L883 533.82L860.196 573.468L835.378 559.085C830.734 568.807 823.655 587.016 823.308 608.255C822.869 635.153 834.717 709.89 838.338 732.048V738.836H776.002H767.998H705.662V732.048C709.284 709.89 721.131 635.153 720.692 608.255C720.345 587.016 713.266 568.807 708.622 559.085L683.804 573.468L661 533.82L723.928 497.35L764.96 538.022Z" fill="${shade1}"/>
                    <mask id="mask2" mask-type="alpha" maskUnits="userSpaceOnUse" x="661" y="497" width="223" height="242">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M764.96 538.022C768.858 541.886 775.142 541.886 779.04 538.022L820.072 497.35L883 533.82L860.196 573.468L835.378 559.085C830.734 568.807 823.655 587.016 823.308 608.255C822.869 635.153 834.717 709.89 838.338 732.048V738.836H776.002H767.998H705.662V732.048C709.284 709.89 721.131 635.153 720.692 608.255C720.345 587.016 713.266 568.807 708.622 559.085L683.804 573.468L661 533.82L723.928 497.35L764.96 538.022Z" fill="#C4C4C4"/>
                    </mask>
                    <g mask="url(#mask2)">
                      <circle cx="771.5" cy="602.5" r="89.5" fill="${shade2}"/>
                      <circle cx="771.5" cy="602.5" r="71.5" fill="${shade3}"/>
                      <circle cx="771.5" cy="602.5" r="54.5" fill="${shade4}"/>
                      <circle cx="771.5" cy="602.5" r="34.5" fill="${shade5}"/>
                    </g>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1150.96 538.022C1154.86 541.886 1161.14 541.886 1165.04 538.022L1206.07 497.35L1269 533.82L1246.2 573.468L1221.38 559.085C1216.73 568.807 1209.66 587.016 1209.31 608.255C1208.87 635.153 1220.72 709.89 1224.34 732.048V738.836H1162H1154H1091.66V732.048C1095.28 709.89 1107.13 635.153 1106.69 608.255C1106.34 587.016 1099.27 568.807 1094.62 559.085L1069.8 573.468L1047 533.82L1109.93 497.35L1150.96 538.022Z" fill="${accent0}"/>
                    <rect x="1124" y="565" width="68" height="73" fill="${shade7}" fill-opacity="0.2"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1502.11 496.887L1410 550.069L1442.12 605.71L1479 584.42V738.569H1541.02H1547H1609.02V584.42L1645.9 605.71L1678.02 550.069L1586.77 497.385C1582.14 516.43 1564.97 530.569 1544.5 530.569C1523.85 530.569 1506.56 516.183 1502.11 496.887Z" fill="${shade6}"/>
                    <mask id="mask3" mask-type="alpha" maskUnits="userSpaceOnUse" x="1410" y="496" width="269" height="243">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M1502.11 496.887L1410 550.069L1442.12 605.71L1479 584.42V738.569H1541.02H1547H1609.02V584.42L1645.9 605.71L1678.02 550.069L1586.77 497.385C1582.14 516.429 1564.97 530.569 1544.5 530.569C1523.85 530.569 1506.56 516.183 1502.11 496.887Z" fill="#C4C4C4"/>
                    </mask>
                    <g mask="url(#mask3)">
                      <path d="M1544 583L1644.46 752.5H1443.54L1544 583Z" fill="${accent6}"/>
                    </g>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1922.96 538.022C1926.86 541.886 1933.14 541.886 1937.04 538.022L1978.07 497.35L2041 533.82L2018.2 573.468L1993.38 559.085C1988.73 568.807 1981.66 587.016 1981.31 608.255C1980.87 635.153 1992.72 709.89 1996.34 732.048V738.836H1934H1926H1863.66V732.048C1867.28 709.89 1879.13 635.153 1878.69 608.255C1878.34 587.016 1871.27 568.807 1866.62 559.085L1841.8 573.468L1819 533.82L1881.93 497.35L1922.96 538.022Z" fill="${accent2}"/>
                    <line x1="1895.77" y1="567.232" x2="1967.77" y2="639.232" stroke="${shade0}" stroke-width="5"/>
                    <line x1="1892.23" y1="639.232" x2="1964.23" y2="567.232" stroke="${shade0}" stroke-width="5"/>
                    <circle cx="1930" cy="570" r="7" fill="${shade0}" fill-opacity="0.6"/>
                    <circle cx="1930" cy="630" r="7" fill="${shade0}" fill-opacity="0.6"/>
                    <circle cx="1900" cy="600" r="7" fill="${shade0}" fill-opacity="0.6"/>
                    <circle cx="1960" cy="600" r="7" fill="${shade0}" fill-opacity="0.6"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M537.113 908.887L445 962.069L477.125 1017.71L514 996.42V1150.57H576.021H582H644.021V996.42L680.897 1017.71L713.021 962.069L621.77 909.385C617.138 928.43 599.97 942.569 579.5 942.569C558.852 942.569 541.564 928.183 537.113 908.887Z" fill="${accent1}"/>
                    <mask id="mask4" mask-type="alpha" maskUnits="userSpaceOnUse" x="445" y="908" width="269" height="243">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M537.113 908.887L445 962.069L477.125 1017.71L514 996.42V1150.57H576.021H582H644.021V996.42L680.897 1017.71L713.021 962.069L621.77 909.385C617.138 928.43 599.97 942.569 579.5 942.569C558.852 942.569 541.564 928.183 537.113 908.887Z" fill="#C4C4C4"/>
                    </mask>
                    <g mask="url(#mask4)">
                      <rect x="502" y="1041" width="154" height="115" fill="${shade2}"/>
                      <rect x="514" y="997" width="130" height="44" fill="${shade1}"/>
                    </g>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M185.96 950.022C189.858 953.886 196.142 953.886 200.04 950.022L241.072 909.35L304 945.82L281.197 985.468L256.378 971.085C251.734 980.807 244.655 999.016 244.308 1020.25C243.869 1047.15 255.717 1121.89 259.338 1144.05V1150.84H197.002H188.998H126.662V1144.05C130.284 1121.89 142.131 1047.15 141.692 1020.25C141.345 999.016 134.266 980.807 129.622 971.085L104.804 985.468L82 945.82L144.928 909.35L185.96 950.022Z" fill="${accent3}"/>
                    <mask id="mask5" mask-type="alpha" maskUnits="userSpaceOnUse" x="82" y="909" width="223" height="242">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M185.96 950.022C189.858 953.886 196.142 953.886 200.04 950.022L241.072 909.35L304 945.82L281.197 985.468L256.378 971.085C251.734 980.807 244.655 999.016 244.308 1020.25C243.869 1047.15 255.717 1121.89 259.338 1144.05V1150.84H197.002H188.998H126.662V1144.05C130.284 1121.89 142.131 1047.15 141.692 1020.25C141.345 999.016 134.266 980.807 129.622 971.085L104.804 985.468L82 945.82L144.928 909.35L185.96 950.022Z" fill="#C4C4C4"/>
                    </mask>
                    <g mask="url(#mask5)">
                      <circle cx="134" cy="942" r="12" fill="${shade7}"/>
                      <circle cx="134" cy="992" r="12" fill="${shade7}"/>
                      <circle cx="84" cy="967" r="12" fill="${shade7}"/>
                      <circle cx="134" cy="1042" r="12" fill="${shade7}"/>
                      <circle cx="134" cy="1092" r="12" fill="${shade7}"/>
                      <circle cx="134" cy="1142" r="12" fill="${shade7}"/>
                      <circle cx="174" cy="917" r="12" fill="${shade7}"/>
                      <circle cx="174" cy="967" r="12" fill="${shade7}"/>
                      <circle cx="174" cy="1017" r="12" fill="${shade7}"/>
                      <circle cx="174" cy="1067" r="12" fill="${shade7}"/>
                      <circle cx="174" cy="1117" r="12" fill="${shade7}"/>
                      <circle cx="224" cy="942" r="12" fill="${shade7}"/>
                      <circle cx="224" cy="992" r="12" fill="${shade7}"/>
                      <circle cx="224" cy="1042" r="12" fill="${shade7}"/>
                      <circle cx="224" cy="1092" r="12" fill="${shade7}"/>
                      <circle cx="224" cy="1142" r="12" fill="${shade7}"/>
                      <circle cx="274" cy="917" r="12" fill="${shade7}"/>
                      <circle cx="274" cy="967" r="12" fill="${shade7}"/>
                    </g>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M923.113 908.887L831 962.069L863.125 1017.71L900 996.42V1150.57H962.021H968H1030.02V996.42L1066.9 1017.71L1099.02 962.069L1007.77 909.385C1003.14 928.43 985.97 942.569 965.5 942.569C944.852 942.569 927.564 928.183 923.113 908.887Z" fill="${accent4}"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1309.11 908.887L1217 962.069L1249.12 1017.71L1286 996.42V1150.57H1348.02H1354H1416.02V996.42L1452.9 1017.71L1485.02 962.069L1393.77 909.385C1389.14 928.43 1371.97 942.569 1351.5 942.569C1330.85 942.569 1313.56 928.183 1309.11 908.887Z" fill="${shade7}"/>
                    <mask id="mask6" mask-type="alpha" maskUnits="userSpaceOnUse" x="1217" y="908" width="269" height="243">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M1309.11 908.887L1217 962.069L1249.12 1017.71L1286 996.42V1150.57H1348.02H1354H1416.02V996.42L1452.9 1017.71L1485.02 962.069L1393.77 909.385C1389.14 928.43 1371.97 942.569 1351.5 942.569C1330.85 942.569 1313.56 928.183 1309.11 908.887Z" fill="#C4C4C4"/>
                    </mask>
                    <g mask="url(#mask6)">
                      <line x1="1217" y1="925" x2="1485" y2="925" stroke="${accent5}" stroke-width="10"/>
                      <line x1="1217" y1="955" x2="1485" y2="955" stroke="${accent5}" stroke-width="10"/>
                      <line x1="1217" y1="985" x2="1485" y2="985" stroke="${accent5}" stroke-width="10"/>
                      <line x1="1217" y1="1015" x2="1485" y2="1015" stroke="${accent5}" stroke-width="10"/>
                      <line x1="1217" y1="1045" x2="1485" y2="1045" stroke="${accent5}" stroke-width="10"/>
                      <line x1="1217" y1="1075" x2="1485" y2="1075" stroke="${accent5}" stroke-width="10"/>
                      <line x1="1217" y1="1105" x2="1485" y2="1105" stroke="${accent5}" stroke-width="10"/>
                      <line x1="1217" y1="1135" x2="1485" y2="1135" stroke="${accent5}" stroke-width="10"/>
                    </g>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1729.96 950.022C1733.86 953.886 1740.14 953.886 1744.04 950.022L1785.07 909.35L1848 945.82L1825.2 985.468L1800.38 971.085C1795.73 980.807 1788.66 999.016 1788.31 1020.25C1787.87 1047.15 1799.72 1121.89 1803.34 1144.05V1150.84H1741H1733H1670.66V1144.05C1674.28 1121.89 1686.13 1047.15 1685.69 1020.25C1685.34 999.016 1678.27 980.807 1673.62 971.085L1648.8 985.468L1626 945.82L1688.93 909.35L1729.96 950.022Z" fill="${shade3}"/>
                    <mask id="mask7" mask-type="alpha" maskUnits="userSpaceOnUse" x="1626" y="909" width="223" height="242">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M1729.96 950.022C1733.86 953.886 1740.14 953.886 1744.04 950.022L1785.07 909.35L1848 945.82L1825.2 985.468L1800.38 971.085C1795.73 980.807 1788.66 999.016 1788.31 1020.25C1787.87 1047.15 1799.72 1121.89 1803.34 1144.05V1150.84H1741H1733H1670.66V1144.05C1674.28 1121.89 1686.13 1047.15 1685.69 1020.25C1685.34 999.016 1678.27 980.807 1673.62 971.085L1648.8 985.468L1626 945.82L1688.93 909.35L1729.96 950.022Z" fill="#C4C4C4"/>
                    </mask>
                    <g mask="url(#mask7)">
                      <rect x="1680" y="905" width="32" height="250" fill="${accent0}" fill-opacity="0.6"/>
                      <rect x="1620" y="905" width="32" height="250" fill="${accent0}" fill-opacity="0.6"/>
                      <rect x="1740" y="905" width="32" height="250" fill="${accent0}" fill-opacity="0.6"/>
                      <rect x="1800" y="905" width="32" height="250" fill="${accent0}" fill-opacity="0.6"/>
                      <rect x="1615" y="928" width="237" height="40" fill="${accent5}" fill-opacity="0.54"/>
                      <rect x="1615" y="988" width="237" height="40" fill="${accent5}" fill-opacity="0.54"/>
                      <rect x="1615" y="1048" width="237" height="40" fill="${accent5}" fill-opacity="0.54"/>
                      <rect x="1615" y="1108" width="237" height="40" fill="${accent5}" fill-opacity="0.54"/>
                      <line x1="1615" y1="951.5" x2="1852" y2="951.5" stroke="${accent3}" stroke-opacity="0.5" stroke-width="3"/>
                      <line x1="1615" y1="1011.5" x2="1852" y2="1011.5" stroke="${accent3}" stroke-opacity="0.5" stroke-width="3"/>
                      <line x1="1615" y1="1071.5" x2="1852" y2="1071.5" stroke="${accent3}" stroke-opacity="0.5" stroke-width="3"/>
                      <line x1="1615" y1="1131.5" x2="1852" y2="1131.5" stroke="${accent3}" stroke-opacity="0.5" stroke-width="3"/>
                      <line x1="1665.5" y1="905" x2="1665.5" y2="1155" stroke="${accent2}" stroke-opacity="0.2" stroke-width="3"/>
                      <line x1="1725.5" y1="905" x2="1725.5" y2="1155" stroke="${accent2}" stroke-opacity="0.2" stroke-width="3"/>
                      <line x1="1785.5" y1="905" x2="1785.5" y2="1155" stroke="${accent2}" stroke-opacity="0.2" stroke-width="3"/>
                      <line x1="1845.5" y1="905" x2="1845.5" y2="1155" stroke="${accent2}" stroke-opacity="0.2" stroke-width="3"/>
                    </g>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M378.96 1362.02C382.858 1365.89 389.142 1365.89 393.04 1362.02L434.072 1321.35L497 1357.82L474.197 1397.47L449.378 1383.08C444.734 1392.81 437.655 1411.02 437.309 1432.25C436.869 1459.15 448.717 1533.89 452.338 1556.05V1562.84H390.002H381.998H319.662V1556.05C323.284 1533.89 335.131 1459.15 334.692 1432.25C334.345 1411.02 327.266 1392.81 322.622 1383.08L297.804 1397.47L275 1357.82L337.928 1321.35L378.96 1362.02Z" fill="url(#paint2_radial)"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M764.96 1362.02C768.858 1365.89 775.142 1365.89 779.04 1362.02L820.072 1321.35L883 1357.82L860.196 1397.47L835.378 1383.08C830.734 1392.81 823.655 1411.02 823.308 1432.25C822.869 1459.15 834.717 1533.89 838.338 1556.05V1562.84H776.002H767.998H705.662V1556.05C709.284 1533.89 721.131 1459.15 720.692 1432.25C720.345 1411.02 713.266 1392.81 708.622 1383.08L683.804 1397.47L661 1357.82L723.928 1321.35L764.96 1362.02Z" fill="${accent6}"/>
                    <mask id="mask8" mask-type="alpha" maskUnits="userSpaceOnUse" x="661" y="1321" width="223" height="242">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M764.96 1362.02C768.858 1365.89 775.142 1365.89 779.04 1362.02L820.072 1321.35L883 1357.82L860.196 1397.47L835.378 1383.08C830.734 1392.81 823.655 1411.02 823.308 1432.25C822.869 1459.15 834.717 1533.89 838.338 1556.05V1562.84H776.002H767.998H705.662V1556.05C709.284 1533.89 721.131 1459.15 720.692 1432.25C720.345 1411.02 713.266 1392.81 708.622 1383.08L683.804 1397.47L661 1357.82L723.928 1321.35L764.96 1362.02Z" fill="#C4C4C4"/>
                    </mask>
                    <g mask="url(#mask8)">
                      <line x1="675" y1="1321" x2="675" y2="1563" stroke="${shade7}" stroke-width="10"/>
                      <line x1="695" y1="1321" x2="695" y2="1563" stroke="${shade7}" stroke-width="10"/>
                      <line x1="715" y1="1321" x2="715" y2="1563" stroke="${shade7}" stroke-width="10"/>
                      <line x1="735" y1="1321" x2="735" y2="1563" stroke="${shade7}" stroke-width="10"/>
                      <line x1="755" y1="1321" x2="755" y2="1563" stroke="${shade7}" stroke-width="10"/>
                      <line x1="775" y1="1321" x2="775" y2="1563" stroke="${shade7}" stroke-width="10"/>
                      <line x1="795" y1="1321" x2="795" y2="1563" stroke="${shade7}" stroke-width="10"/>
                      <line x1="815" y1="1321" x2="815" y2="1563" stroke="${shade7}" stroke-width="10"/>
                      <line x1="835" y1="1321" x2="835" y2="1563" stroke="${shade7}" stroke-width="10"/>
                      <line x1="855" y1="1321" x2="855" y2="1563" stroke="${shade7}" stroke-width="10"/>
                      <line x1="875" y1="1321" x2="875" y2="1563" stroke="${shade7}" stroke-width="10"/>
                    </g>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1116.11 1320.89L1024 1374.07L1056.12 1429.71L1093 1408.42V1562.57H1155.02H1161H1223.02V1408.42L1259.9 1429.71L1292.02 1374.07L1200.77 1321.38C1196.14 1340.43 1178.97 1354.57 1158.5 1354.57C1137.85 1354.57 1120.56 1340.18 1116.11 1320.89Z" fill="${shade1}"/>
                    <path d="M1158 1386L1191.77 1444.5H1124.23L1158 1386Z" stroke="${accent7}" stroke-opacity="0.61" stroke-width="5"/>
                    <path d="M1158 1417L1191.77 1475.5H1124.23L1158 1417Z" stroke="${accent7}" stroke-opacity="0.61" stroke-width="5"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1536.96 1362.02C1540.86 1365.89 1547.14 1365.89 1551.04 1362.02L1592.07 1321.35L1655 1357.82L1632.2 1397.47L1607.38 1383.08C1602.73 1392.81 1595.66 1411.02 1595.31 1432.25C1594.87 1459.15 1606.72 1533.89 1610.34 1556.05V1562.84H1548H1540H1477.66V1556.05C1481.28 1533.89 1493.13 1459.15 1492.69 1432.25C1492.34 1411.02 1485.27 1392.81 1480.62 1383.08L1455.8 1397.47L1433 1357.82L1495.93 1321.35L1536.96 1362.02Z" fill="${shade7}"/>
                    <circle cx="1544" cy="1420" r="37" fill="${accent1}"/>
                    <mask id="mask9" mask-type="alpha" maskUnits="userSpaceOnUse" x="1507" y="1383" width="74" height="74">
                      <circle cx="1544" cy="1420" r="37" fill="${accent1}"/>
                    </mask>
                    <g mask="url(#mask9)">
                      <path d="M1514 1427L1501 1431.5L1512.5 1456.5L1545.5 1470.5L1578.5 1456.5L1591 1428.5L1571.5 1419.5L1561.5 1424L1549.5 1411L1533.5 1422L1528 1415L1514 1427Z" fill="${shade2}" stroke="${shade7}" stroke-width="5"/>
                    </g>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1888.11 1320.89L1796 1374.07L1828.12 1429.71L1865 1408.42V1562.57H1927.02H1933H1995.02V1408.42L2031.9 1429.71L2064.02 1374.07L1972.77 1321.38C1968.14 1340.43 1950.97 1354.57 1930.5 1354.57C1909.85 1354.57 1892.56 1340.18 1888.11 1320.89Z" fill="${accent4}"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1975 1391H1945V1423L1960 1427L1975 1423V1391Z" fill="${shade4}"/>
                    <mask id="mask10" mask-type="alpha" maskUnits="userSpaceOnUse" x="1796" y="1320" width="269" height="243">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M1888.11 1320.89L1796 1374.07L1828.12 1429.71L1865 1408.42V1562.57H1927.02H1933H1995.02V1408.42L2031.9 1429.71L2064.02 1374.07L1972.77 1321.38C1968.14 1340.43 1950.97 1354.57 1930.5 1354.57C1909.85 1354.57 1892.56 1340.18 1888.11 1320.89Z" fill="#C4C4C4"/>
                    </mask>
                    <g mask="url(#mask10)">
                      <rect x="1796" y="1329" width="69" height="102" fill="${shade4}"/>
                      <rect x="1995" y="1329" width="69" height="102" fill="${shade4}"/>
                    </g>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M151.113 1732.89L59 1786.07L91.1245 1841.71L128 1820.42V1974.57H190.021H196H258.021V1820.42L294.897 1841.71L327.021 1786.07L235.77 1733.38C231.138 1752.43 213.97 1766.57 193.5 1766.57C172.852 1766.57 155.564 1752.18 151.113 1732.89Z" fill="${accent6}"/>
                    <mask id="mask11" mask-type="alpha" maskUnits="userSpaceOnUse" x="59" y="1732" width="269" height="243">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M151.113 1732.89L59 1786.07L91.1245 1841.71L128 1820.42V1974.57H190.021H196H258.021V1820.42L294.897 1841.71L327.021 1786.07L235.77 1733.38C231.138 1752.43 213.97 1766.57 193.5 1766.57C172.852 1766.57 155.564 1752.18 151.113 1732.89Z" fill="#C4C4C4"/>
                    </mask>
                    <g mask="url(#mask11)">
                      <rect x="89.2545" y="1761.95" width="42" height="248.77" transform="rotate(-45 89.2545 1761.95)" fill="${shade7}"/>
                    </g>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M571.96 1774.02C575.858 1777.89 582.142 1777.89 586.04 1774.02L627.072 1733.35L690 1769.82L667.196 1809.47L642.378 1795.08C637.734 1804.81 630.655 1823.02 630.308 1844.25C629.869 1871.15 641.717 1945.89 645.338 1968.05V1974.84H583.002H574.998H512.662V1968.05C516.284 1945.89 528.131 1871.15 527.692 1844.25C527.345 1823.02 520.266 1804.81 515.622 1795.08L490.804 1809.47L468 1769.82L530.928 1733.35L571.96 1774.02Z" fill="url(#paint3_linear)"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M617 1802H587V1834L602 1838L617 1834V1802Z" fill="${accent2}"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1343.96 1774.02C1347.86 1777.89 1354.14 1777.89 1358.04 1774.02L1399.07 1733.35L1462 1769.82L1439.2 1809.47L1414.38 1795.08C1409.73 1804.81 1402.66 1823.02 1402.31 1844.25C1401.87 1871.15 1413.72 1945.89 1417.34 1968.05V1974.84H1355H1347H1284.66V1968.05C1288.28 1945.89 1300.13 1871.15 1299.69 1844.25C1299.34 1823.02 1292.27 1804.81 1287.62 1795.08L1262.8 1809.47L1240 1769.82L1302.93 1733.35L1343.96 1774.02Z" fill="${accent1}"/>
                    <mask id="mask12" mask-type="alpha" maskUnits="userSpaceOnUse" x="1240" y="1733" width="223" height="242">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M1343.96 1774.02C1347.86 1777.89 1354.14 1777.89 1358.04 1774.02L1399.07 1733.35L1462 1769.82L1439.2 1809.47L1414.38 1795.08C1409.73 1804.81 1402.66 1823.02 1402.31 1844.25C1401.87 1871.15 1413.72 1945.89 1417.34 1968.05V1974.84H1355H1347H1284.66V1968.05C1288.28 1945.89 1300.13 1871.15 1299.69 1844.25C1299.34 1823.02 1292.27 1804.81 1287.62 1795.08L1262.8 1809.47L1240 1769.82L1302.93 1733.35L1343.96 1774.02Z" fill="#C4C4C4"/>
                    </mask>
                    <g mask="url(#mask12)">
                      <path d="M1307.5 1933.5L1281.5 1958L1254 1989.5L1436 1992V1933.5L1414.5 1958L1393.5 1933.5L1373.5 1958L1351.5 1933.5L1328.5 1958L1307.5 1933.5Z" stroke="${accent4}" stroke-width="5"/>
                    </g>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M923.113 1732.89L831 1786.07L863.125 1841.71L900 1820.42V1974.57H962.021H968H1030.02V1820.42L1066.9 1841.71L1099.02 1786.07L1007.77 1733.38C1003.14 1752.43 985.97 1766.57 965.5 1766.57C944.852 1766.57 927.564 1752.18 923.113 1732.89Z" fill="${accent5}"/>
                    <mask id="mask13" mask-type="alpha" maskUnits="userSpaceOnUse" x="831" y="1732" width="269" height="243">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M923.113 1732.89L831 1786.07L863.125 1841.71L900 1820.42V1974.57H962.021H968H1030.02V1820.42L1066.9 1841.71L1099.02 1786.07L1007.77 1733.38C1003.14 1752.43 985.97 1766.57 965.5 1766.57C944.852 1766.57 927.564 1752.18 923.113 1732.89Z" fill="#C4C4C4"/>
                    </mask>
                    <g mask="url(#mask13)">
                      <circle cx="907.5" cy="1900.5" r="88.5" fill="${shade7}" fill-opacity="0.25"/>
                      <circle cx="996.5" cy="1812.5" r="88.5" fill="${shade7}" fill-opacity="0.25"/>
                    </g>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1695.11 1732.89L1603 1786.07L1635.12 1841.71L1672 1820.42V1974.57H1734.02H1740H1802.02V1820.42L1838.9 1841.71L1871.02 1786.07L1779.77 1733.38C1775.14 1752.43 1757.97 1766.57 1737.5 1766.57C1716.85 1766.57 1699.56 1752.18 1695.11 1732.89Z" fill="${accent0}"/>
                    <path d="M1760 1844L1738.82 1890.5C1738.11 1892.06 1735.89 1892.06 1735.18 1890.5L1714 1844C1690 1789 1784 1789 1760 1844Z" fill="${shade4}"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M378.96 2186.02C382.858 2189.89 389.142 2189.89 393.04 2186.02L434.072 2145.35L497 2181.82L474.197 2221.47L449.378 2207.08C444.734 2216.81 437.655 2235.02 437.309 2256.25C436.869 2283.15 448.717 2357.89 452.338 2380.05V2386.84H390.002H381.998H319.662V2380.05C323.284 2357.89 335.131 2283.15 334.692 2256.25C334.345 2235.02 327.266 2216.81 322.622 2207.08L297.804 2221.47L275 2181.82L337.928 2145.35L378.96 2186.02Z" fill="${shade6}"/>
                    <mask id="mask14" mask-type="alpha" maskUnits="userSpaceOnUse" x="275" y="2145" width="223" height="242">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M378.96 2186.02C382.858 2189.89 389.142 2189.89 393.04 2186.02L434.072 2145.35L497 2181.82L474.197 2221.47L449.378 2207.08C444.734 2216.81 437.655 2235.02 437.309 2256.25C436.869 2283.15 448.717 2357.89 452.338 2380.05V2386.84H390.002H381.998H319.662V2380.05C323.284 2357.89 335.131 2283.15 334.692 2256.25C334.345 2235.02 327.266 2216.81 322.622 2207.08L297.804 2221.47L275 2181.82L337.928 2145.35L378.96 2186.02Z" fill="#C4C4C4"/>
                    </mask>
                    <g mask="url(#mask14)">
                      <path d="M358 2155L410.828 2263.75H305.172L358 2155Z" fill="${accent7}" fill-opacity="0.5"/>
                      <path d="M414 2155L466.828 2263.75H361.172L414 2155Z" fill="${accent2}" fill-opacity="0.5"/>
                    </g>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M730.113 2144.89L638 2198.07L670.125 2253.71L707 2232.42V2386.57H769.021H775H837.021V2232.42L873.897 2253.71L906.021 2198.07L814.77 2145.38C810.138 2164.43 792.97 2178.57 772.5 2178.57C751.852 2178.57 734.564 2164.18 730.113 2144.89Z" fill="url(#paint4_linear)"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1150.96 2186.02C1154.86 2189.89 1161.14 2189.89 1165.04 2186.02L1206.07 2145.35L1269 2181.82L1246.2 2221.47L1221.38 2207.08C1216.73 2216.81 1209.66 2235.02 1209.31 2256.25C1208.87 2283.15 1220.72 2357.89 1224.34 2380.05V2386.84H1162H1154H1091.66V2380.05C1095.28 2357.89 1107.13 2283.15 1106.69 2256.25C1106.34 2235.02 1099.27 2216.81 1094.62 2207.08L1069.8 2221.47L1047 2181.82L1109.93 2145.35L1150.96 2186.02Z" fill="${accent2}"/>
                    <circle cx="1158" cy="2202" r="4" fill="${shade0}"/>
                    <circle cx="1158" cy="2215" r="4" fill="${shade0}"/>
                    <circle cx="1158" cy="2228" r="4" fill="${shade0}"/>
                    <circle cx="1158" cy="2241" r="4" fill="${shade0}"/>
                    <circle cx="1158" cy="2254" r="4" fill="${shade0}"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1536.96 2186.02C1540.86 2189.89 1547.14 2189.89 1551.04 2186.02L1592.07 2145.35L1655 2181.82L1632.2 2221.47L1607.38 2207.08C1602.73 2216.81 1595.66 2235.02 1595.31 2256.25C1594.87 2283.15 1606.72 2357.89 1610.34 2380.05V2386.84H1548H1540H1477.66V2380.05C1481.28 2357.89 1493.13 2283.15 1492.69 2256.25C1492.34 2235.02 1485.27 2216.81 1480.62 2207.08L1455.8 2221.47L1433 2181.82L1495.93 2145.35L1536.96 2186.02Z" fill="${shade5}"/>
                    <path d="M1510 2251.94L1521.31 2263.25L1532.63 2251.94L1543.94 2263.25L1555.25 2251.94L1566.57 2263.25L1577.88 2251.94L1543.94 2218L1510 2251.94Z" fill="${accent4}"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1888.11 2144.89L1796 2198.07L1828.12 2253.71L1865 2232.42V2386.57H1927.02H1933H1995.02V2232.42L2031.9 2253.71L2064.02 2198.07L1972.77 2145.38C1968.14 2164.43 1950.97 2178.57 1930.5 2178.57C1909.85 2178.57 1892.56 2164.18 1888.11 2144.89Z" fill="${accent3}"/>
                    <rect x="1894" y="2217" width="72" height="97" fill="url(#paint5_linear)"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2115.96 126.022C2119.86 129.886 2126.14 129.886 2130.04 126.022L2171.07 85.3497L2234 121.82L2211.2 161.468L2186.38 147.085C2181.73 156.807 2174.66 175.016 2174.31 196.255C2173.87 223.152 2185.72 297.889 2189.34 320.047V326.836H2127H2119H2056.66V320.047C2060.28 297.889 2072.13 223.152 2071.69 196.255C2071.34 175.016 2064.27 156.807 2059.62 147.085L2034.8 161.468L2012 121.82L2074.93 85.3497L2115.96 126.022Z" fill="${shade1}"/>
                    <path d="M2123 147L2129.96 168.42H2152.48L2134.26 181.659L2141.22 203.08L2123 189.841L2104.78 203.08L2111.74 181.659L2093.52 168.42H2116.04L2123 147Z" fill="${accent4}"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2274.11 1320.89L2182 1374.07L2214.12 1429.71L2251 1408.42V1562.57H2313.02H2319H2381.02V1408.42L2417.9 1429.71L2450.02 1374.07L2358.77 1321.38C2354.14 1340.43 2336.97 1354.57 2316.5 1354.57C2295.85 1354.57 2278.56 1340.18 2274.11 1320.89Z" fill="${shade4}"/>
                    <mask id="mask15" mask-type="alpha" maskUnits="userSpaceOnUse" x="2182" y="1320" width="269" height="243">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M2274.11 1320.89L2182 1374.07L2214.12 1429.71L2251 1408.42V1562.57H2313.02H2319H2381.02V1408.42L2417.9 1429.71L2450.02 1374.07L2358.77 1321.38C2354.14 1340.43 2336.97 1354.57 2316.5 1354.57C2295.85 1354.57 2278.56 1340.18 2274.11 1320.89Z" fill="#C4C4C4"/>
                    </mask>
                    <g mask="url(#mask15)">
                      <line y1="-1.5" x2="262" y2="-1.5" transform="matrix(-0.707107 0.707107 0.707107 0.707107 2416.26 1345)" stroke="${shade7}" stroke-width="3"/>
                      <line y1="-1.5" x2="241.831" y2="-1.5" transform="matrix(-0.707107 0.707107 0.707107 0.707107 2402 1339.26)" stroke="${shade7}" stroke-width="3"/>
                      <line y1="-1.5" x2="223.446" y2="-1.5" transform="matrix(-0.707107 0.707107 0.707107 0.707107 2389 1332.26)" stroke="${shade7}" stroke-width="3"/>
                      <line y1="-1.5" x2="203.647" y2="-1.5" transform="matrix(-0.707107 0.707107 0.707107 0.707107 2375 1326.26)" stroke="${shade7}" stroke-width="3"/>
                      <line y1="-1.5" x2="189.505" y2="-1.5" transform="matrix(-0.707107 0.707107 0.707107 0.707107 2365 1316.26)" stroke="${shade7}" stroke-width="3"/>
                      <line y1="-1.5" x2="125.865" y2="-1.5" transform="matrix(-0.707107 0.707107 0.707107 0.707107 2320 1341.26)" stroke="${shade7}" stroke-width="3"/>
                      <line y1="-1.5" x2="141.421" y2="-1.5" transform="matrix(-0.707107 0.707107 0.707107 0.707107 2301.26 1340)" stroke="${shade7}" stroke-width="3"/>
                      <line y1="-1.5" x2="134.35" y2="-1.5" transform="matrix(-0.707107 0.707107 0.707107 0.707107 2289.26 1332)" stroke="${shade7}" stroke-width="3"/>
                      <line y1="-1.5" x2="131.522" y2="-1.5" transform="matrix(-0.707107 0.707107 0.707107 0.707107 2279.26 1322)" stroke="${shade7}" stroke-width="3"/>
                      <line y1="-1.5" x2="131.522" y2="-1.5" transform="matrix(-0.707107 0.707107 0.707107 0.707107 2272.26 1309)" stroke="${shade7}" stroke-width="3"/>
                      <line y1="-1.5" x2="87.6812" y2="-1.5" transform="matrix(-0.707107 0.707107 0.707107 0.707107 2233.26 1328)" stroke="${shade7}" stroke-width="3"/>
                      <line y1="-1.5" x2="280.014" y2="-1.5" transform="matrix(-0.707107 0.707107 0.707107 0.707107 2429 1352.26)" stroke="${shade7}" stroke-width="3"/>
                      <line y1="-1.5" x2="295.571" y2="-1.5" transform="matrix(-0.707107 0.707107 0.707107 0.707107 2440 1361.26)" stroke="${shade7}" stroke-width="3"/>
                      <line y1="-1.5" x2="291.328" y2="-1.5" transform="matrix(-0.707107 0.707107 0.707107 0.707107 2453 1368.26)" stroke="${shade7}" stroke-width="3"/>
                      <line y1="-1.5" x2="231.931" y2="-1.5" transform="matrix(-0.707107 0.707107 0.707107 0.707107 2433.26 1408)" stroke="${shade7}" stroke-width="3"/>
                      <line y1="-1.5" x2="132.936" y2="-1.5" transform="matrix(-0.707107 0.707107 0.707107 0.707107 2382.26 1479)" stroke="${shade7}" stroke-width="3"/>
                      <line y1="-1.5" x2="103.238" y2="-1.5" transform="matrix(-0.707107 0.707107 0.707107 0.707107 2381.26 1500)" stroke="${shade7}" stroke-width="3"/>
                      <line y1="-1.5" x2="76.3675" y2="-1.5" transform="matrix(-0.707107 0.707107 0.707107 0.707107 2382 1519.26)" stroke="${shade7}" stroke-width="3"/>
                      <line y1="-1.5" x2="46.669" y2="-1.5" transform="matrix(-0.707107 0.707107 0.707107 0.707107 2381.26 1540)" stroke="${shade7}" stroke-width="3"/>
                    </g>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2887.96 126.022C2891.86 129.886 2898.14 129.886 2902.04 126.022L2943.07 85.3497L3006 121.82L2983.2 161.468L2958.38 147.085C2953.73 156.807 2946.66 175.016 2946.31 196.255C2945.87 223.152 2957.72 297.889 2961.34 320.047V326.836H2899H2891H2828.66V320.047C2832.28 297.889 2844.13 223.152 2843.69 196.255C2843.34 175.016 2836.27 156.807 2831.62 147.085L2806.8 161.468L2784 121.82L2846.93 85.3497L2887.96 126.022Z" fill="${accent6}"/>
                    <rect x="2863" y="156" width="64" height="88" fill="url(#paint6_linear)"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2274.11 496.887L2182 550.069L2214.12 605.71L2251 584.42V738.569H2313.02H2319H2381.02V584.42L2417.9 605.71L2450.02 550.069L2358.77 497.385C2354.14 516.43 2336.97 530.569 2316.5 530.569C2295.85 530.569 2278.56 516.183 2274.11 496.887Z" fill="url(#paint7_linear)"/>
                    <circle cx="2316" cy="595" r="35" stroke="${shade7}" stroke-width="8"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2081.11 1732.89L1989 1786.07L2021.12 1841.71L2058 1820.42V1974.57H2120.02H2126H2188.02V1820.42L2224.9 1841.71L2257.02 1786.07L2165.77 1733.38C2161.14 1752.43 2143.97 1766.57 2123.5 1766.57C2102.85 1766.57 2085.56 1752.18 2081.11 1732.89Z" fill="${accent7}"/>
                    <mask id="mask16" mask-type="alpha" maskUnits="userSpaceOnUse" x="1989" y="1732" width="269" height="243">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M2081.11 1732.89L1989 1786.07L2021.12 1841.71L2058 1820.42V1974.57H2120.02H2126H2188.02V1820.42L2224.9 1841.71L2257.02 1786.07L2165.77 1733.38C2161.14 1752.43 2143.97 1766.57 2123.5 1766.57C2102.85 1766.57 2085.56 1752.18 2081.11 1732.89Z" fill="#C4C4C4"/>
                    </mask>
                    <g mask="url(#mask16)">
                      <circle cx="2038" cy="1777" r="6" fill="${shade6}"/>
                      <circle cx="2038" cy="1757" r="6" fill="${shade6}"/>
                      <circle cx="2038" cy="1797" r="6" fill="${shade6}"/>
                      <circle cx="2038" cy="1817" r="6" fill="${shade6}"/>
                      <circle cx="2038" cy="1837" r="6" fill="${shade6}"/>
                      <circle cx="2018" cy="1787" r="6" fill="${shade6}"/>
                      <circle cx="2018" cy="1767" r="6" fill="${shade6}"/>
                      <circle cx="2018" cy="1807" r="6" fill="${shade6}"/>
                      <circle cx="2018" cy="1827" r="6" fill="${shade6}"/>
                      <circle cx="1998" cy="1777" r="6" fill="${shade6}"/>
                      <circle cx="1998" cy="1797" r="6" fill="${shade6}"/>
                      <circle cx="2058" cy="1787" r="6" fill="${shade6}"/>
                      <circle cx="2058" cy="1767" r="6" fill="${shade6}"/>
                      <circle cx="2058" cy="1807" r="6" fill="${shade6}"/>
                      <circle cx="2058" cy="1827" r="6" fill="${shade6}"/>
                      <circle cx="2058" cy="1867" r="6" fill="${shade6}"/>
                      <circle cx="2058" cy="1847" r="6" fill="${shade6}"/>
                      <circle cx="2058" cy="1887" r="6" fill="${shade6}"/>
                      <circle cx="2058" cy="1907" r="6" fill="${shade6}"/>
                      <circle cx="2058" cy="1947" r="6" fill="${shade6}"/>
                      <circle cx="2058" cy="1927" r="6" fill="${shade6}"/>
                      <circle cx="2058" cy="1967" r="6" fill="${shade6}"/>
                      <circle cx="2058" cy="1747" r="6" fill="${shade6}"/>
                      <circle cx="2078" cy="1777" r="6" fill="${shade6}"/>
                      <circle cx="2078" cy="1757" r="6" fill="${shade6}"/>
                      <circle cx="2078" cy="1797" r="6" fill="${shade6}"/>
                      <circle cx="2078" cy="1817" r="6" fill="${shade6}"/>
                      <circle cx="2078" cy="1857" r="6" fill="${shade6}"/>
                      <circle cx="2078" cy="1837" r="6" fill="${shade6}"/>
                      <circle cx="2078" cy="1877" r="6" fill="${shade6}"/>
                      <circle cx="2078" cy="1897" r="6" fill="${shade6}"/>
                      <circle cx="2078" cy="1937" r="6" fill="${shade6}"/>
                      <circle cx="2078" cy="1917" r="6" fill="${shade6}"/>
                      <circle cx="2078" cy="1957" r="6" fill="${shade6}"/>
                      <circle cx="2078" cy="1977" r="6" fill="${shade6}"/>
                      <circle cx="2078" cy="1737" r="6" fill="${shade6}"/>
                      <circle cx="2098" cy="1787" r="6" fill="${shade6}"/>
                      <circle cx="2098" cy="1767" r="6" fill="${shade6}"/>
                      <circle cx="2098" cy="1807" r="6" fill="${shade6}"/>
                      <circle cx="2098" cy="1827" r="6" fill="${shade6}"/>
                      <circle cx="2098" cy="1867" r="6" fill="${shade6}"/>
                      <circle cx="2098" cy="1847" r="6" fill="${shade6}"/>
                      <circle cx="2098" cy="1887" r="6" fill="${shade6}"/>
                      <circle cx="2098" cy="1907" r="6" fill="${shade6}"/>
                      <circle cx="2098" cy="1947" r="6" fill="${shade6}"/>
                      <circle cx="2098" cy="1927" r="6" fill="${shade6}"/>
                      <circle cx="2098" cy="1967" r="6" fill="${shade6}"/>
                      <circle cx="2118" cy="1777" r="6" fill="${shade6}"/>
                      <circle cx="2118" cy="1797" r="6" fill="${shade6}"/>
                      <circle cx="2118" cy="1817" r="6" fill="${shade6}"/>
                      <circle cx="2118" cy="1857" r="6" fill="${shade6}"/>
                      <circle cx="2118" cy="1837" r="6" fill="${shade6}"/>
                      <circle cx="2118" cy="1877" r="6" fill="${shade6}"/>
                      <circle cx="2118" cy="1897" r="6" fill="${shade6}"/>
                      <circle cx="2118" cy="1937" r="6" fill="${shade6}"/>
                      <circle cx="2118" cy="1917" r="6" fill="${shade6}"/>
                      <circle cx="2118" cy="1957" r="6" fill="${shade6}"/>
                      <circle cx="2118" cy="1977" r="6" fill="${shade6}"/>
                      <circle cx="2138" cy="1787" r="6" fill="${shade6}"/>
                      <circle cx="2138" cy="1767" r="6" fill="${shade6}"/>
                      <circle cx="2138" cy="1807" r="6" fill="${shade6}"/>
                      <circle cx="2138" cy="1827" r="6" fill="${shade6}"/>
                      <circle cx="2138" cy="1867" r="6" fill="${shade6}"/>
                      <circle cx="2138" cy="1847" r="6" fill="${shade6}"/>
                      <circle cx="2138" cy="1887" r="6" fill="${shade6}"/>
                      <circle cx="2138" cy="1907" r="6" fill="${shade6}"/>
                      <circle cx="2138" cy="1947" r="6" fill="${shade6}"/>
                      <circle cx="2138" cy="1927" r="6" fill="${shade6}"/>
                      <circle cx="2138" cy="1967" r="6" fill="${shade6}"/>
                      <circle cx="2158" cy="1777" r="6" fill="${shade6}"/>
                      <circle cx="2158" cy="1757" r="6" fill="${shade6}"/>
                      <circle cx="2158" cy="1797" r="6" fill="${shade6}"/>
                      <circle cx="2158" cy="1817" r="6" fill="${shade6}"/>
                      <circle cx="2158" cy="1857" r="6" fill="${shade6}"/>
                      <circle cx="2158" cy="1837" r="6" fill="${shade6}"/>
                      <circle cx="2158" cy="1877" r="6" fill="${shade6}"/>
                      <circle cx="2158" cy="1897" r="6" fill="${shade6}"/>
                      <circle cx="2158" cy="1937" r="6" fill="${shade6}"/>
                      <circle cx="2158" cy="1917" r="6" fill="${shade6}"/>
                      <circle cx="2158" cy="1957" r="6" fill="${shade6}"/>
                      <circle cx="2158" cy="1977" r="6" fill="${shade6}"/>
                      <circle cx="2178" cy="1787" r="6" fill="${shade6}"/>
                      <circle cx="2178" cy="1767" r="6" fill="${shade6}"/>
                      <circle cx="2178" cy="1807" r="6" fill="${shade6}"/>
                      <circle cx="2178" cy="1827" r="6" fill="${shade6}"/>
                      <circle cx="2178" cy="1867" r="6" fill="${shade6}"/>
                      <circle cx="2178" cy="1847" r="6" fill="${shade6}"/>
                      <circle cx="2178" cy="1887" r="6" fill="${shade6}"/>
                      <circle cx="2178" cy="1907" r="6" fill="${shade6}"/>
                      <circle cx="2178" cy="1947" r="6" fill="${shade6}"/>
                      <circle cx="2178" cy="1927" r="6" fill="${shade6}"/>
                      <circle cx="2178" cy="1967" r="6" fill="${shade6}"/>
                      <circle cx="2178" cy="1747" r="6" fill="${shade6}"/>
                      <circle cx="2198" cy="1777" r="6" fill="${shade6}"/>
                      <circle cx="2198" cy="1757" r="6" fill="${shade6}"/>
                      <circle cx="2198" cy="1797" r="6" fill="${shade6}"/>
                      <circle cx="2198" cy="1817" r="6" fill="${shade6}"/>
                      <circle cx="2218" cy="1787" r="6" fill="${shade6}"/>
                      <circle cx="2218" cy="1767" r="6" fill="${shade6}"/>
                      <circle cx="2218" cy="1807" r="6" fill="${shade6}"/>
                      <circle cx="2218" cy="1827" r="6" fill="${shade6}"/>
                      <circle cx="2238" cy="1777" r="6" fill="${shade6}"/>
                      <circle cx="2238" cy="1797" r="6" fill="${shade6}"/>
                      <circle cx="2238" cy="1817" r="6" fill="${shade6}"/>
                      <circle cx="2258" cy="1787" r="6" fill="${shade6}"/>
                    </g>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2115.96 950.022C2119.86 953.886 2126.14 953.886 2130.04 950.022L2171.07 909.35L2234 945.82L2211.2 985.468L2186.38 971.085C2181.73 980.807 2174.66 999.016 2174.31 1020.25C2173.87 1047.15 2185.72 1121.89 2189.34 1144.05V1150.84H2127H2119H2056.66V1144.05C2060.28 1121.89 2072.13 1047.15 2071.69 1020.25C2071.34 999.016 2064.27 980.807 2059.62 971.085L2034.8 985.468L2012 945.82L2074.93 909.35L2115.96 950.022Z" fill="url(#paint8_linear)"/>
                    <path d="M2132 975V973.5H2130.5V975H2132ZM2162 975H2163.5V973.5H2162V975ZM2132 1007H2130.5V1008.15L2131.61 1008.45L2132 1007ZM2147 1011L2146.61 1012.45L2147 1012.55L2147.39 1012.45L2147 1011ZM2162 1007L2162.39 1008.45L2163.5 1008.15V1007H2162ZM2132 976.5H2162V973.5H2132V976.5ZM2133.5 1007V975H2130.5V1007H2133.5ZM2147.39 1009.55L2132.39 1005.55L2131.61 1008.45L2146.61 1012.45L2147.39 1009.55ZM2161.61 1005.55L2146.61 1009.55L2147.39 1012.45L2162.39 1008.45L2161.61 1005.55ZM2160.5 975V1007H2163.5V975H2160.5Z" fill="${shade5}"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M-7.03987 538.022C-3.14187 541.886 3.14188 541.886 7.03987 538.022L48.0718 497.35L111 533.82L88.1965 573.468L63.3783 559.085C58.7337 568.807 51.6553 587.016 51.3085 608.255C50.8692 635.153 62.7165 709.89 66.3382 732.047V738.836H4.00199H-4.00181H-66.338V732.047C-62.7164 709.89 -50.869 635.153 -51.3083 608.255C-51.6551 587.016 -58.7336 568.807 -63.3781 559.085L-88.1963 573.468L-111 533.82L-48.0717 497.35L-7.03987 538.022Z" fill="${shade6}"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M40 558H10V590L25 594L40 590V558Z" fill="${accent5}"/>
                    <mask id="mask17" mask-type="alpha" maskUnits="userSpaceOnUse" x="-111" y="497" width="223" height="242">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M-7.03987 538.022C-3.14187 541.886 3.14188 541.886 7.03987 538.022L48.0718 497.35L111 533.82L88.1965 573.468L63.3783 559.085C58.7337 568.807 51.6553 587.016 51.3085 608.255C50.8692 635.153 62.7165 709.89 66.3382 732.047V738.836H4.00199H-4.00181H-66.338V732.047C-62.7164 709.89 -50.869 635.153 -51.3083 608.255C-51.6551 587.016 -58.7336 568.807 -63.3781 559.085L-88.1963 573.468L-111 533.82L-48.0717 497.35L-7.03987 538.022Z" fill="#C4C4C4"/>
                    </mask>
                    <g mask="url(#mask17)">
                      <rect x="63" y="500" width="50" height="77" fill="${accent5}"/>
                    </g>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3080.96 538.022C3084.86 541.886 3091.14 541.886 3095.04 538.022L3136.07 497.35L3199 533.82L3176.2 573.468L3151.38 559.085C3146.73 568.807 3139.66 587.016 3139.31 608.255C3138.87 635.152 3150.72 709.889 3154.34 732.047V738.836H3092H3084H3021.66V732.047C3025.28 709.889 3037.13 635.152 3036.69 608.255C3036.34 587.016 3029.27 568.807 3024.62 559.085L2999.8 573.468L2977 533.82L3039.93 497.35L3080.96 538.022Z" fill="${shade6}"/>
                    <mask id="mask18" mask-type="alpha" maskUnits="userSpaceOnUse" x="2977" y="497" width="223" height="242">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M3080.96 538.022C3084.86 541.886 3091.14 541.886 3095.04 538.022L3136.07 497.35L3199 533.82L3176.2 573.468L3151.38 559.085C3146.73 568.807 3139.66 587.016 3139.31 608.255C3138.87 635.152 3150.72 709.889 3154.34 732.047V738.836H3092H3084H3021.66V732.047C3025.28 709.889 3037.13 635.152 3036.69 608.255C3036.34 587.016 3029.27 568.807 3024.62 559.085L2999.8 573.468L2977 533.82L3039.93 497.35L3080.96 538.022Z" fill="#C4C4C4"/>
                    </mask>
                    <g mask="url(#mask18)">
                      <rect x="2975" y="500" width="50" height="77" fill="${accent5}"/>
                    </g>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2274.11 2144.89L2182 2198.07L2214.12 2253.71L2251 2232.42V2386.57H2313.02H2319H2381.02V2232.42L2417.9 2253.71L2450.02 2198.07L2358.77 2145.38C2354.14 2164.43 2336.97 2178.57 2316.5 2178.57C2295.85 2178.57 2278.56 2164.18 2274.11 2144.89Z" fill="${shade3}"/>
                    <mask id="mask19" mask-type="alpha" maskUnits="userSpaceOnUse" x="2182" y="2144" width="269" height="243">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M2274.11 2144.89L2182 2198.07L2214.12 2253.71L2251 2232.42V2386.57H2313.02H2319H2381.02V2232.42L2417.9 2253.71L2450.02 2198.07L2358.77 2145.38C2354.14 2164.43 2336.97 2178.57 2316.5 2178.57C2295.85 2178.57 2278.56 2164.18 2274.11 2144.89Z" fill="#C4C4C4"/>
                    </mask>
                    <g mask="url(#mask19)">
                      <rect x="2348" y="2137" width="10" height="256" fill="${accent1}" fill-opacity="0.5"/>
                      <rect x="2368" y="2137" width="10" height="256" fill="${accent1}" fill-opacity="0.5"/>
                      <rect x="2388" y="2137" width="10" height="256" fill="${accent1}" fill-opacity="0.5"/>
                      <rect x="2408" y="2137" width="10" height="256" fill="${accent1}" fill-opacity="0.5"/>
                      <rect x="2428" y="2137" width="10" height="256" fill="${accent1}" fill-opacity="0.5"/>
                      <rect x="2448" y="2137" width="10" height="256" fill="${accent1}" fill-opacity="0.5"/>
                      <rect x="2328" y="2137" width="10" height="256" fill="${accent1}" fill-opacity="0.5"/>
                      <rect x="2308" y="2137" width="10" height="256" fill="${accent1}" fill-opacity="0.5"/>
                      <rect x="2288" y="2137" width="10" height="256" fill="${accent1}" fill-opacity="0.5"/>
                      <rect x="2268" y="2137" width="10" height="256" fill="${accent1}" fill-opacity="0.5"/>
                      <rect x="2248" y="2137" width="10" height="256" fill="${accent1}" fill-opacity="0.5"/>
                      <rect x="2228" y="2137" width="10" height="256" fill="${accent1}" fill-opacity="0.5"/>
                      <rect x="2208" y="2137" width="10" height="256" fill="${accent1}" fill-opacity="0.5"/>
                      <rect x="2188" y="2137" width="10" height="256" fill="${accent1}" fill-opacity="0.5"/>
                      <rect x="2176" y="2140" width="282" height="10" fill="${shade2}" fill-opacity="0.5"/>
                      <rect x="2176" y="2160" width="282" height="10" fill="${shade2}" fill-opacity="0.5"/>
                      <rect x="2176" y="2180" width="282" height="10" fill="${shade2}" fill-opacity="0.5"/>
                      <rect x="2176" y="2200" width="282" height="10" fill="${shade2}" fill-opacity="0.5"/>
                      <rect x="2176" y="2220" width="282" height="10" fill="${shade2}" fill-opacity="0.5"/>
                      <rect x="2176" y="2240" width="282" height="10" fill="${shade2}" fill-opacity="0.5"/>
                      <rect x="2176" y="2258" width="282" height="10" fill="${shade2}" fill-opacity="0.5"/>
                      <rect x="2176" y="2278" width="282" height="10" fill="${shade2}" fill-opacity="0.5"/>
                      <rect x="2176" y="2298" width="282" height="10" fill="${shade2}" fill-opacity="0.5"/>
                      <rect x="2176" y="2318" width="282" height="10" fill="${shade2}" fill-opacity="0.5"/>
                      <rect x="2177" y="2338" width="282" height="10" fill="${shade2}" fill-opacity="0.5"/>
                      <rect x="2177" y="2358" width="282" height="10" fill="${shade2}" fill-opacity="0.5"/>
                      <rect x="2177" y="2378" width="282" height="10" fill="${shade2}" fill-opacity="0.5"/>
                      <rect x="2192" y="2137" width="2" height="256" fill="${accent2}" fill-opacity="0.75"/>
                      <rect x="2212" y="2137" width="2" height="256" fill="${accent2}" fill-opacity="0.75"/>
                      <rect x="2232" y="2137" width="2" height="256" fill="${accent2}" fill-opacity="0.75"/>
                      <rect x="2252" y="2137" width="2" height="256" fill="${accent2}" fill-opacity="0.75"/>
                      <rect x="2272" y="2137" width="2" height="256" fill="${accent2}" fill-opacity="0.75"/>
                      <rect x="2292" y="2137" width="2" height="256" fill="${accent2}" fill-opacity="0.75"/>
                      <rect x="2312" y="2137" width="2" height="256" fill="${accent2}" fill-opacity="0.75"/>
                      <rect x="2332" y="2137" width="2" height="256" fill="${accent2}" fill-opacity="0.75"/>
                      <rect x="2352" y="2137" width="2" height="256" fill="${accent2}" fill-opacity="0.75"/>
                      <rect x="2372" y="2137" width="2" height="256" fill="${accent2}" fill-opacity="0.75"/>
                      <rect x="2392" y="2137" width="2" height="256" fill="${accent2}" fill-opacity="0.75"/>
                      <rect x="2412" y="2137" width="2" height="256" fill="${accent2}" fill-opacity="0.75"/>
                      <rect x="2432" y="2137" width="2" height="256" fill="${accent2}" fill-opacity="0.75"/>
                    </g>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2501.96 1774.02C2505.86 1777.89 2512.14 1777.89 2516.04 1774.02L2557.07 1733.35L2620 1769.82L2597.2 1809.47L2572.38 1795.08C2567.73 1804.81 2560.66 1823.02 2560.31 1844.25C2559.87 1871.15 2571.72 1945.89 2575.34 1968.05V1974.84H2513H2505H2442.66V1968.05C2446.28 1945.89 2458.13 1871.15 2457.69 1844.25C2457.34 1823.02 2450.27 1804.81 2445.62 1795.08L2420.8 1809.47L2398 1769.82L2460.93 1733.35L2501.96 1774.02Z" fill="${shade7}"/>
                    <mask id="mask20" mask-type="alpha" maskUnits="userSpaceOnUse" x="2398" y="1733" width="223" height="242">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M2501.96 1774.02C2505.86 1777.89 2512.14 1777.89 2516.04 1774.02L2557.07 1733.35L2620 1769.82L2597.2 1809.47L2572.38 1795.08C2567.73 1804.81 2560.66 1823.02 2560.31 1844.25C2559.87 1871.15 2571.72 1945.89 2575.34 1968.05V1974.84H2513H2505H2442.66V1968.05C2446.28 1945.89 2458.13 1871.15 2457.69 1844.25C2457.34 1823.02 2450.27 1804.81 2445.62 1795.08L2420.8 1809.47L2398 1769.82L2460.93 1733.35L2501.96 1774.02Z" fill="#C4C4C4"/>
                    </mask>
                    <g mask="url(#mask20)">
                      <rect x="2405" y="1752" width="30" height="30" stroke="${shade2}" stroke-width="2"/>
                      <rect x="2435" y="1782" width="30" height="30" stroke="${shade2}" stroke-width="2"/>
                      <rect x="2555" y="1782" width="30" height="30" stroke="${shade2}" stroke-width="2"/>
                      <rect x="2585" y="1752" width="30" height="30" stroke="${shade2}" stroke-width="2"/>
                      <rect x="2555" y="1722" width="30" height="30" stroke="${shade2}" stroke-width="2"/>
                      <rect x="2465" y="1812" width="30" height="30" stroke="${shade2}" stroke-width="2"/>
                      <rect x="2495" y="1842" width="30" height="30" stroke="${shade2}" stroke-width="2"/>
                      <rect x="2525" y="1812" width="30" height="30" stroke="${shade2}" stroke-width="2"/>
                      <rect x="2495" y="1782" width="30" height="30" stroke="${shade2}" stroke-width="2"/>
                      <rect x="2525" y="1752" width="30" height="30" stroke="${shade2}" stroke-width="2"/>
                      <rect x="2465" y="1872" width="30" height="30" stroke="${shade2}" stroke-width="2"/>
                      <rect x="2435" y="1842" width="30" height="30" stroke="${shade2}" stroke-width="2"/>
                      <rect x="2435" y="1902" width="30" height="30" stroke="${shade2}" stroke-width="2"/>
                      <rect x="2465" y="1932" width="30" height="30" stroke="${shade2}" stroke-width="2"/>
                      <rect x="2525" y="1932" width="30" height="30" stroke="${shade2}" stroke-width="2"/>
                      <rect x="2495" y="1902" width="30" height="30" stroke="${shade2}" stroke-width="2"/>
                      <rect x="2525" y="1872" width="30" height="30" stroke="${shade2}" stroke-width="2"/>
                      <rect x="2555" y="1842" width="30" height="30" stroke="${shade2}" stroke-width="2"/>
                      <rect x="2555" y="1902" width="30" height="30" stroke="${shade2}" stroke-width="2"/>
                      <rect x="2555" y="1962" width="30" height="30" stroke="${shade2}" stroke-width="2"/>
                      <rect x="2435" y="1962" width="30" height="30" stroke="${shade2}" stroke-width="2"/>
                      <rect x="2495" y="1962" width="30" height="30" stroke="${shade2}" stroke-width="2"/>
                      <rect x="2465" y="1752" width="30" height="30" stroke="${shade2}" stroke-width="2"/>
                      <rect x="2435" y="1722" width="30" height="30" stroke="${shade2}" stroke-width="2"/>
                    </g>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2694.96 538.022C2698.86 541.886 2705.14 541.886 2709.04 538.022L2750.07 497.35L2813 533.82L2790.2 573.468L2765.38 559.085C2760.73 568.807 2753.66 587.016 2753.31 608.255C2752.87 635.152 2764.72 709.889 2768.34 732.047V738.836H2706H2698H2635.66V732.047C2639.28 709.889 2651.13 635.152 2650.69 608.255C2650.34 587.016 2643.27 568.807 2638.62 559.085L2613.8 573.468L2591 533.82L2653.93 497.35L2694.96 538.022Z" fill="url(#paint9_linear)"/>
                    <mask id="mask21" mask-type="alpha" maskUnits="userSpaceOnUse" x="2591" y="497" width="223" height="242">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M2694.96 538.022C2698.86 541.886 2705.14 541.886 2709.04 538.022L2750.07 497.35L2813 533.82L2790.2 573.468L2765.38 559.085C2760.73 568.807 2753.66 587.016 2753.31 608.255C2752.87 635.152 2764.72 709.889 2768.34 732.047V738.836H2706H2698H2635.66V732.047C2639.28 709.889 2651.13 635.152 2650.69 608.255C2650.34 587.016 2643.27 568.807 2638.62 559.085L2613.8 573.468L2591 533.82L2653.93 497.35L2694.96 538.022Z" fill="#C4C4C4"/>
                    </mask>
                    <g mask="url(#mask21)">
                      <rect x="2638" y="560" width="128" height="47" fill="${shade7}"/>
                    </g>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2887.96 1774.02C2891.86 1777.89 2898.14 1777.89 2902.04 1774.02L2943.07 1733.35L3006 1769.82L2983.2 1809.47L2958.38 1795.08C2953.73 1804.81 2946.66 1823.02 2946.31 1844.25C2945.87 1871.15 2957.72 1945.89 2961.34 1968.05V1974.84H2899H2891H2828.66V1968.05C2832.28 1945.89 2844.13 1871.15 2843.69 1844.25C2843.34 1823.02 2836.27 1804.81 2831.62 1795.08L2806.8 1809.47L2784 1769.82L2846.93 1733.35L2887.96 1774.02Z" fill="${shade3}"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2853.11 908.887L2761 962.069L2793.12 1017.71L2830 996.42V1150.57H2892.02H2898H2960.02V996.42L2996.9 1017.71L3029.02 962.069L2937.77 909.385C2933.14 928.43 2915.97 942.569 2895.5 942.569C2874.85 942.569 2857.56 928.183 2853.11 908.887Z" fill="${shade6}"/>
                    <path d="M2865 1001C2873 992 2887 992 2895 1001C2903 1010 2917 1010 2925 1001" stroke="${accent6}" stroke-width="5"/>
                    <path d="M2865 1016C2873 1007 2887 1007 2895 1016C2903 1025 2917 1025 2925 1016" stroke="${accent6}" stroke-width="5"/>
                    <path d="M2865 986C2873 977 2887 977 2895 986C2903 995 2917 995 2925 986" stroke="${accent6}" stroke-width="5"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2694.96 2186.02C2698.86 2189.89 2705.14 2189.89 2709.04 2186.02L2750.07 2145.35L2813 2181.82L2790.2 2221.47L2765.38 2207.08C2760.73 2216.81 2753.66 2235.02 2753.31 2256.25C2752.87 2283.15 2764.72 2357.89 2768.34 2380.05V2386.84H2706H2698H2635.66V2380.05C2639.28 2357.89 2651.13 2283.15 2650.69 2256.25C2650.34 2235.02 2643.27 2216.81 2638.62 2207.08L2613.8 2221.47L2591 2181.82L2653.93 2145.35L2694.96 2186.02Z" fill="url(#paint10_linear)"/>
                    <mask id="mask22" mask-type="alpha" maskUnits="userSpaceOnUse" x="2591" y="2145" width="223" height="242">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M2694.96 2186.02C2698.86 2189.89 2705.14 2189.89 2709.04 2186.02L2750.07 2145.35L2813 2181.82L2790.2 2221.47L2765.38 2207.08C2760.73 2216.81 2753.66 2235.02 2753.31 2256.25C2752.87 2283.15 2764.72 2357.89 2768.34 2380.05V2386.84H2706H2698H2635.66V2380.05C2639.28 2357.89 2651.13 2283.15 2650.69 2256.25C2650.34 2235.02 2643.27 2216.81 2638.62 2207.08L2613.8 2221.47L2591 2181.82L2653.93 2145.35L2694.96 2186.02Z" fill="#C4C4C4"/>
                    </mask>
                    <g mask="url(#mask22)">
                      <line x1="2615.06" y1="2155.94" x2="2773.06" y2="2313.94" stroke="${shade7}" stroke-width="3"/>
                      <line x1="2603.06" y1="2163.94" x2="2773.06" y2="2333.94" stroke="${shade7}" stroke-width="3"/>
                      <line x1="2592.06" y1="2172.94" x2="2773.06" y2="2353.94" stroke="${shade7}" stroke-width="3"/>
                      <line x1="2592.06" y1="2192.94" x2="2773.06" y2="2373.94" stroke="${shade7}" stroke-width="3"/>
                      <line x1="2642.06" y1="2262.94" x2="2773.06" y2="2393.94" stroke="${shade7}" stroke-width="3"/>
                      <line x1="2642.06" y1="2282.94" x2="2754.06" y2="2394.94" stroke="${shade7}" stroke-width="3"/>
                      <line x1="2642.06" y1="2302.94" x2="2733.06" y2="2393.94" stroke="${shade7}" stroke-width="3"/>
                      <line x1="2642.06" y1="2322.94" x2="2711.06" y2="2391.94" stroke="${shade7}" stroke-width="3"/>
                      <line x1="2642.06" y1="2342.94" x2="2691.06" y2="2391.94" stroke="${shade7}" stroke-width="3"/>
                      <line x1="2632.06" y1="2352.94" x2="2672.06" y2="2392.94" stroke="${shade7}" stroke-width="3"/>
                      <line x1="2632.06" y1="2372.94" x2="2650.06" y2="2390.94" stroke="${shade7}" stroke-width="3"/>
                      <line x1="2628.06" y1="2148.94" x2="2773.06" y2="2293.94" stroke="${shade7}" stroke-width="3"/>
                      <line x1="2640.06" y1="2140.94" x2="2773.06" y2="2273.94" stroke="${shade7}" stroke-width="3"/>
                      <line x1="2700.06" y1="2180.94" x2="2773.06" y2="2253.94" stroke="${shade7}" stroke-width="3"/>
                      <line x1="2709.06" y1="2169.94" x2="2773.06" y2="2233.94" stroke="${shade7}" stroke-width="3"/>
                      <line x1="2719.06" y1="2159.94" x2="2781.06" y2="2221.94" stroke="${shade7}" stroke-width="3"/>
                      <line x1="2731.06" y1="2151.94" x2="2798.06" y2="2218.94" stroke="${shade7}" stroke-width="3"/>
                      <line x1="2741.06" y1="2141.94" x2="2806.06" y2="2206.94" stroke="${shade7}" stroke-width="3"/>
                      <line x1="2765.06" y1="2145.94" x2="2813.06" y2="2193.94" stroke="${shade7}" stroke-width="3"/>
                    </g>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2467.11 84.8875L2375 138.069L2407.12 193.71L2444 172.42V326.569H2506.02H2512H2574.02V172.42L2610.9 193.71L2643.02 138.069L2551.77 85.3847C2547.14 104.43 2529.97 118.569 2509.5 118.569C2488.85 118.569 2471.56 104.183 2467.11 84.8875Z" fill="${accent7}"/>
                    <mask id="mask23" mask-type="alpha" maskUnits="userSpaceOnUse" x="2375" y="84" width="269" height="243">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M2467.11 84.8875L2375 138.069L2407.12 193.71L2444 172.42V326.569H2506.02H2512H2574.02V172.42L2610.9 193.71L2643.02 138.069L2551.77 85.3847C2547.14 104.43 2529.97 118.569 2509.5 118.569C2488.85 118.569 2471.56 104.183 2467.11 84.8875Z" fill="#C4C4C4"/>
                    </mask>
                    <g mask="url(#mask23)">
                      <path d="M2493.5 216L2570.5 76L2664 129L2597.5 342.5L2564.5 354.5L2493.5 216Z" fill="url(#paint11_linear)"/>
                    </g>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M-7.03987 1362.02C-3.14187 1365.89 3.14188 1365.89 7.03987 1362.02L48.0718 1321.35L111 1357.82L88.1965 1397.47L63.3783 1383.08C58.7338 1392.81 51.6553 1411.02 51.3085 1432.25C50.8692 1459.15 62.7165 1533.89 66.3382 1556.05V1562.84H4.00199H-4.00181H-66.338V1556.05C-62.7164 1533.89 -50.869 1459.15 -51.3083 1432.25C-51.6551 1411.02 -58.7336 1392.81 -63.3781 1383.08L-88.1963 1397.47L-111 1357.82L-48.0718 1321.35L-7.03987 1362.02Z" fill="${shade2}"/>
                    <rect x="-30" y="1391" width="60" height="14" fill="${accent0}"/>
                    <rect x="-30" y="1405" width="60" height="14" fill="${accent1}"/>
                    <rect x="-30" y="1419" width="60" height="14" fill="${accent2}"/>
                    <rect x="-30" y="1433" width="60" height="14" fill="${accent3}"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3080.96 1362.02C3084.86 1365.89 3091.14 1365.89 3095.04 1362.02L3136.07 1321.35L3199 1357.82L3176.2 1397.47L3151.38 1383.08C3146.73 1392.81 3139.66 1411.02 3139.31 1432.25C3138.87 1459.15 3150.72 1533.89 3154.34 1556.05V1562.84H3092H3084H3021.66V1556.05C3025.28 1533.89 3037.13 1459.15 3036.69 1432.25C3036.34 1411.02 3029.27 1392.81 3024.62 1383.08L2999.8 1397.47L2977 1357.82L3039.93 1321.35L3080.96 1362.02Z" fill="${shade2}"/>
                    <rect x="3058" y="1391" width="60" height="14" fill="${accent0}"/>
                    <rect x="3058" y="1405" width="60" height="14" fill="${accent1}"/>
                    <rect x="3058" y="1419" width="60" height="14" fill="${accent2}"/>
                    <rect x="3058" y="1433" width="60" height="14" fill="${accent3}"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M-41.8873 2144.89L-134 2198.07L-101.875 2253.71L-65 2232.42V2386.57H-2.97888H3H65.0211V2232.42L101.897 2253.71L134.021 2198.07L42.7695 2145.38C38.1379 2164.43 20.9702 2178.57 0.5 2178.57C-20.1479 2178.57 -37.4357 2164.18 -41.8873 2144.89Z" fill="${accent4}"/>
                    <mask id="mask24" mask-type="alpha" maskUnits="userSpaceOnUse" x="-134" y="2144" width="269" height="243">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M-41.8873 2144.89L-134 2198.07L-101.875 2253.71L-65 2232.42V2386.57H-2.97888H3H65.0211V2232.42L101.897 2253.71L134.021 2198.07L42.7695 2145.38C38.1379 2164.43 20.9702 2178.57 0.5 2178.57C-20.1479 2178.57 -37.4357 2164.18 -41.8873 2144.89Z" fill="#C4C4C4"/>
                    </mask>
                    <g mask="url(#mask24)">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M10 2204V2214H13V2204H23V2201H13V2191H10V2201H0V2204H10Z" fill="${shade1}"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M10 2246V2256H13V2246H23V2243H13V2233H10V2243H0V2246H10Z" fill="${shade1}"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M10 2288V2298H13V2288H23V2285H13V2275H10V2285H0V2288H10Z" fill="${shade1}"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M10 2330V2340H13V2330H23V2327H13V2317H10V2327H0V2330H10Z" fill="${shade1}"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M10 2372V2382H13V2372H23V2369H13V2359H10V2369H0V2372H10Z" fill="${shade1}"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M33 2225V2235H36V2225H46V2222H36V2212H33V2222H23V2225H33Z" fill="${shade1}"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M33 2183V2193H36V2183H46V2180H36V2170H33V2180H23V2183H33Z" fill="${shade1}"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M33 2267V2277H36V2267H46V2264H36V2254H33V2264H23V2267H33Z" fill="${shade1}"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M33 2309V2319H36V2309H46V2306H36V2296H33V2306H23V2309H33Z" fill="${shade1}"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M33 2351V2361H36V2351H46V2348H36V2338H33V2348H23V2351H33Z" fill="${shade1}"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M33 2393V2403H36V2393H46V2390H36V2380H33V2390H23V2393H33Z" fill="${shade1}"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M56 2204V2214H59V2204H69V2201H59V2191H56V2201H46V2204H56Z" fill="${shade1}"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M56 2162V2172H59V2162H69V2159H59V2149H56V2159H46V2162H56Z" fill="${shade1}"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M56 2246V2256H59V2246H69V2243H59V2233H56V2243H46V2246H56Z" fill="${shade1}"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M56 2288V2298H59V2288H69V2285H59V2275H56V2285H46V2288H56Z" fill="${shade1}"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M56 2330V2340H59V2330H69V2327H59V2317H56V2327H46V2330H56Z" fill="${shade1}"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M56 2372V2382H59V2372H69V2369H59V2359H56V2369H46V2372H56Z" fill="${shade1}"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M79 2225V2235H82V2225H92V2222H82V2212H79V2222H69V2225H79Z" fill="${shade1}"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M79 2183V2193H82V2183H92V2180H82V2170H79V2180H69V2183H79Z" fill="${shade1}"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M102 2204V2214H105V2204H115V2201H105V2191H102V2201H92V2204H102Z" fill="${shade1}"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M102 2246V2256H105V2246H115V2243H105V2233H102V2243H92V2246H102Z" fill="${shade1}"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M125 2225V2235H128V2225H138V2222H128V2212H125V2222H115V2225H125Z" fill="${shade1}"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M125 2183V2193H128V2183H138V2180H128V2170H125V2180H115V2183H125Z" fill="${shade1}"/>
                    </g>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3046.11 2144.89L2954 2198.07L2986.12 2253.71L3023 2232.42V2386.57H3085.02H3091H3153.02V2232.42L3189.9 2253.71L3222.02 2198.07L3130.77 2145.38C3126.14 2164.43 3108.97 2178.57 3088.5 2178.57C3067.85 2178.57 3050.56 2164.18 3046.11 2144.89Z" fill="${accent4}"/>
                    <mask id="mask25" mask-type="alpha" maskUnits="userSpaceOnUse" x="2954" y="2144" width="269" height="243">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M3046.11 2144.89L2954 2198.07L2986.12 2253.71L3023 2232.42V2386.57H3085.02H3091H3153.02V2232.42L3189.9 2253.71L3222.02 2198.07L3130.77 2145.38C3126.14 2164.43 3108.97 2178.57 3088.5 2178.57C3067.85 2178.57 3050.56 2164.18 3046.11 2144.89Z" fill="#C4C4C4"/>
                    </mask>
                    <g mask="url(#mask25)">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M3052 2204V2214H3055V2204H3065V2201H3055V2191H3052V2201H3042V2204H3052Z" fill="${shade1}"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M3052 2162V2172H3055V2162H3065V2159H3055V2149H3052V2159H3042V2162H3052Z" fill="${shade1}"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M3052 2246V2256H3055V2246H3065V2243H3055V2233H3052V2243H3042V2246H3052Z" fill="${shade1}"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M3052 2288V2298H3055V2288H3065V2285H3055V2275H3052V2285H3042V2288H3052Z" fill="${shade1}"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M3052 2330V2340H3055V2330H3065V2327H3055V2317H3052V2327H3042V2330H3052Z" fill="${shade1}"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M3052 2372V2382H3055V2372H3065V2369H3055V2359H3052V2369H3042V2372H3052Z" fill="${shade1}"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M3075 2225V2235H3078V2225H3088V2222H3078V2212H3075V2222H3065V2225H3075Z" fill="${shade1}"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M3075 2183V2193H3078V2183H3088V2180H3078V2170H3075V2180H3065V2183H3075Z" fill="${shade1}"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M3075 2267V2277H3078V2267H3088V2264H3078V2254H3075V2264H3065V2267H3075Z" fill="${shade1}"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M3075 2309V2319H3078V2309H3088V2306H3078V2296H3075V2306H3065V2309H3075Z" fill="${shade1}"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M3075 2351V2361H3078V2351H3088V2348H3078V2338H3075V2348H3065V2351H3075Z" fill="${shade1}"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M3075 2393V2403H3078V2393H3088V2390H3078V2380H3075V2390H3065V2393H3075Z" fill="${shade1}"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M3006 2204V2214H3009V2204H3019V2201H3009V2191H3006V2201H2996V2204H3006Z" fill="${shade1}"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M3006 2162V2172H3009V2162H3019V2159H3009V2149H3006V2159H2996V2162H3006Z" fill="${shade1}"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M3006 2246V2256H3009V2246H3019V2243H3009V2233H3006V2243H2996V2246H3006Z" fill="${shade1}"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M3029 2225V2235H3032V2225H3042V2222H3032V2212H3029V2222H3019V2225H3029Z" fill="${shade1}"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M3029 2183V2193H3032V2183H3042V2180H3032V2170H3029V2180H3019V2183H3029Z" fill="${shade1}"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M3029 2267V2277H3032V2267H3042V2264H3032V2254H3029V2264H3019V2267H3029Z" fill="${shade1}"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M3029 2309V2319H3032V2309H3042V2306H3032V2296H3029V2306H3019V2309H3029Z" fill="${shade1}"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M3029 2351V2361H3032V2351H3042V2348H3032V2338H3029V2348H3019V2351H3029Z" fill="${shade1}"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M3029 2393V2403H3032V2393H3042V2390H3032V2380H3029V2390H3019V2393H3029Z" fill="${shade1}"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M2960 2204V2214H2963V2204H2973V2201H2963V2191H2960V2201H2950V2204H2960Z" fill="${shade1}"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M2983 2225V2235H2986V2225H2996V2222H2986V2212H2983V2222H2973V2225H2983Z" fill="${shade1}"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M2983 2183V2193H2986V2183H2996V2180H2986V2170H2983V2180H2973V2183H2983Z" fill="${shade1}"/>
                    </g>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2501.96 950.022C2505.86 953.886 2512.14 953.886 2516.04 950.022L2557.07 909.35L2620 945.82L2597.2 985.468L2572.38 971.085C2567.73 980.807 2560.66 999.016 2560.31 1020.25C2559.87 1047.15 2571.72 1121.89 2575.34 1144.05V1150.84H2513H2505H2442.66V1144.05C2446.28 1121.89 2458.13 1047.15 2457.69 1020.25C2457.34 999.016 2450.27 980.807 2445.62 971.085L2420.8 985.468L2398 945.82L2460.93 909.35L2501.96 950.022Z" fill="${accent2}"/>
                    <mask id="mask26" mask-type="alpha" maskUnits="userSpaceOnUse" x="2398" y="909" width="223" height="242">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M2501.96 950.022C2505.86 953.886 2512.14 953.886 2516.04 950.022L2557.07 909.35L2620 945.82L2597.2 985.468L2572.38 971.085C2567.73 980.807 2560.66 999.016 2560.31 1020.25C2559.87 1047.15 2571.72 1121.89 2575.34 1144.05V1150.84H2513H2505H2442.66V1144.05C2446.28 1121.89 2458.13 1047.15 2457.69 1020.25C2457.34 999.016 2450.27 980.807 2445.62 971.085L2420.8 985.468L2398 945.82L2460.93 909.35L2501.96 950.022Z" fill="#C4C4C4"/>
                    </mask>
                    <g mask="url(#mask26)">
                      <path d="M2441 1151.5C2453.5 1045 2470 1015 2438 921.5L2454 912.5C2471.31 964.306 2491.5 971.5 2510 971.5V1151.5H2441Z" fill="${shade7}"/>
                      <path d="M2577 1151.5C2564.5 1045 2548 1015 2580 921.5L2564 912.5C2546.69 964.306 2526.5 971.5 2508 971.5V1151.5H2577Z" fill="${shade7}"/>
                    </g>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2660.11 1320.89L2568 1374.07L2600.12 1429.71L2637 1408.42V1562.57H2699.02H2705H2767.02V1408.42L2803.9 1429.71L2836.02 1374.07L2744.77 1321.38C2740.14 1340.43 2722.97 1354.57 2702.5 1354.57C2681.85 1354.57 2664.56 1340.18 2660.11 1320.89Z" fill="${accent1}"/>
                    <mask id="mask27" mask-type="alpha" maskUnits="userSpaceOnUse" x="2568" y="1320" width="269" height="243">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M2660.11 1320.89L2568 1374.07L2600.12 1429.71L2637 1408.42V1562.57H2699.02H2705H2767.02V1408.42L2803.9 1429.71L2836.02 1374.07L2744.77 1321.38C2740.14 1340.43 2722.97 1354.57 2702.5 1354.57C2681.85 1354.57 2664.56 1340.18 2660.11 1320.89Z" fill="#C4C4C4"/>
                    </mask>
                    <g mask="url(#mask27)">
                      <rect x="2699" y="1348" width="6" height="66" rx="3" fill="${shade7}"/>
                    </g>
                    <defs>
                      <linearGradient id="paint0_linear" x1="579" y1="85.3497" x2="579" y2="326.836" gradientUnits="userSpaceOnUse">
                        <stop stop-color="${accent5}"/>
                        <stop offset="1" stop-color="${accent4}"/>
                      </linearGradient>
                      <radialGradient id="paint1_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1351.01 205.728) rotate(90) scale(120.841 134.011)">
                        <stop stop-color="${accent2}"/>
                        <stop offset="1" stop-color="${accent2}" stop-opacity="0.71"/>
                      </radialGradient>
                      <radialGradient id="paint2_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(386 1442.09) rotate(90) scale(120.743 111)">
                        <stop stop-color="${accent2}"/>
                        <stop offset="1" stop-color="${accent3}"/>
                      </radialGradient>
                      <linearGradient id="paint3_linear" x1="579" y1="1733.35" x2="579" y2="1974.84" gradientUnits="userSpaceOnUse">
                        <stop stop-color="${shade4}"/>
                        <stop offset="1" stop-color="${shade3}"/>
                      </linearGradient>
                      <linearGradient id="paint4_linear" x1="772.011" y1="2144.89" x2="772.011" y2="2386.57" gradientUnits="userSpaceOnUse">
                        <stop stop-color="${accent0}"/>
                        <stop offset="1" stop-color="${accent0}" stop-opacity="0.75"/>
                      </linearGradient>
                      <linearGradient id="paint5_linear" x1="1930" y1="2217" x2="1930" y2="2314" gradientUnits="userSpaceOnUse">
                        <stop stop-color="${accent2}"/>
                        <stop offset="1" stop-color="${accent2}" stop-opacity="0"/>
                      </linearGradient>
                      <linearGradient id="paint6_linear" x1="2895" y1="156" x2="2895" y2="244" gradientUnits="userSpaceOnUse">
                        <stop stop-color="${accent5}"/>
                        <stop offset="1" stop-color="${accent5}" stop-opacity="0"/>
                      </linearGradient>
                      <linearGradient id="paint7_linear" x1="2316.01" y1="496.887" x2="2316.01" y2="738.569" gradientUnits="userSpaceOnUse">
                        <stop stop-color="${accent5}"/>
                        <stop offset="1" stop-color="${accent5}" stop-opacity="0.6"/>
                      </linearGradient>
                      <linearGradient id="paint8_linear" x1="2123" y1="909.35" x2="2123" y2="1150.84" gradientUnits="userSpaceOnUse">
                        <stop stop-color="${accent7}"/>
                        <stop offset="1" stop-color="${accent7}" stop-opacity="0.67"/>
                      </linearGradient>
                      <linearGradient id="paint9_linear" x1="2702" y1="497.35" x2="2702" y2="738.836" gradientUnits="userSpaceOnUse">
                        <stop stop-color="${accent0}"/>
                        <stop offset="1" stop-color="${accent0}" stop-opacity="0.75"/>
                      </linearGradient>
                      <linearGradient id="paint10_linear" x1="2702" y1="2145.35" x2="2702" y2="2386.84" gradientUnits="userSpaceOnUse">
                        <stop stop-color="${accent3}"/>
                        <stop offset="1" stop-color="${accent4}"/>
                      </linearGradient>
                      <linearGradient id="paint11_linear" x1="2578.75" y1="76" x2="2578.75" y2="354.5" gradientUnits="userSpaceOnUse">
                        <stop stop-color="${accent3}"/>
                        <stop offset="1" stop-color="${accent3}" stop-opacity="0.4"/>
                      </linearGradient>
                    </defs>
                  </pattern>
                </defs>
                <rect x="0" y="0" width="100%" height="100%" fill="url(#bg)" />
                <svg x="${surpriseX}" y="${surpriseY}" width="${adjustedCellWidth}" height="${adjustedCellHeight}" viewBox="0 0 ${CELL_WIDTH} ${CELL_HEIGHT}" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill="${shade0}" d="M0 0h386v412H0z"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M131.304 127.14l-3.237 195.794a4 4 0 0 0 4 4.066h37.25a4 4 0 0 0 3.987-3.671L187.463 152H193V85h-48.005l-13.691 42.14zm16.228-5.865c1.593-4.74 2.278-9.759 2.783-16.452l2.992.226c-.51 6.757-1.216 12.078-2.932 17.182-1.721 5.121-4.428 9.939-8.836 15.759l-2.391-1.811c4.277-5.648 6.796-10.179 8.384-14.904z" fill="url(#pant0_linear)"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M241.005 85l13.691 42.14 3.237 195.794a4 4 0 0 1-4 4.066h-37.25a4 4 0 0 1-3.987-3.671L198.537 152H193V85h48.005zm-2.537 36.275c-1.593-4.74-2.278-9.759-2.783-16.452l-2.992.226c.51 6.757 1.216 12.078 2.932 17.182 1.721 5.121 4.428 9.939 8.836 15.759l2.391-1.811c-4.277-5.648-6.796-10.179-8.384-14.904z" fill="url(#pant1_linear)"/>
                  <defs>
                    <linearGradient id="pant0_linear" x1="160.533" y1="85" x2="160.533" y2="327" gradientUnits="userSpaceOnUse">
                      <stop stop-color="${accent5}"/>
                      <stop offset="1" stop-color="${accent5}" stop-opacity=".67"/>
                    </linearGradient>
                    <linearGradient id="pant1_linear" x1="225.467" y1="85" x2="225.467" y2="327" gradientUnits="userSpaceOnUse">
                      <stop stop-color="${accent5}"/>
                      <stop offset="1" stop-color="${accent5}" stop-opacity=".67"/>
                    </linearGradient>
                  </defs>
                </svg>
              </svg>
            `,
            'utf8'
          ),
        });
      }),
    ),
  );
};

module.exports = {
  render,
};
