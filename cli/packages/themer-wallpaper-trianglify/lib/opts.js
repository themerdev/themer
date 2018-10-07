const assert = require('assert'),
  { getSizesFromOptOrDefault } = require('themer-utils');

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
  getSizes: getSizesFromOptOrDefault,
  getVariances,
};
