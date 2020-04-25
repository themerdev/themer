module.exports = map => {
  const cumulativeWeights = Array.from(map.values()).reduce((c, weight, i) => c.concat(weight + (i === 0 ? 0 : c[i-1])), []);
  const random = cumulativeWeights[cumulativeWeights.length-1] * Math.random();
  return Array.from(map.keys())[cumulativeWeights.findIndex(cw => random < cw)];
};
