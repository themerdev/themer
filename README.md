<p align="center">
  <a href="https://themer.dev">
    <img src="https://cdn.jsdelivr.net/gh/themerdev/themer@8af6e97f2d51b7002894ba86bb7b3fccf965efb9/assets/icon.png" width="384" alt="Themer logo" />
  </a>
</p>

# themer ![GitHub Workflow Status (main branch)](https://img.shields.io/github/actions/workflow/status/themerdev/themer/main.yml?branch=main) [![Follow on Mastodon](https://img.shields.io/mastodon/follow/109767516017513032?domain=https%3A%2F%2Ffosstodon.org)](https://twitter.com/intent/user?screen_name=themerdev) [![Join the newsletter](https://img.shields.io/badge/newsletter-join-brightgreen)](https://themer.dev/join)

`themer` takes a set of colors and generates [editor themes](#editorsides), [terminal themes](#terminals), [themes for other apps](#other-apps), and [desktop wallpapers](#wallpapers).

![visual description](https://cdn.jsdelivr.net/gh/themerdev/themer@a4ad55a9d664d474485b2cc167ef41ec8ff1b1d7/assets/themer-description.png)

## Table of contents

- [Getting started](#getting-started)
- [CLI documentation](#cli-documentation)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Example workflow: dotfiles integration](#example-workflow-dotfiles-integration)
  - [Example workflow: npx](#example-workflow-npx)
  - [Example workflow: using base16 schemes with Themer](#example-workflow-using-base16-schemes-with-themer)
- [API documentation](#api-documentation)
  - [Installation](#installation-1)
  - [Interface](#interface)
  - [Create custom `ColorSet`s](#create-custom-colorsets)
    - [Color mappings](#color-mappings)
  - [Create custom `Template`s](#create-custom-templates)
- [Themer color sets](#themer-color-sets)
  - [Premium color sets](#premium-color-sets)
  - [Original color sets](#original-color-sets)
  - [Ports from third-party themes](#ports-from-third-party-themes)
- [Themer templates](#themer-templates)
  - [Terminals](#terminals)
  - [Editors/IDEs](#editorsides)
  - [Other apps](#other-apps)
  - [Wallpapers](#wallpapers)
- [Prior art](#prior-art)
- [Contributing](#contributing)
- [Next steps](#next-steps)
  - [Join the community](#join-the-community)
  - [Support `themer`](#support-themer)

## Getting started

There are a few different ways to level up your development setup with `themer`:

1. **Web-based graphical user interface.** `themer` has an official progressive web app located at [themer.dev](https://themer.dev).
2. **Command-line interface.** `themer` can be used to generate themes on the CLI, see the [CLI docs](#cli-documentation) below.
3. **Application programming interface.** `themer` exposes a JavaScript API (complete with TypeScript type definitions) for programmatic use; see the [API docs](#api-documentation) below.

Feature comparison:

|                               | Web UI         | CLI/API  |
| ----------------------------- | -------------- | -------- |
| Instant preview               | ✅             | ❌       |
| Premium color sets            | ✅             | ❌       |
| Supported color format        | Any CSS format | Hex only |
| Wallpaper output format       | PNG + SVG      | SVG only |
| Seamless dotfiles integration | ❌             | ✅       |

## CLI documentation

As of V5, `themer` is distributed as a single TypeScript/JavaScript package containing all built-in color sets and templates for ease of use—but still supports the use of [custom color sets](#create-custom-colorsets) or [templates](#create-custom-templates).

### Installation

Install `themer` from npm with your JavaScript package manager of choice.

```sh
npm install themer
```

`themer` can also be installed globally. Or if you prefer not to install it at all, [it can be used with `npx`](#example-workflow-npx).

### Usage

```sh
themer [options]
```

Pass `themer` one or more color sets, as many templates as you wish, as many wallpaper resolutions as you wish, and an output directory.

| Option                                                      | Description                                                    | Default value                | Available options                                                                                                                                                                                              |
| ----------------------------------------------------------- | -------------------------------------------------------------- | ---------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `-c, --color-set <built-in color set name or file path...>` | the color set(s) to render                                     | `default`                    | [color set name](#themer-color-sets), or path to JS file containing a [custom color set](#create-custom-colorsets), or a file path to a [base16 yaml file](#example-workflow-using-base16-schemes-with-themer) |
| `-t, --template <built-in template name or file path...>`   | the theme template(s) to render                                | `*` (all built-in templates) | [template name](#themer-templates), or path to JS file containing a [custom template](#create-custom-templates)                                                                                                |
| `-s, --size <wallpaper resolution...>`                      | resolution to render in pixels, in the format [width]x[height] | `2880x1800`                  | any                                                                                                                                                                                                            |
| `-o, --output <path>`                                       | the output directory                                           | `themer-output`              | any                                                                                                                                                                                                            |

`--color-set`, `--template`, and `--size` may be specified multiple times.

Your generated theme files, as well as a README on how to install them, will be written to the output directory.

### Example workflow: dotfiles integration

Say you wanted to generate a vim theme and desktop background using `themer`'s default color set. First, install `themer`:

```sh
cd my-dotfiles
npm install themer
```

Then edit your `package.json`:

```json
{
  "scripts": {
    "build": "themer -c default -t vim -t vim-lightline -t hyper -t wallpaper-block-wave -o gen"
  }
}
```

Then run your new script:

```sh
npm run build
```

Now check the `gen/` folder for your generated files. Here's the result:

![example usage result](https://cdn.jsdelivr.net/gh/themerdev/themer@a186c8585721d5defbf4cb1bc94165144d4dd35a/assets/example-usage.png)

### Example workflow: npx

This command will generate a Vim theme and the Block Wave wallpaper, using `themer`'s default color set, and put them in a folder called `output`:

```sh
npx themer -c default -t vim -t wallpaper-block-wave -o output
```

### Example workflow: using base16 schemes with Themer

In place of a themer color set, you can also provide `themer` with any base16 scheme YAML file.

```
themer --color-set path/to/base16-scheme.yml ...
```

Refer to the [base16 repository](https://github.com/chriskempson/base16#scheme-repositories) for a list of base16 schemes.

## API documentation

`themer` ships with a JavaScript API (with TypeScript type definitions) for use in programmatically generating themes.

### Installation

```sh
npm install themer
```

### Interface

`themer`'s default export is an [async generator function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function*) that takes three arguments:

1. An array of [`ColorSet` objects](#create-custom-colorsets), or string identifiers of [`themer`'s built-in color sets](#themer-color-sets)
2. An array of [`Template` objects](#create-custom-templates), or string identifiers of [`themer`'s built-in templates](#themer-templates)
3. A `RenderOptions` object used to specify the resolution of the outputted wallpaper images
4. (Optional) an `OutputFileTransform` async generator function that transforms the files generated by the provided templates. This function runs between each template's `render` and `renderInstructions` functions.

The objects yielded by the generator are `OutputFile`s.

```ts
import themer from "themer";
import myColors from "./my-colors";
import myTemplate from "./my-template";

// Example usage: generate Vim themes, 1440x900 wallpapers, and custom files
// from themer's "Night Sky" color set and a custom color set.
const files = themer(
  ["night-sky", myColors],
  ["vim", "wallpaper-block-wave", myTemplate],
  { wallpaperSizes: [{ width: 1440, height: 900 }] }
);

for await (const file of files) {
  // ...
}
```

### Create custom `ColorSet`s

```ts
import type { ColorSet } from "themer";

const myColorSet: ColorSet = {
  // Color sets should provide a human-readable name.
  name: "My Color Set",

  // Color sets can define a dark variant, a light variant, or both.
  // Each variant provides two or eight shades and eight accent colors in hex format.
  variants: {
    // In a dark variant, shade0 should be the darkest and shade7 should be
    // the lightest.
    dark: {
      shade0: "#333333",
      // Note: you can define shades 1 through 6 yourself, or you can omit
      // them; if omitted, they will be calculated automatically by
      // interpolating between shade0 and shade7.
      shade7: "#eeeeee",
      accent0: "#ff4050",
      accent1: "#f28144",
      accent2: "#ffd24a",
      accent3: "#a4cc35",
      accent4: "#26c99e",
      accent5: "#66bfff",
      accent6: "#cc78fa",
      accent7: "#f553bf",
    },

    // In a light variant, shade7 should be the darkest and shade0 should be
    // the lightest.
    light: {
      shade0: "#eeeeee",
      shade7: "#333333",
      accent0: "#f03e4d",
      accent1: "#f37735",
      accent2: "#eeba21",
      accent3: "#97bd2d",
      accent4: "#1fc598",
      accent5: "#53a6e1",
      accent6: "#bf65f0",
      accent7: "#ee4eb8",
    },
  },
};

export default myColorSet;
```

_Pro Tip: you can use [`themer`'s Web UI](https://themer.dev) to more easily select your colors, then click the "Download" button to generate a `colors.js` file in the correct format. With the Web UI, you can also input any valid CSS color format (keyword, HSL, RGB, etc.) and it will automatically convert the color to hex for you._

#### Color mappings

To help you choose colors for your own color set, this is approximately how most `themer` templates will utilize your colors:

| Color Key | Typical Usage             | Conventional Color\* |
| --------- | ------------------------- | -------------------- |
| `accent0` | error, VCS deletion       | Red                  |
| `accent1` | syntax                    | Orange               |
| `accent2` | warning, VCS modification | Yellow               |
| `accent3` | success, VCS addition     | Green                |
| `accent4` | syntax                    | Cyan                 |
| `accent5` | syntax                    | Blue                 |
| `accent6` | syntax, caret/cursor      |                      |
| `accent7` | syntax, special           | Magenta              |
| `shade0`  | background color          |                      |
| `shade1`  | UI                        |                      |
| `shade2`  | UI, text selection        |                      |
| `shade3`  | UI, code comments         |                      |
| `shade4`  | UI                        |                      |
| `shade5`  | UI                        |                      |
| `shade6`  | foreground text           |                      |
| `shade7`  | foreground text           |                      |

_\*Conventional color is suggested for consistency with ANSI color names in terminal themes, but is not a hard requirement._

See [`themer`'s Web UI](https://themer.dev) for a more visual representation of the color mappings.

### Create custom `Template`s

```ts
import type { Template } from "themer";

const template: Template = {
  // Templates should provide a human-readable name.
  name: "My Template",

  // The render async generator function takes a color set and the render
  // options, and yields one or more output files. The color set is fully
  // expanded (e.g., if the color set did not include shades 1 through 6
  // when originally authored, those intermediary shades will have already
  // been calculated and included).
  render: async function* (colorSet, options) {
    // The yielded output file has two properties: a string path (relative)
    // and a Buffer of the file's content.
    yield {
      path: "my-file.txt",
      content: Buffer.from("Hello, world!", "utf8"),
    };
  },

  // The renderInstructions function takes an array of paths generated from
  // the render function and should return a Markdown string, which will be
  // included in the generated README.md file.
  renderInstructions: (paths) =>
    `Copy the files (${paths.join(" and ")}) to your home directory.`,
};

export default template;
```

## Themer color sets

### Premium color sets

(Only available on [themer.dev](https://themer.dev).)

| Name                                          | Dark Preview                                                                                                                                           | Light Preview                                                                                                                                            |
| --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Jamstacker](https://themer.dev/jamstacker)   | ![Jamstacker dark preview](https://cdn.jsdelivr.net/gh/themerdev/themer@bd73b5e6a10f4dfbbfc17f89a3e46dd0550673e4/assets/preview/jamstacker-dark.png)   | (dark only)                                                                                                                                              |
| [Victor Mono](https://themer.dev/victor-mono) | ![Victor Mono dark preview](https://cdn.jsdelivr.net/gh/themerdev/themer@6d814b06830b02d6138e824655f7e3d1314e991c/assets/preview/victor-mono-dark.png) | ![Victor Mono light preview](https://cdn.jsdelivr.net/gh/themerdev/themer@6d814b06830b02d6138e824655f7e3d1314e991c/assets/preview/victor-mono-light.png) |
| [Future Pro](https://themer.dev/future-pro)   | ![Future Pro dark preview](https://cdn.jsdelivr.net/gh/themerdev/themer@6d814b06830b02d6138e824655f7e3d1314e991c/assets/preview/future-pro-dark.png)   | ![Future Pro light preview](https://cdn.jsdelivr.net/gh/themerdev/themer@6d814b06830b02d6138e824655f7e3d1314e991c/assets/preview/future-pro-light.png)   |

### Original color sets

| Name                                                                                                          | Dark Preview                                                                                                                                                                | Light Preview                                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`default`](https://github.com/themerdev/themer/tree/main/cli/src/color-set/default.ts)                       | ![default dark preview](https://cdn.jsdelivr.net/gh/themerdev/themer@42a574d77d0a5b68b2f46a0a12c344457585c016/assets/preview/themer-default-dark.svg)                       | ![default light preview](https://cdn.jsdelivr.net/gh/themerdev/themer@42a574d77d0a5b68b2f46a0a12c344457585c016/assets/preview/themer-default-light.svg)                       |
| [`finger-paint`](https://github.com/themerdev/themer/tree/main/cli/src/color-set/finger-paint.ts)             | ![finger-paint dark preview](https://cdn.jsdelivr.net/gh/themerdev/themer@42a574d77d0a5b68b2f46a0a12c344457585c016/assets/preview/themer-finger-paint-dark.svg)             | ![finger-paint light preview](https://cdn.jsdelivr.net/gh/themerdev/themer@42a574d77d0a5b68b2f46a0a12c344457585c016/assets/preview/themer-finger-paint-light.svg)             |
| [`green-as-a-whistle`](https://github.com/themerdev/themer/tree/main/cli/src/color-set/green-as-a-whistle.ts) | ![green-as-a-whistle dark preview](https://cdn.jsdelivr.net/gh/themerdev/themer@42a574d77d0a5b68b2f46a0a12c344457585c016/assets/preview/themer-green-as-a-whistle-dark.svg) | ![green-as-a-whistle light preview](https://cdn.jsdelivr.net/gh/themerdev/themer@42a574d77d0a5b68b2f46a0a12c344457585c016/assets/preview/themer-green-as-a-whistle-light.svg) |
| [`monkey`](https://github.com/themerdev/themer/tree/main/cli/src/color-set/monkey.ts)                         | ![monkey dark preview](https://cdn.jsdelivr.net/gh/themerdev/themer@42a574d77d0a5b68b2f46a0a12c344457585c016/assets/preview/themer-monkey-dark.svg)                         | ![monkey light preview](https://cdn.jsdelivr.net/gh/themerdev/themer@42a574d77d0a5b68b2f46a0a12c344457585c016/assets/preview/themer-monkey-light.svg)                         |
| [`night-sky`](https://github.com/themerdev/themer/tree/main/cli/src/color-set/night-sky.ts)                   | ![night-sky dark preview](https://cdn.jsdelivr.net/gh/themerdev/themer@42a574d77d0a5b68b2f46a0a12c344457585c016/assets/preview/themer-night-sky-dark.svg)                   | (dark only)                                                                                                                                                                   |
| [`polar-ice`](https://github.com/themerdev/themer/tree/main/cli/src/color-set/polar-ice.ts)                   | ![polar-ice dark preview](https://cdn.jsdelivr.net/gh/themerdev/themer@42a574d77d0a5b68b2f46a0a12c344457585c016/assets/preview/themer-polar-ice-dark.svg)                   | ![polar-ice light preview](https://cdn.jsdelivr.net/gh/themerdev/themer@42a574d77d0a5b68b2f46a0a12c344457585c016/assets/preview/themer-polar-ice-light.svg)                   |
| [`right-in-the-teals`](https://github.com/themerdev/themer/tree/main/cli/src/color-set/right-in-the-teals.ts) | ![right-in-the-teals dark preview](https://cdn.jsdelivr.net/gh/themerdev/themer@42a574d77d0a5b68b2f46a0a12c344457585c016/assets/preview/themer-right-in-the-teals-dark.svg) | ![right-in-the-teals light preview](https://cdn.jsdelivr.net/gh/themerdev/themer@42a574d77d0a5b68b2f46a0a12c344457585c016/assets/preview/themer-right-in-the-teals-light.svg) |
| [`shoulder-pads`](https://github.com/themerdev/themer/tree/main/cli/src/color-set/shoulder-pads.ts)           | ![shoulder-pads dark preview](https://cdn.jsdelivr.net/gh/themerdev/themer@cd4919aae2f59901b6119480bf8a926b63916d43/assets/preview/themer-shoulder-pads-dark.svg)           | ![shoulder-pads light preview](https://cdn.jsdelivr.net/gh/themerdev/themer@cd4919aae2f59901b6119480bf8a926b63916d43/assets/preview/themer-shoulder-pads-light.svg)           |

### Ports from third-party themes

| Name                                                                                                    | Dark Preview                                                                                                                                                           | Light Preview                                                                                                                                               |
| ------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`dracula`](https://github.com/themerdev/themer/tree/main/cli/src/color-set/dracula.ts)                 | ![dracula dark preview](https://cdn.jsdelivr.net/gh/themerdev/themer@42a574d77d0a5b68b2f46a0a12c344457585c016/assets/preview/themer-dracula-dark.svg)                  | (dark only)                                                                                                                                                 |
| [`github-universe`](https://github.com/themerdev/themer/tree/main/cli/src/color-set/github-universe.ts) | ![github-universe dark preview](https://cdn.jsdelivr.net/gh/themerdev/themer@42a574d77d0a5b68b2f46a0a12c344457585c016/assets/preview/themer-git-hub-universe-dark.svg) | (dark only)                                                                                                                                                 |
| [`lucid`](https://github.com/themerdev/themer/tree/main/cli/src/color-set/lucid.ts)                     | ![lucid dark preview](https://cdn.jsdelivr.net/gh/themerdev/themer@42a574d77d0a5b68b2f46a0a12c344457585c016/assets/preview/themer-lucid-dark.svg)                      | ![lucid light preview](https://cdn.jsdelivr.net/gh/themerdev/themer@42a574d77d0a5b68b2f46a0a12c344457585c016/assets/preview/themer-lucid-light.svg)         |
| [`mojave`](https://github.com/themerdev/themer/tree/main/cli/src/color-set/mojave.ts)                   | ![mojave dark preview](https://cdn.jsdelivr.net/gh/themerdev/themer@42a574d77d0a5b68b2f46a0a12c344457585c016/assets/preview/themer-mojave-dark.svg)                    | ![mojave light preview](https://cdn.jsdelivr.net/gh/themerdev/themer@42a574d77d0a5b68b2f46a0a12c344457585c016/assets/preview/themer-mojave-light.svg)       |
| [`nova`](https://github.com/themerdev/themer/tree/main/cli/src/color-set/nova.ts)                       | ![nova dark preview](https://cdn.jsdelivr.net/gh/themerdev/themer@42a574d77d0a5b68b2f46a0a12c344457585c016/assets/preview/themer-nova-dark.svg)                        | (dark only)                                                                                                                                                 |
| [`one`](https://github.com/themerdev/themer/tree/main/cli/src/color-set/one.ts)                         | ![one dark preview](https://cdn.jsdelivr.net/gh/themerdev/themer@42a574d77d0a5b68b2f46a0a12c344457585c016/assets/preview/themer-one-dark.svg)                          | ![one light preview](https://cdn.jsdelivr.net/gh/themerdev/themer@42a574d77d0a5b68b2f46a0a12c344457585c016/assets/preview/themer-one-light.svg)             |
| [`rivet`](https://github.com/themerdev/themer/tree/main/cli/src/color-set/rivet.ts)                     | ![rivet dark preview](https://cdn.jsdelivr.net/gh/themerdev/themer@42a574d77d0a5b68b2f46a0a12c344457585c016/assets/preview/themer-rivet-dark.svg)                      | ![rivet light preview](https://cdn.jsdelivr.net/gh/themerdev/themer@42a574d77d0a5b68b2f46a0a12c344457585c016/assets/preview/themer-rivet-light.svg)         |
| [`seti`](https://github.com/themerdev/themer/tree/main/cli/src/color-set/seti.ts)                       | ![seti dark preview](https://cdn.jsdelivr.net/gh/themerdev/themer@42a574d77d0a5b68b2f46a0a12c344457585c016/assets/preview/themer-seti-dark.svg)                        | (dark only)                                                                                                                                                 |
| [`solarized`](https://github.com/themerdev/themer/tree/main/cli/src/color-set/solarized.ts)             | ![solarized dark preview](https://cdn.jsdelivr.net/gh/themerdev/themer@42a574d77d0a5b68b2f46a0a12c344457585c016/assets/preview/themer-solarized-dark.svg)              | ![solarized light preview](https://cdn.jsdelivr.net/gh/themerdev/themer@42a574d77d0a5b68b2f46a0a12c344457585c016/assets/preview/themer-solarized-light.svg) |

## Themer templates

### Terminals

- [`alacritty`](https://github.com/themerdev/themer/tree/main/cli/src/template/alacritty.ts)
- [`cmd`](https://github.com/themerdev/themer/tree/main/cli/src/template/cmd.ts)
- [`conemu`](https://github.com/themerdev/themer/tree/main/cli/src/template/conemu.ts)
- [`hyper`](https://github.com/themerdev/themer/tree/main/cli/src/template/hyper.ts)
- [`iterm`](https://github.com/themerdev/themer/tree/main/cli/src/template/iterm.ts)
- [`kitty`](https://github.com/themerdev/themer/tree/main/cli/src/template/kitty.ts)
- [`konsole`](https://github.com/themerdev/themer/tree/main/cli/src/template/konsole.ts)
- [`terminal`](https://github.com/themerdev/themer/tree/main/cli/src/template/terminal.ts)
- [`terminator`](https://github.com/themerdev/themer/tree/main/cli/src/template/terminator.ts)
- [`warp`](https://github.com/themerdev/themer/tree/main/cli/src/template/warp.ts)
- [`windows-terminal`](https://github.com/themerdev/themer/tree/main/cli/src/template/windows-terminal.ts)

### Editors/IDEs

- [`atom-syntax`](https://github.com/themerdev/themer/tree/main/cli/src/template/atom-syntax.ts)
- [`atom-ui`](https://github.com/themerdev/themer/tree/main/cli/src/template/atom-ui.ts)
- [`bbedit`](https://github.com/themerdev/themer/tree/main/cli/src/template/bbedit.ts)
- [`emacs`](https://github.com/themerdev/themer/tree/main/cli/src/template/emacs.ts)
- [`sublime-text`](https://github.com/themerdev/themer/tree/main/cli/src/template/sublime-text.ts)
- [`vim-lightline`](https://github.com/themerdev/themer/tree/main/cli/src/template/vim-lightline.ts)
- [`vim`](https://github.com/themerdev/themer/tree/main/cli/src/template/vim.ts)
- [`visual-studio`](https://github.com/themerdev/themer/tree/main/cli/src/template/visual-studio.ts)
- [`vs-code`](https://github.com/themerdev/themer/tree/main/cli/src/template/vs-code.ts)
- [`xcode`](https://github.com/themerdev/themer/tree/main/cli/src/template/xcode.ts)

### Other apps

- [`alfred`](https://github.com/themerdev/themer/tree/main/cli/src/template/alfred.ts)
- [`brave`](https://github.com/themerdev/themer/tree/main/cli/src/template/brave.ts)
- [`chrome`](https://github.com/themerdev/themer/tree/main/cli/src/template/chrome.ts)
- [`css`](https://github.com/themerdev/themer/tree/main/cli/src/template/css.ts)
- [`firefox-addon`](https://github.com/themerdev/themer/tree/main/cli/src/template/firefox-addon.ts)
- [`firefox-color`](https://github.com/themerdev/themer/tree/main/cli/src/template/firefox-color.ts)
- [`kde-plasma-colors`](https://github.com/themerdev/themer/tree/main/cli/src/template/kde-plasma-colors.ts)
- [`keypirinha`](https://github.com/themerdev/themer/tree/main/cli/src/template/keypirinha.ts)
- [`prism`](https://github.com/themerdev/themer/tree/main/cli/src/template/prism.ts)
- [`sketch-palettes`](https://github.com/themerdev/themer/tree/main/cli/src/template/sketch-palettes.ts)
- [`slack`](https://github.com/themerdev/themer/tree/main/cli/src/template/slack.ts)
- [`wox`](https://github.com/themerdev/themer/tree/main/cli/src/template/wox.ts)
- [`xresources`](https://github.com/themerdev/themer/tree/main/cli/src/template/xresources.ts)

### Wallpapers

See [`themer`'s Web UI](https://themer.dev) for wallpaper previews.

- [`wallpaper-block-wave`](https://github.com/themerdev/themer/tree/main/cli/src/template/wallpaper-block-wave.ts)
- [`wallpaper-burst`](https://github.com/themerdev/themer/tree/main/cli/src/template/wallpaper-burst.ts)
- [`wallpaper-circuits`](https://github.com/themerdev/themer/tree/main/cli/src/template/wallpaper-circuits.ts)
- [`wallpaper-diamonds`](https://github.com/themerdev/themer/tree/main/cli/src/template/wallpaper-diamonds.ts)
- [`wallpaper-dot-grid`](https://github.com/themerdev/themer/tree/main/cli/src/template/wallpaper-dot-grid.ts)
- [`wallpaper-octagon`](https://github.com/themerdev/themer/tree/main/cli/src/template/wallpaper-octagon.ts)
- [`wallpaper-shirts`](https://github.com/themerdev/themer/tree/main/cli/src/template/wallpaper-shirts.ts)
- [`wallpaper-triangles`](https://github.com/themerdev/themer/tree/main/cli/src/template/wallpaper-triangles.ts)
- [`wallpaper-trianglify`](https://github.com/themerdev/themer/tree/main/cli/src/template/wallpaper-trianglify.ts)

## Prior art

`themer` is inspired by [trevordmiller/nova](https://github.com/trevordmiller/nova/) and [chriskempson/base16](http://chriskempson.com/projects/base16/).

Conceptually, `themer` is very similar to [base16](http://chriskempson.com/projects/base16/), but:

1. It is lighter, and simpler to use.
2. It is more easily extensible with your own color sets and templates.
3. It integrates better with your dotfiles, especially if you keep them under version control.

## Contributing

For instructions on how to contribute to `themer`, see [CONTRIBUTING.md](https://github.com/themerdev/themer/blob/main/.github/CONTRIBUTING.md) and [`themer`'s code of conduct](https://github.com/themerdev/themer/blob/main/CODE_OF_CONDUCT.md).

## Next steps

### Join the community

- ⭐️ Star [`themer` on GitHub](https://github.com/themerdev/themer)
- 🐘 Follow [@themer](https://fosstodon.org/@themer) on Mastodon
- 💌 [Join the newsletter](https://themer.dev/join)

### Support `themer`

- 👑 Purchase a premium theme from [themer.dev](https://themer.dev)
- 💖 [Sponsor the @themerdev GitHub org](https://github.com/sponsors/themerdev)
