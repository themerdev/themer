import Color from 'color';
import { source } from 'common-tags';
import { colorSetToVariants } from '../color-set/index.js';
import type { Template } from './index.js';

function formatColor(hex: string) {
  const [r, g, b] = Color(hex)
    .rgb()
    .array()
    .map((n) => n.toString(16));
  return [g, b, r, '00'].join('');
}

const template: Template = {
  name: 'ConEmu',
  render: async function* (colorSet) {
    const variants = colorSetToVariants(colorSet);
    for (const variant of variants) {
      const shade0 = formatColor(variant.colors.shade0);
      const shade1 = formatColor(variant.colors.shade1);
      const shade6 = formatColor(variant.colors.shade6);
      const shade7 = formatColor(variant.colors.shade7);
      const accent0 = formatColor(variant.colors.accent0);
      const accent1 = formatColor(variant.colors.accent1);
      const accent2 = formatColor(variant.colors.accent2);
      const accent3 = formatColor(variant.colors.accent3);
      const accent4 = formatColor(variant.colors.accent4);
      const accent5 = formatColor(variant.colors.accent5);
      const accent6 = formatColor(variant.colors.accent6);
      const accent7 = formatColor(variant.colors.accent7);
      yield {
        path: `${variant.title.kebab}.xml`,
        content: source`
          <value name="ColorTable00" type="dword" data="${shade0}" />
          <value name="ColorTable01" type="dword" data="${accent5}" />
          <value name="ColorTable02" type="dword" data="${accent3}" />
          <value name="ColorTable03" type="dword" data="${accent4}" />
          <value name="ColorTable04" type="dword" data="${accent0}" />
          <value name="ColorTable05" type="dword" data="${accent6}" />
          <value name="ColorTable06" type="dword" data="${accent1}" />
          <value name="ColorTable07" type="dword" data="${shade6}" />
          <value name="ColorTable08" type="dword" data="${shade1}" />
          <value name="ColorTable09" type="dword" data="${accent5}" />
          <value name="ColorTable10" type="dword" data="${accent3}" />
          <value name="ColorTable11" type="dword" data="${accent4}" />
          <value name="ColorTable12" type="dword" data="${accent0}" />
          <value name="ColorTable13" type="dword" data="${accent7}" />
          <value name="ColorTable14" type="dword" data="${accent2}" />
          <value name="ColorTable15" type="dword" data="${shade7}" />
          <value name="ColorTable16" type="dword" data="${shade0}" />
          <value name="ColorTable17" type="dword" data="${accent0}" />
          <value name="ColorTable18" type="dword" data="${accent3}" />
          <value name="ColorTable19" type="dword" data="${accent1}" />
          <value name="ColorTable20" type="dword" data="${accent5}" />
          <value name="ColorTable21" type="dword" data="${accent6}" />
          <value name="ColorTable22" type="dword" data="${accent4}" />
          <value name="ColorTable23" type="dword" data="${shade6}" />
          <value name="ColorTable24" type="dword" data="${shade1}" />
          <value name="ColorTable25" type="dword" data="${accent0}" />
          <value name="ColorTable26" type="dword" data="${accent3}" />
          <value name="ColorTable27" type="dword" data="${accent2}" />
          <value name="ColorTable28" type="dword" data="${accent5}" />
          <value name="ColorTable29" type="dword" data="${accent7}" />
          <value name="ColorTable30" type="dword" data="${accent4}" />
          <value name="ColorTable31" type="dword" data="${shade7}" />
        `,
      };
    }
  },
  renderInstructions: (paths) => source`
    1. Open the ConEmu settings and navigate to Features > Colors. Take note of the location of \`ConEmu.xml\` for later.
    2. Create a new color scheme by typing a name in the "Schemes" field and clicking Save.
    3. Close ConEmu.
    4. Open \`ConEmu.xml\` and locate the color scheme name you typed in step 2.
    5. Replace the \`<value>\` elements \`ColorTable00\` through \`ColorTable31\` with the contents of your themer-generated XML (${paths
      .map((p) => `\`${p}\``)
      .join(
        ' or ',
      )}). Be sure to leave the others, like \`ExtendColors\`, etc. intact.
    6. Open ConEmu and select your theme again in settings.
  `,
};

export default template;
