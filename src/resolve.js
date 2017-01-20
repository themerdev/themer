import path from 'path';

export default name => new Promise((resolve, reject) => {
  try {
    resolve(require.resolve(name));
  }
  catch(e) {
    try {
      resolve(require.resolve(path.resolve(name)));
    }
    catch(e) {
      reject(`Unable to resolve ${name}`);
    }
  }
});
