import nova from 'nova-colors';
import Color from 'color';

export const colors = {
  dark: {
    shade0: nova.grays.gray1,
    shade1: Color(nova.grays.gray1).mix(Color(nova.grays.gray2)).hex(),
    shade2: nova.grays.gray2,
    shade3: nova.grays.gray3,
    shade4: nova.grays.gray4,
    shade5: Color(nova.grays.gray4).mix(Color(nova.grays.gray5)).hex(),
    shade6: nova.grays.gray5,
    shade7: nova.grays.gray6,
    accent0: nova.colors.red,
    accent1: nova.colors.orange,
    accent2: nova.colors.yellow,
    accent3: nova.colors.green,
    accent4: nova.colors.cyan,
    accent5: nova.colors.blue,
    accent6: nova.colors.purple,
    accent7: nova.colors.pink,
  },
};
