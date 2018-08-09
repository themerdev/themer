const assert = require('assert');

const getSizes = opt => {
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

const getVariances = opt => {
  if (opt) {
    const unparsedVariances = Array.isArray(opt) ? opt : [opt];
    return unparsedVariances.map(unparsedVariance => {
      try {
        const variance = parseFloat(unparsedVariance);
        assert(variance >= 0 && variance <= 1);
        return variance;
      } catch(e) {
        throw new Error(`Invalid variance: '${unparsedVariance}'. Variance must be a float between 0 and 1 (inclusive).`);
      }
    });
  } else {
    return [0.75];
  }
};

module.exports = {
  getSizes,
  getVariances,
};
