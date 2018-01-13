const prepareColors = require('./prepare');

const noop = () => {};

describe('the color set validation/preparation', () => {
  it('should convert valid CSS colors to hex', () => {
    const result = prepareColors({
      dark: {
        shade0: 'black',
        shade1: 'hsl(0, 0%, 0%)',
        shade2: 'hsla(0, 0%, 0%, 1)',
        shade3: 'rgb(0, 0 ,0)',
        shade4: 'rgb(0%, 0%, 0%)',
        shade5: 'rgba(0, 0, 0, 1)',
        shade6: '#000000',
        shade7: '#000000',
        accent0: '#000000',
        accent1: '#000000',
        accent2: '#000000',
        accent3: '#000000',
        accent4: '#000000',
        accent5: '#000000',
        accent6: '#000000',
        accent7: '#000000',
      },
    }, noop);
    expect(result).toMatchSnapshot();
  });
  it('should be idempotent', () => {
    const result1 = prepareColors({
      dark: {
        shade0: '#000',
        shade1: '#111',
        shade2: '#222',
        shade3: '#333',
        shade4: '#444',
        shade5: '#555',
        shade6: '#666',
        shade7: '#777',
        accent0: 'red',
        accent1: 'orange',
        accent2: 'yellow',
        accent3: 'green',
        accent4: 'cyan',
        accent5: 'blue',
        accent6: 'purple',
        accent7: 'pink',
      },
    }, noop);
    const result2 = prepareColors(result1, noop);
    expect(result1).toEqual(result2);
  });
  it('should properly fill in shades 1 through 6 when necessary', () => {
    const result = prepareColors({
      dark: {
        shade0: '#000000',
        shade7: '#FFFFFF',
        accent0: 'red',
        accent1: 'orange',
        accent2: 'yellow',
        accent3: 'green',
        accent4: 'cyan',
        accent5: 'blue',
        accent6: 'purple',
        accent7: 'pink',
      },
      light: {
        shade0: '#FFFFFF',
        shade7: '#000000',
        accent0: 'red',
        accent1: 'orange',
        accent2: 'yellow',
        accent3: 'green',
        accent4: 'cyan',
        accent5: 'blue',
        accent6: 'purple',
        accent7: 'pink',
      },
    }, noop);
    expect(result).toMatchSnapshot();
  });
  it('should throw when passed an invalid color', () => {
    const fn = () => {
      prepareColors({
        dark: {
          shade0: '#000',
          shade1: '#111',
          shade2: '#222',
          shade3: '#333',
          shade4: '#444',
          shade5: '#555',
          shade6: '#666',
          shade7: '#777',
          accent0: 'red',
          accent1: 'orange',
          accent2: 'yellow',
          accent3: 'green',
          accent4: 'cyan',
          accent5: 'blue',
          accent6: 'purple',
          accent7: 'aif8sd09f8*dasdf7&F^^fajfd',
        },
      }, noop);
    };
    expect(fn).toThrow();
  });
  it('should throw if missing a color', () => {
    const fn = () => {
      prepareColors({
        dark: {
          shade0: '#000',
          shade1: '#111',
          shade2: '#222',
          shade3: '#333',
          shade4: '#444',
          shade5: '#555',
          shade6: '#666',
          shade7: '#777',
          accent0: 'red',
          accent1: 'orange',
          accent2: 'yellow',
          accent3: 'green',
          accent4: 'cyan',
          accent5: 'blue',
          accent6: 'purple',
        },
      }, noop);
    };
    expect(fn).toThrow();
  });
  it('should throw if missing a shade, even if it is a fillable shade', () => {
    const fn = () => {
      prepareColors({
        dark: {
          shade0: '#000',
          shade1: '#111',
          shade2: '#222',
          shade4: '#444',
          shade5: '#555',
          shade6: '#666',
          shade7: '#777',
          accent0: 'red',
          accent1: 'orange',
          accent2: 'yellow',
          accent3: 'green',
          accent4: 'cyan',
          accent5: 'blue',
          accent6: 'purple',
          accent7: 'pink',
        },
      }, noop);
    };
    expect(fn).toThrow();
  });
});
