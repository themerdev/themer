import type { Template } from './index.js';
import { colorSetToVariants } from '../color-set/index.js';
import { source } from 'common-tags';

const template: Template = {
  name: 'Prism',
  render: async function* (colors) {
    const variants = colorSetToVariants(colors);
    for (const { title, colors } of variants) {
      yield {
        path: `prism-${title.kebab}.css`,
        content: Buffer.from(
          source`
            code[class*="language-"],
            pre[class*="language-"] {
              color: ${colors.shade7};
              background: ${colors.shade0};
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
              background: ${colors.shade2};
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
              background: ${colors.shade0};
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
              color: ${colors.shade3};
            }
            
            .token.punctuation {
              color: ${colors.accent4};
            }
            
            .namespace {
              opacity: .7;
            }
            
            .token.property,
            .token.tag,
            .token.boolean,
            .token.number,
            .token.constant {
              color: ${colors.accent2};
            }
    
            .token.symbol,
            .token.deleted {
              color: ${colors.accent0};
            }
            
            .token.selector,
            .token.attr-name,
            .token.string,
            .token.char,
            .token.builtin,
            .token.inserted {
              color: ${colors.accent3};
            }
            
            .token.operator,
            .token.entity,
            .token.url,
            .language-css .token.string,
            .style .token.string {
              color: ${colors.accent5};
            }
            
            .token.atrule,
            .token.attr-value,
            .token.keyword {
              color: ${colors.accent1};
            }
            
            .token.function,
            .token.class-name {
              color: ${colors.accent7};
            }
            
            .token.regex,
            .token.important,
            .token.variable {
              color: ${colors.accent6};
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
          `,
          'utf8',
        ),
      };
    }
  },
  renderInstructions: (paths) => source`
    In the HTML page where prism.js is being used, link to the generated stylesheet (${paths
      .map((p) => `\`${p}\``)
      .join(' or ')}).
  `,
};

export default template;
