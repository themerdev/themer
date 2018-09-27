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

const deepFlatten = arr =>
  arr.reduce(
    (cumulative, inner) =>
      cumulative.concat(Array.isArray(inner) ? deepFlatten(inner) : inner),
    []
  );

const colorSets = colors =>
  Object.entries(colors).map(([name, colors]) => ({name, colors}));

module.exports = {
  getSizesFromOptOrDefault,
  deepFlatten,
  colorSets,
};
