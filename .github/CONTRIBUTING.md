# Contributing

Thanks for contributing to themer! All contributions are welcome, and are expected to adhere to [the code of conduct](https://github.com/mjswensen/themer/blob/master/CODE_OF_CONDUCT.md). Below are some guidelines for the most effective ways you can help build themer.

* [Log a bug](#log-a-bug)
* [Request a theme template](#request-a-theme-template)
* [Provide a theme template implementation](#provide-a-theme-template-implementation)
  * [Option 1: as part of the themer repository](#option-1-as-part-of-the-themer-repository)
  * [Option 2: as a third-party npm package](#option-2-as-a-third-party-npm-package)
* [Provide a color set](#provide-a-color-set)
  * [Option 1: for personal use](#option-1-for-personal-use)
    * [Option 1.1: using themer.dev](#option-11-using-themerdev)
    * [Option 1.2: using npm](#option-12-using-npm)
  * [Option 2: as part of the themer repository](#option-2-as-part-of-the-themer-repository)

## Log a bug

If you've found a bug in themer's CLI or web interface, please feel free to create an issue that describes the problem. Your bug will most likely get fixed if you include the following information:

1. Clear list of steps taken to reproduce the issue
2. The error or behavior that you saw
3. The behavior that you expected to see when the problem occurred
4. Any error logs or console output associated with the error, if applicable
5. Any screenshots of the problem, if applicable

## Request a theme template

If you use a tool that themer doesn't support yet, feel free to request it by creating a new issue for it. Your request is most likely to get implemented if you include the following items in your request:

1. A link to the documentation website of the tool or program you are requesting support for
2. A link to an example theme file for your tool or program
3. Any additional information about how the generated theme would be installed or used

## Provide a theme template implementation

### Option 1: as part of the themer repository

If there is a theme template that should be distributed as an officially supported package (under the `@themer` namespace on npm), it should be contributed directly to the themer repository rather than as a standalone package as in Option 2 below.

1. Clone the themer repository.
2. `cd cli`
3. `yarn` to install dependencies
4. Run `./scripts/generate-template-package.zsh <the name of the tool or program you are making a theme template for>`. This step is optional but will save you some time as it sets up the basic scaffolding for your package. (For wallpaper templates, use the `generate-wallpaper-package.zsh` script instead.)
5. Implement your theme's `render()` function in `/cli/packages/<your package>/lib/index.js`, following the documentation in the ["Create your own template" section of the README](https://github.com/mjswensen/themer#create-your-own-template).
6. Develop and test your package with the following command within the `/cli/packages` directory: `./themer/bin/themer.js -c ./colors-default -t ./<your package directory> -o <some output directory you can inspect, like /tmp/themer>`
7. Submit a pull request.
8. After merging, your package will be released to npm under the `@themer` namespace and then included in the web UI at [https://themer.dev](themer.dev).

### Option 2: as a third-party npm package

If you would like to implement a theme template for personal use, or would like to maintain the theme independent of themer's main repository, the easiest way is to author your own npm package that exports a `render()` function as documented on the ["Create your own template" section of the README](https://github.com/mjswensen/themer#create-your-own-template).

To develop and test your package using the themer CLI, the following command may be used (requires Node.js to be installed):

    npx -p themer -p @themer/colors-default themer -c @themer/colors-default -t <path to your local package directory> -o <path to your desired output directory>

Once your package is developed, you can publish it for free on the npm registry. I would recommend prefixing the name with `themer-` so that others can easily find it.

Once published, open a pull request to add your package to the [list of community-contributed theme templates](https://github.com/mjswensen/themer#community) (or simply reach out through an issue on GitHub or message to [@themerdev on Twitter](https://twitter.com/themerdev)).

## Provide a color set

### Option 1: for personal use

There are a few different ways to develop your own themes and share them with others.

#### Option 1.1: using themer.dev

The easiest way to create your personal theme is to configure it using the web UI at [themer.dev](https://themer.dev). After doing so, you can simply share your unique URL however you'd like. On supported browsers, there is a convenient "Copy URL" button at the bottom of the page that can be used for easy sharing, or you can simply copy the contents of your browser's address bar to share your theme.

You can also download your theme and a `colors.js` file that is compatible with themer's CLI will automatically be included. You can use this file on your local machine or publish it to npm if desired.

#### Option 1.2: using npm

You can also publish your personal themes to npm for others to use with themer's CLI. To do so, define your colors following the instructions under the ["Create your own color set" section of the README](https://github.com/mjswensen/themer#create-your-own-color-set). To test your color configuration file, you can use the following command:

    npx -p themer -p @themer/vscode themer -c <path to your colors file> -t @themer/vscode -o <path to your desired output directory>

(Note that you can use any template you wish in place of `@themer/vscode`.)

Once your color set package is ready, you can publish it on the npm registry. I would recommend prefixing the name with `themer-colors-` so that others can easily find it.

### Option 2: as part of the themer repository

If a color set should be distributed on npm under the `@themer` namespace and included in the official web UI at [themer.dev](https://themer.dev), it should be included in themer's main repository rather than distributed separately as in option 1 above.

1. Clone the themer repository.
2. `cd cli`
3. `yarn` to install dependencies
4. Run `./scripts/generate-color-package.zsh <the name of the color set>`. This step is optional but will save you some time as it sets up the basic scaffolding for your package.
5. Implement your color set's `colors` object in `/cli/packages/<your package>/lib/index.js`, following the documentation in the ["Create your own color set" section of the README](https://github.com/mjswensen/themer#create-your-own-color-set).
6. Develop and test your package with the following command within the `/cli/packages` directory: `./themer/bin/themer.js -c ./<your package directory> -t ./vscode -t ./wallpaper-block-wave -o <some output directory you can inspect, like /tmp/themer>`
7. Submit a pull request.
8. After merging, your package will be released to npm under the `@themer` namespace and then included in the web UI at [https://themer.dev](themer.dev).
