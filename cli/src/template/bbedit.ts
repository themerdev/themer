import Color from 'colorjs.io';
import { source } from 'common-tags';
import { colorSetToVariants } from '../color-set/index.js';
import type { Template } from './index.js';

const DESTINATION = '~/Library/Application Support/BBEdit/Color Schemes/';

const formatColor = (hex: string) => {
  return new Color(hex).toString({ format: 'rgba' });
};

const template: Template = {
  name: 'BBEdit',
  render: async function* (colorSet) {
    const variants = colorSetToVariants(colorSet);
    for (const variant of variants) {
      const shade0 = formatColor(variant.colors.shade0);
      const shade1 = formatColor(variant.colors.shade1);
      const shade2 = formatColor(variant.colors.shade2);
      const shade3 = formatColor(variant.colors.shade3);
      const shade4 = formatColor(variant.colors.shade4);
      const shade5 = formatColor(variant.colors.shade5);
      const shade7 = formatColor(variant.colors.shade7);
      const accent0 = formatColor(variant.colors.accent0);
      const accent1 = formatColor(variant.colors.accent1);
      const accent2 = formatColor(variant.colors.accent2);
      const accent3 = formatColor(variant.colors.accent3);
      const accent4 = formatColor(variant.colors.accent4);
      const accent5 = formatColor(variant.colors.accent5);
      const accent6 = formatColor(variant.colors.accent6);
      const accent7 = formatColor(variant.colors.accent7);
      const document = source`
        <?xml version="1.0" encoding="UTF-8"?>
        <!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
        <plist version="1.0">
          <dict>
            <key>BackgroundColor</key>
            <string>${shade0}</string>
            <key>DifferenceHighlightColor</key>
            <string>${accent2}</string>
            <key>InsertionPointLineHighlightColor</key>
            <string>${shade1}</string>
            <key>InvisibleOthersColor</key>
            <string>${accent7}</string>
            <key>InvisibleSpacesColor</key>
            <string>${shade2}</string>
            <key>PrimaryHighlightColor</key>
            <string>${shade1}</string>
            <key>SecondaryHighlightColor</key>
            <string>${shade2}</string>
            <key>SpellingColor</key>
            <string>${accent0}</string>
            <key>com.barebones.bblm.JavaScript.error</key>
            <string>${accent0}</string>
            <key>com.barebones.bblm.JavaScript.regexp</key>
            <string>${accent7}</string>
            <key>com.barebones.bblm.Pyth.decorator</key>
            <string>${accent4}</string>
            <key>com.barebones.bblm.Pyth.triple-string</key>
            <string>${accent3}</string>
            <key>com.barebones.bblm.TeX.math-string</key>
            <string>${accent3}</string>
            <key>com.barebones.bblm.TeX.param-content</key>
            <string>${accent5}</string>
            <key>com.barebones.bblm.TeX.verbatim</key>
            <string>${accent2}</string>
            <key>com.barebones.bblm.code</key>
            <string>${shade7}</string>
            <key>com.barebones.bblm.comment</key>
            <string>${shade2}</string>
            <key>com.barebones.bblm.css.color-spec</key>
            <string>${shade7}</string>
            <key>com.barebones.bblm.file-include</key>
            <string>${accent6}</string>
            <key>com.barebones.bblm.grep.charclass</key>
            <string>${accent5}</string>
            <key>com.barebones.bblm.grep.escape-sequence</key>
            <string>${accent7}</string>
            <key>com.barebones.bblm.grep.metachar</key>
            <string>${accent4}</string>
            <key>com.barebones.bblm.grep.metasequence</key>
            <string>${accent3}</string>
            <key>com.barebones.bblm.grep.posix-name</key>
            <string>${accent2}</string>
            <key>com.barebones.bblm.grep.repeat</key>
            <string>${accent2}</string>
            <key>com.barebones.bblm.grep.repeat-data</key>
            <string>${accent2}</string>
            <key>com.barebones.bblm.heredoc-string</key>
            <string>${shade7}</string>
            <key>com.barebones.bblm.html.anchor</key>
            <string>${accent5}</string>
            <key>com.barebones.bblm.html.attribute-name</key>
            <string>${accent5}</string>
            <key>com.barebones.bblm.html.attribute-value</key>
            <string>${accent3}</string>
            <key>com.barebones.bblm.html.image</key>
            <string>${accent6}</string>
            <key>com.barebones.bblm.indexed-symbol</key>
            <string>${accent2}</string>
            <key>com.barebones.bblm.keyword</key>
            <string>${accent0}</string>
            <key>com.barebones.bblm.markdown.Emph</key>
            <string>${accent1}</string>
            <key>com.barebones.bblm.markdown.HorizontalRule</key>
            <string>${shade4}</string>
            <key>com.barebones.bblm.markdown.ImageAltText</key>
            <string>${accent6}</string>
            <key>com.barebones.bblm.markdown.ImageId</key>
            <string>${shade5}</string>
            <key>com.barebones.bblm.markdown.InlineCode</key>
            <string>${accent0}</string>
            <key>com.barebones.bblm.markdown.InlineLinkText</key>
            <string>${accent5}</string>
            <key>com.barebones.bblm.markdown.Keyword</key>
            <string>${accent2}</string>
            <key>com.barebones.bblm.markdown.LinkDefId</key>
            <string>${accent5}</string>
            <key>com.barebones.bblm.markdown.LinkDefTitle</key>
            <string>${accent5}</string>
            <key>com.barebones.bblm.markdown.LinkDefUrl</key>
            <string>${accent5}</string>
            <key>com.barebones.bblm.markdown.ListItemMarker</key>
            <string>${accent5}</string>
            <key>com.barebones.bblm.markdown.Pre</key>
            <string>${accent0}</string>
            <key>com.barebones.bblm.markdown.QuoteMarker</key>
            <string>${accent7}</string>
            <key>com.barebones.bblm.markdown.QuotedContent</key>
            <string>${shade7}</string>
            <key>com.barebones.bblm.number</key>
            <string>${accent5}</string>
            <key>com.barebones.bblm.perl.generic-string</key>
            <string>${accent3}</string>
            <key>com.barebones.bblm.perl.outer-pod</key>
            <string>${accent7}</string>
            <key>com.barebones.bblm.perl.pre-generic-string</key>
            <string>${accent3}</string>
            <key>com.barebones.bblm.predefined-symbol</key>
            <string>${accent2}</string>
            <key>com.barebones.bblm.preprocessor</key>
            <string>${accent2}</string>
            <key>com.barebones.bblm.ruby.regexp</key>
            <string>${accent7}</string>
            <key>com.barebones.bblm.ruby.symbol</key>
            <string>${accent2}</string>
            <key>com.barebones.bblm.sgml-cdata</key>
            <string>${shade7}</string>
            <key>com.barebones.bblm.sgml-decl</key>
            <string>${accent7}</string>
            <key>com.barebones.bblm.sgml-entity</key>
            <string>${accent5}</string>
            <key>com.barebones.bblm.sgml-tag</key>
            <string>${accent5}</string>
            <key>com.barebones.bblm.string</key>
            <string>${accent3}</string>
            <key>com.barebones.bblm.variable</key>
            <string>${accent7}</string>
            <key>com.barebones.bblm.verilog-hdl.comment-1</key>
            <string>${shade2}</string>
            <key>com.barebones.bblm.verilog-hdl.comment-2</key>
            <string>${shade3}</string>
            <key>com.barebones.bblm.verilog-hdl.comment-3</key>
            <string>${shade4}</string>
            <key>com.barebones.bblm.verilog-hdl.input-type</key>
            <string>${accent4}</string>
            <key>com.barebones.bblm.verilog-hdl.output-type</key>
            <string>${accent6}</string>
            <key>com.barebones.bblm.verilog-hdl.register-type</key>
            <string>${accent2}</string>
            <key>com.barebones.bblm.verilog-hdl.wire-type</key>
            <string>${accent1}</string>
            <key>com.barebones.bblm.vhdl.comment-1</key>
            <string>${shade2}</string>
            <key>com.barebones.bblm.vhdl.comment-2</key>
            <string>${shade3}</string>
            <key>com.barebones.bblm.vhdl.comment-3</key>
            <string>${shade4}</string>
            <key>com.barebones.bblm.xml-empty</key>
            <string>${accent0}</string>
            <key>com.barebones.bblm.xml-pi</key>
            <string>${accent0}</string>
          </dict>
        </plist>
      `;
      yield {
        path: `${variant.title.human}.bbColorScheme`,
        content: document,
      };
    }
  },
  renderInstructions: (paths) => source`
    Copy (or symlink) the generated ${
      paths.length === 1 ? 'file' : 'files'
    } to \`${DESTINATION}\`:
    
    \`\`\`
    ${paths.map((p) => `cp '${p}' '${DESTINATION}'`)}
    \`\`\`
  `,
};

export default template;
