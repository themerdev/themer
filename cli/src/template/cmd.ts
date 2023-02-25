import { source } from 'common-tags';
import { colorSetToVariants } from '../color-set/index.js';
import type { Template } from './index.js';

function formatColor(hex: string) {
  const elements = hex.replace('#', '').match(/.{2}/g) as [
    string,
    string,
    string,
  ];
  elements.push('00');
  elements.reverse();
  return elements.join('');
}

const template: Template = {
  name: 'CMD',
  render: async function* (colorSet) {
    const variants = colorSetToVariants(colorSet);
    for (const variant of variants) {
      const shade0 = formatColor(variant.colors.shade0);
      const shade1 = formatColor(variant.colors.shade1);
      const shade6 = formatColor(variant.colors.shade6);
      const shade7 = formatColor(variant.colors.shade7);
      const accent0 = formatColor(variant.colors.accent0);
      const accent2 = formatColor(variant.colors.accent2);
      const accent3 = formatColor(variant.colors.accent3);
      const accent4 = formatColor(variant.colors.accent4);
      const accent5 = formatColor(variant.colors.accent5);
      const accent6 = formatColor(variant.colors.accent6);
      const accent7 = formatColor(variant.colors.accent7);
      yield {
        path: `${variant.title.kebab}.reg`,
        content: Buffer.from(
          source`
            Windows Registry Editor Version 5.00

            [HKEY_CURRENT_USER\\Console]
            "ColorTable00"=dword:${shade0}
            "ColorTable01"=dword:${accent5}
            "ColorTable02"=dword:${accent3}
            "ColorTable03"=dword:${accent4}
            "ColorTable04"=dword:${accent0}
            "ColorTable05"=dword:${accent6}
            "ColorTable06"=dword:${accent2}
            "ColorTable07"=dword:${shade6}
            "ColorTable08"=dword:${shade1}
            "ColorTable09"=dword:${accent5}
            "ColorTable10"=dword:${accent3}
            "ColorTable11"=dword:${accent4}
            "ColorTable12"=dword:${accent0}
            "ColorTable13"=dword:${accent7}
            "ColorTable14"=dword:${accent2}
            "ColorTable15"=dword:${shade7}
            "ScreenColors"=dword:00000007
            "PopupColors"=dword:0000008b
          `,
          'utf8',
        ),
      };
    }
  },
  renderInstructions: (paths) => source`
    Simply double-click the desired theme file to add the color keys to the registry:
    
    ${paths.map((p) => `* \`${p}\``)}
    
    The scheme of CMD can then be configured with the \`color\` command. For example, use \`color 07\` to set the background and foreground to your color set's default.
  `,
};

export default template;
