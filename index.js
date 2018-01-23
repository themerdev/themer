const { grays, colors } = require('nova-colors').default,
  Color = require('color');

exports.colors = {
  dark: {
    shade0: grays.gray1,
    shade1: Color(grays.gray1).mix(Color(grays.gray2)).hex(),
    shade2: grays.gray2,
    shade3: grays.gray3,
    shade4: grays.gray4,
    shade5: Color(grays.gray4).mix(Color(grays.gray5)).hex(),
    shade6: grays.gray5,
    shade7: grays.gray6,
    accent0: colors.red,
    accent1: colors.orange,
    accent2: colors.yellow,
    accent3: colors.green,
    accent4: colors.cyan,
    accent5: colors.blue,
    accent6: colors.purple,
    accent7: colors.pink,
  },
};
