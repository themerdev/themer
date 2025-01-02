# Contributing

Thanks for contributing to themer! All contributions are welcome, and are expected to adhere to [the code of conduct](https://github.com/mjswensen/themer/blob/main/CODE_OF_CONDUCT.md). Below are some guidelines for the most effective ways you can help build themer.

- [Log a bug](#log-a-bug)
- [Request a theme template](#request-a-theme-template)
- [Provide a theme template implementation](#provide-a-theme-template-implementation)
- [Provide a color set](#provide-a-color-set)

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

1. Clone the themer repository.
2. `cd cli`
3. `npm install` to install dependencies
4. Create a new file in the `src/template/` directory.
5. Implement the template interface, following the documentation in the ["Create custom `Template`s" section of the README](https://github.com/mjswensen/themer#create-custom-templates).
6. Submit a pull request.

## Provide a color set

### Option 1: for personal use

There are a few different ways to develop your own themes and share them with others.

#### Option 1.1: using themer.dev

The easiest way to create your personal theme is to configure it using the web UI at [themer.dev](https://themer.dev). After doing so, you can simply share your unique URL however you'd like. On supported browsers, there is a convenient "Copy URL" button at the bottom of the page that can be used for easy sharing, or you can simply copy the contents of your browser's address bar to share your theme.

You can also download your theme and a `colors.js` file that is compatible with themer's CLI will automatically be included.

#### Option 1.2: using the CLI or API

Define your colors following the instructions under the ["Create custom `ColorSet`s" section of the README](https://github.com/mjswensen/themer#create-custom-colorsets). To test your color configuration file, you can use the following command:

```sh
npx themer -c <path to your colors file> -t vs-code -o <path to your desired output directory>
```

(Note that you can use any template you wish in place of `vs-code`.)

### Option 2: as an official built-in color set

If a color set should be distributed with `themer` in the official web UI at [themer.dev](https://themer.dev), it should be included in themer's main repository rather than distributed separately as in option 1 above.

1. Clone the themer repository.
2. `cd cli`
3. `npm install` to install dependencies
4. Create a new file in the `src/color-set/` directory.
5. Implement your color set interface, following the documentation in the ["Create custom `ColorSet`s" section of the README](https://github.com/mjswensen/themer#create-custom-colorsets).
6. Submit a pull request.
