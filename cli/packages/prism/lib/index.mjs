export const render = (colors) =>
  Object.entries(colors).map(([name, colorSet]) =>
    Promise.resolve({
      name: `themer-prism-${name}.css`,
      contents: Buffer.from(`
        code[class*="language-"],
        pre[class*="language-"] {
          color: ${colorSet.shade7};
          background: ${colorSet.shade0};
          text-shadow: none;
          font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
          font-size: 1em;
          text-align: left;
          white-space: pre;
          word-spacing: normal;
          word-break: normal;
          word-wrap: normal;
          line-height: 1.5;
        
          -moz-tab-size: 2;
          -o-tab-size: 2;
          tab-size: 2;
        
          -webkit-hyphens: none;
          -moz-hyphens: none;
          -ms-hyphens: none;
          hyphens: none;
        }
        
        pre[class*="language-"]::-moz-selection, pre[class*="language-"] ::-moz-selection,
        code[class*="language-"]::-moz-selection, code[class*="language-"] ::-moz-selection,
        pre[class*="language-"]::selection, pre[class*="language-"] ::selection,
        code[class*="language-"]::selection, code[class*="language-"] ::selection {
          text-shadow: none;
          background: ${colorSet.shade2};
        }
        
        @media print {
          code[class*="language-"],
          pre[class*="language-"] {
            text-shadow: none;
          }
        }
        
        /* Code blocks */
        pre[class*="language-"] {
          padding: 1em;
          margin: .5em 0;
          overflow: auto;
        }
        
        :not(pre) > code[class*="language-"],
        pre[class*="language-"] {
          background: ${colorSet.shade0};
        }
        
        /* Inline code */
        :not(pre) > code[class*="language-"] {
          padding: .1em;
          border-radius: .3em;
          white-space: normal;
        }
        
        .token.comment,
        .token.prolog,
        .token.doctype,
        .token.cdata {
          color: ${colorSet.shade3};
        }
        
        .token.punctuation {
          color: ${colorSet.accent4};
        }
        
        .namespace {
          opacity: .7;
        }
        
        .token.property,
        .token.tag,
        .token.boolean,
        .token.number,
        .token.constant {
          color: ${colorSet.accent2};
        }

        .token.symbol,
        .token.deleted {
          color: ${colorSet.accent0};
        }
        
        .token.selector,
        .token.attr-name,
        .token.string,
        .token.char,
        .token.builtin,
        .token.inserted {
          color: ${colorSet.accent3};
        }
        
        .token.operator,
        .token.entity,
        .token.url,
        .language-css .token.string,
        .style .token.string {
          color: ${colorSet.accent5};
        }
        
        .token.atrule,
        .token.attr-value,
        .token.keyword {
          color: ${colorSet.accent1};
        }
        
        .token.function,
        .token.class-name {
          color: ${colorSet.accent7};
        }
        
        .token.regex,
        .token.important,
        .token.variable {
          color: ${colorSet.accent6};
        }
        
        .token.important,
        .token.bold {
          font-weight: bold;
        }
        .token.italic {
          font-style: italic;
        }
        
        .token.entity {
          cursor: help;
        }
      `),
    }),
  );

export const renderInstructions = (paths) => `
In the HTML page where prism.js is being used, link to the generated stylesheet (${paths
  .map((p) => `\`${p}\``)
  .join(' or ')}).
`;
