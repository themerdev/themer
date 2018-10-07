module.exports = async (fn) => {
  try {
    const result = await fn();
    return () => result;
  }
  catch(e) {
    return () => { throw e; };
  }
};
