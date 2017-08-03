import path from "path";
import { render } from "./index";
import { colors } from "themer-colors-default";

describe("render function", () => {
  const promisedFiles = Promise.all(render(colors));

  it("should provide promised files whose contents are buffers", async () => {
    const files = await promisedFiles;
    files.forEach(file => expect(file.contents).toBeInstanceOf(Buffer));
  });

  it("should provide non-absolute paths for the files to be written", async () => {
    const files = await promisedFiles;
    const paths = files.map(file => file.name);
    expect(paths.some(path.isAbsolute)).toBe(false);
  });

  it("should properly render a package.json file", async () => {
    const files = await promisedFiles;
    const file = files.find(file => /package\.json/.test(file.name));
    expect(/undefined/.test(file.contents.toString("utf8"))).toBe(false);
  });

  it("should properly render theme files", async () => {
    const files = await promisedFiles;
    const themeFiles = files.filter(file =>
      /color-theme\.json/.test(file.name)
    );
    expect(themeFiles.length).toBe(2);
    themeFiles.forEach(themeFile => {
      expect(/undefined/.test(themeFile.contents.toString("utf8"))).toBe(false);
    });
  });
});
