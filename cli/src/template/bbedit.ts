import Color from 'color';
import { source } from 'common-tags';
import xml from 'xml';
import { colorSetToVariants } from '../color-set/index.js';
import type { Template } from './index.js';

const DESTINATION = '~/Library/Application Support/BBEdit/Color Schemes/';

const formatColor = (hex: string) => {
  const [r, g, b] = Color(hex)
    .rgb()
    .array()
    .map((c) => c / 255);
  return `rgba(${r}, ${g}, ${b}, 1.00)`;
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
      const document = xml(
        {
          plist: [
            { _attr: { version: '1.0' } },
            {
              dict: [
                { key: 'BackgroundColor' },
                { string: shade0 },
                { key: 'DifferenceHighlightColor' },
                { string: accent2 },
                { key: 'InsertionPointLineHighlightColor' },
                { string: shade1 },
                { key: 'InvisibleOthersColor' },
                { string: accent7 },
                { key: 'InvisibleSpacesColor' },
                { string: shade2 },
                { key: 'PrimaryHighlightColor' },
                { string: shade1 },
                { key: 'SecondaryHighlightColor' },
                { string: shade2 },
                { key: 'SpellingColor' },
                { string: accent0 },
                { key: 'com.barebones.bblm.JavaScript.error' },
                { string: accent0 },
                { key: 'com.barebones.bblm.JavaScript.regexp' },
                { string: accent7 },
                { key: 'com.barebones.bblm.Pyth.decorator' },
                { string: accent4 },
                { key: 'com.barebones.bblm.Pyth.triple-string' },
                { string: accent3 },
                { key: 'com.barebones.bblm.TeX.math-string' },
                { string: accent3 },
                { key: 'com.barebones.bblm.TeX.param-content' },
                { string: accent5 },
                { key: 'com.barebones.bblm.TeX.verbatim' },
                { string: accent2 },
                { key: 'com.barebones.bblm.code' },
                { string: shade7 },
                { key: 'com.barebones.bblm.comment' },
                { string: shade2 },
                { key: 'com.barebones.bblm.css.color-spec' },
                { string: shade7 },
                { key: 'com.barebones.bblm.file-include' },
                { string: accent6 },
                { key: 'com.barebones.bblm.grep.charclass' },
                { string: accent5 },
                { key: 'com.barebones.bblm.grep.escape-sequence' },
                { string: accent7 },
                { key: 'com.barebones.bblm.grep.metachar' },
                { string: accent4 },
                { key: 'com.barebones.bblm.grep.metasequence' },
                { string: accent3 },
                { key: 'com.barebones.bblm.grep.posix-name' },
                { string: accent2 },
                { key: 'com.barebones.bblm.grep.repeat' },
                { string: accent2 },
                { key: 'com.barebones.bblm.grep.repeat-data' },
                { string: accent2 },
                { key: 'com.barebones.bblm.heredoc-string' },
                { string: shade7 },
                { key: 'com.barebones.bblm.html.anchor' },
                { string: accent5 },
                { key: 'com.barebones.bblm.html.attribute-name' },
                { string: accent5 },
                { key: 'com.barebones.bblm.html.attribute-value' },
                { string: accent3 },
                { key: 'com.barebones.bblm.html.image' },
                { string: accent6 },
                { key: 'com.barebones.bblm.indexed-symbol' },
                { string: accent2 },
                { key: 'com.barebones.bblm.keyword' },
                { string: accent0 },
                { key: 'com.barebones.bblm.markdown.Emph' },
                { string: accent1 },
                { key: 'com.barebones.bblm.markdown.HorizontalRule' },
                { string: shade4 },
                { key: 'com.barebones.bblm.markdown.ImageAltText' },
                { string: accent6 },
                { key: 'com.barebones.bblm.markdown.ImageId' },
                { string: shade5 },
                { key: 'com.barebones.bblm.markdown.InlineCode' },
                { string: accent0 },
                { key: 'com.barebones.bblm.markdown.InlineLinkText' },
                { string: accent5 },
                { key: 'com.barebones.bblm.markdown.Keyword' },
                { string: accent2 },
                { key: 'com.barebones.bblm.markdown.LinkDefId' },
                { string: accent5 },
                { key: 'com.barebones.bblm.markdown.LinkDefTitle' },
                { string: accent5 },
                { key: 'com.barebones.bblm.markdown.LinkDefUrl' },
                { string: accent5 },
                { key: 'com.barebones.bblm.markdown.ListItemMarker' },
                { string: accent5 },
                { key: 'com.barebones.bblm.markdown.Pre' },
                { string: accent0 },
                { key: 'com.barebones.bblm.markdown.QuoteMarker' },
                { string: accent7 },
                { key: 'com.barebones.bblm.markdown.QuotedContent' },
                { string: shade7 },
                { key: 'com.barebones.bblm.number' },
                { string: accent5 },
                { key: 'com.barebones.bblm.perl.generic-string' },
                { string: accent3 },
                { key: 'com.barebones.bblm.perl.outer-pod' },
                { string: accent7 },
                { key: 'com.barebones.bblm.perl.pre-generic-string' },
                { string: accent3 },
                { key: 'com.barebones.bblm.predefined-symbol' },
                { string: accent2 },
                { key: 'com.barebones.bblm.preprocessor' },
                { string: accent2 },
                { key: 'com.barebones.bblm.ruby.regexp' },
                { string: accent7 },
                { key: 'com.barebones.bblm.ruby.symbol' },
                { string: accent2 },
                { key: 'com.barebones.bblm.sgml-cdata' },
                { string: shade7 },
                { key: 'com.barebones.bblm.sgml-decl' },
                { string: accent7 },
                { key: 'com.barebones.bblm.sgml-entity' },
                { string: accent5 },
                { key: 'com.barebones.bblm.sgml-tag' },
                { string: accent5 },
                { key: 'com.barebones.bblm.string' },
                { string: accent3 },
                { key: 'com.barebones.bblm.variable' },
                { string: accent7 },
                { key: 'com.barebones.bblm.verilog-hdl.comment-1' },
                { string: shade2 },
                { key: 'com.barebones.bblm.verilog-hdl.comment-2' },
                { string: shade3 },
                { key: 'com.barebones.bblm.verilog-hdl.comment-3' },
                { string: shade4 },
                { key: 'com.barebones.bblm.verilog-hdl.input-type' },
                { string: accent4 },
                { key: 'com.barebones.bblm.verilog-hdl.output-type' },
                { string: accent6 },
                { key: 'com.barebones.bblm.verilog-hdl.register-type' },
                { string: accent2 },
                { key: 'com.barebones.bblm.verilog-hdl.wire-type' },
                { string: accent1 },
                { key: 'com.barebones.bblm.vhdl.comment-1' },
                { string: shade2 },
                { key: 'com.barebones.bblm.vhdl.comment-2' },
                { string: shade3 },
                { key: 'com.barebones.bblm.vhdl.comment-3' },
                { string: shade4 },
                { key: 'com.barebones.bblm.xml-empty' },
                { string: accent0 },
                { key: 'com.barebones.bblm.xml-pi' },
                { string: accent0 },
              ],
            },
          ],
        },
        { indent: '  ' },
      );
      yield {
        path: `${variant.title.human}.bbColorScheme`,
        content: Buffer.from(
          source`
            <?xml version="1.0" encoding="UTF-8"?>
            <!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
            ${document}
          `,
          'utf8',
        ),
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
