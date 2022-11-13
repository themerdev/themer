import Color from 'color';

const format = (hex) =>
  '0x00' +
  Color(hex)
    .rgb()
    .array()
    .reverse()
    .map((n) => Math.round(n))
    .map((n) => n.toString('16').toUpperCase())
    .join('');

const mix = (aHex, bHex, mix = 0.5) =>
  format(Color(aHex).mix(Color(bHex), mix));

const renderTheme = (
  {
    shade0,
    shade1,
    shade2,
    shade3,
    shade4,
    shade5,
    shade6,
    shade7,
    accent0,
    accent1,
    accent2,
    accent3,
    accent4,
    accent5,
    accent6,
    accent7,
  },
  isDark,
) => `
<UserSettings>
  <ApplicationIdentity version="16.0" />
  <ToolsOptions>
    <ToolsOptionsCategory name="Environment" RegisteredName="Environment" />
  </ToolsOptions>
  <Category name="Environment_Group" RegisteredName="Environment_Group">
    <Category
      name="Environment_FontsAndColors"
      Category="{1EDA5DD4-927A-43a7-810E-7FD247D0DA1D}"
      Package="{DA9FB551-C724-11d0-AE1F-00A0C90FFFC3}"
      RegisteredName="Environment_FontsAndColors"
      PackageName="Visual Studio Environment Package"
    >
      <PropertyValue name="Version">2</PropertyValue>
      <FontsAndColors Version="2.0">
        <Theme Id="{${
          isDark
            ? '1DED0138-47CE-435E-84EF-9EC1F439B749'
            : 'DE3DBBCD-F642-433C-8353-8F1DF4370ABA'
        }}" />
        <Categories>
          <Category GUID="{FA937F7B-C0D2-46B8-9F10-A7A92642B384}" FontIsDefault="Yes">
            <Items>
              <Item
                Name="Artboard Background"
                Foreground="0x02000000"
                Background="0x02000000"
              />
            </Items>
          </Category>
          <Category GUID="{FF349800-EA43-46C1-8C98-878E78F46501}" FontIsDefault="Yes">
            <Items>
              <Item
                Name="Logpoint (Error)"
                Foreground="${format(shade0)}"
                Background="${format(accent0)}"
                BoldFont="No"
              />
              <Item
                Name="Tracepoint (Warning)"
                Foreground="${format(accent3)}"
                Background="0x02000000"
                BoldFont="No"
              />
              <Item
                Name="Breakpoint - Mapped (Enabled)"
                Foreground="${format(shade7)}"
                Background="${mix(accent0, shade0)}"
                BoldFont="No"
              />
              <Item
                Name="Tracepoint - Advanced (Enabled)"
                Foreground="${format(accent2)}"
                Background="0x02000000"
                BoldFont="No"
              />
              <Item
                Name="Current Statement (historical mode)"
                Foreground="${format(shade0)}"
                Background="${format(accent3)}"
                BoldFont="No"
              />
              <Item
                Name="Logpoint (Disabled)"
                Foreground="${format(shade1)}"
                Background="${format(accent6)}"
                BoldFont="No"
              />
              <Item
                Name="Call Return (historical mode)"
                Foreground="${format(shade0)}"
                Background="${format(accent1)}"
                BoldFont="No"
              />
              <Item
                Name="Snappoint (Dashed)"
                Foreground="${format(shade7)}"
                Background="${mix(accent6, shade0, 0.75)}"
                BoldFont="No"
              />
              <Item
                Name="Call Return (new context)"
                Foreground="${format(shade0)}"
                Background="${format(accent3)}"
                BoldFont="No"
              />
              <Item
                Name="Call Return"
                Foreground="${format(shade0)}"
                Background="${format(accent4)}"
                BoldFont="No"
              />
              <Item
                Name="Snappoint - Advanced (Disabled)"
                Foreground="${format(shade6)}"
                Background="${mix(accent6, shade0, 0.75)}"
                BoldFont="No"
              />
              <Item
                Name="Snappoint (Warning)"
                Foreground="${format(shade7)}"
                Background="${mix(accent6, shade0, 0.75)}"
                BoldFont="No"
              />
              <Item
                Name="Snappoint (Checked)"
                Foreground="${format(shade7)}"
                Background="${mix(accent6, shade0, 0.75)}"
                BoldFont="No"
              />
              <Item
                Name="Breakpoint (Enabled)"
                Foreground="${format(shade7)}"
                Background="${mix(accent0, shade0)}"
                BoldFont="No"
              />
              <Item
                Name="Executing Threads IPs"
                Foreground="${format(shade5)}"
                Background="0x01000018"
                BoldFont="No"
              />
              <Item
                Name="SQL DML Marker"
                Foreground="${format(accent5)}"
                Background="0x01000018"
                BoldFont="No"
              />
              <Item
                Name="Coverage Partially Touched Area"
                Foreground="${format(shade0)}"
                Background="${format(accent2)}"
                BoldFont="No"
              />
              <Item
                Name="Breakpoint - Selected"
                Foreground="${format(shade3)}"
                Background="0x02000000"
                BoldFont="No"
              />
              <Item
                Name="Snappoint - Advanced (Warning)"
                Foreground="${format(shade7)}"
                Background="${mix(accent6, shade0, 0.75)}"
                BoldFont="No"
              />
              <Item
                Name="Coverage Not Touched Area"
                Foreground="${format(shade0)}"
                Background="${format(accent1)}"
                BoldFont="No"
              />
              <Item
                Name="Coverage Touched Area"
                Foreground="${format(shade0)}"
                Background="${format(accent3)}"
                BoldFont="No"
              />
              <Item
                Name="Snappoint - Advanced (Enabled)"
                Foreground="${format(shade7)}"
                Background="${mix(accent6, shade0, 0.75)}"
                BoldFont="No"
              />
              <Item
                Name="Breakpoint (Warning)"
                Foreground="${format(shade7)}"
                Background="${mix(accent0, shade0)}"
                BoldFont="No"
              />
              <Item
                Name="Tracepoint - Advanced (Error)"
                Foreground="${format(accent1)}"
                Background="0x02000000"
                BoldFont="No"
              />
              <Item
                Name="Breakpoint (Error)"
                Foreground="${format(accent2)}"
                Background="${mix(accent0, shade0)}"
                BoldFont="No"
              />
              <Item
                Name="Snappoint - Advanced (Error)"
                Foreground="${format(accent2)}"
                Background="${mix(accent6, shade0, 0.75)}"
                BoldFont="No"
              />
              <Item
                Name="Logpoint (Enabled)"
                Foreground="${format(shade0)}"
                Background="${format(accent6)}"
                BoldFont="No"
              />
              <Item
                Name="Logpoint (Alert)"
                Foreground="${format(shade0)}"
                Background="${format(accent6)}"
                BoldFont="No"
              />
              <Item
                Name="Breakpoint (Disabled)"
                Foreground="${format(shade2)}"
                Background="0x02000000"
                BoldFont="No"
              />
              <Item
                Name="Snappoint (Enabled)"
                Foreground="${format(shade7)}"
                Background="${mix(accent6, shade0, 0.75)}"
                BoldFont="No"
              />
              <Item
                Name="Current Statement (new context)"
                Foreground="${format(accent1)}"
                Background="0x02000000"
                BoldFont="No"
              />
              <Item
                Name="Logpoint (Warning)"
                Foreground="${format(shade0)}"
                Background="${format(accent1)}"
                BoldFont="No"
              />
              <Item
                Name="Logpoint - Advanced (Alert)"
                Foreground="${format(shade0)}"
                Background="${format(accent6)}"
                BoldFont="No"
              />
              <Item
                Name="Executing Thread IP"
                Foreground="${format(shade0)}"
                Background="${format(accent1)}"
                BoldFont="No"
              />
              <Item
                Name="Current Statement"
                Foreground="${format(shade0)}"
                Background="${format(accent2)}"
                BoldFont="No"
              />
              <Item
                Name="Logpoint (Dashed)"
                Foreground="${format(shade0)}"
                Background="${format(accent6)}"
                BoldFont="No"
              />
              <Item
                Name="Breakpoint - Advanced (Error)"
                Foreground="${format(accent2)}"
                Background="${mix(accent0, shade0)}"
                BoldFont="No"
              />
              <Item
                Name="Breakpoint - Mapped (Error)"
                Foreground="${format(accent2)}"
                Background="${mix(accent0, shade0)}"
                BoldFont="No"
              />
              <Item
                Name="Breakpoint - Mapped (Disabled)"
                Foreground="${format(accent0)}"
                Background="0x01000018"
                BoldFont="No"
              />
              <Item
                Name="Logpoint - Advanced (Warning)"
                Foreground="${format(shade0)}"
                Background="${format(accent1)}"
                BoldFont="No"
              />
              <Item
                Name="Breakpoint - Mapped (Warning)"
                Foreground="${format(shade7)}"
                Background="${mix(accent0, shade0)}"
                BoldFont="No"
              />
              <Item
                Name="Logpoint - Advanced (Error)"
                Foreground="${format(shade0)}"
                Background="${format(accent0)}"
                BoldFont="No"
              />
              <Item
                Name="Snappoint - Advanced (Checked)"
                Foreground="${format(shade7)}"
                Background="${mix(accent6, shade0, 0.75)}"
                BoldFont="No"
              />
              <Item
                Name="Snappoint (Error)"
                Foreground="${format(accent2)}"
                Background="${mix(accent6, shade0, 0.75)}"
                BoldFont="No"
              />
              <Item
                Name="Breakpoint - Advanced (Warning)"
                Foreground="${format(shade7)}"
                Background="${mix(accent0, shade0)}"
                BoldFont="No"
              />
              <Item
                Name="Tracepoint (Enabled)"
                Foreground="${format(accent2)}"
                Background="0x02000000"
                BoldFont="No"
              />
              <Item
                Name="Tracepoint - Mapped (Disabled)"
                Foreground="${format(accent0)}"
                Background="0x02000000"
                BoldFont="No"
              />
              <Item
                Name="Tracepoint - Advanced (Warning)"
                Foreground="${format(accent3)}"
                Background="0x02000000"
                BoldFont="No"
              />
              <Item
                Name="Tracepoint - Advanced (Disabled)"
                Foreground="${format(accent0)}"
                Background="0x02000000"
                BoldFont="No"
              />
              <Item
                Name="Tracepoint - Mapped (Warning)"
                Foreground="${format(accent3)}"
                Background="0x02000000"
                BoldFont="No"
              />
              <Item
                Name="Tracepoint (Error)"
                Foreground="${format(accent0)}"
                Background="0x02000000"
                BoldFont="No"
              />
              <Item
                Name="Breakpoint - Advanced (Enabled)"
                Foreground="${format(shade7)}"
                Background="${mix(accent0, shade0)}"
                BoldFont="No"
              />
              <Item
                Name="Breakpoint - Advanced (Disabled)"
                Foreground="${format(accent0)}"
                Background="0x01000018"
                BoldFont="No"
              />
              <Item
                Name="Tracepoint - Mapped (Error)"
                Foreground="${format(accent1)}"
                Background="0x02000000"
                BoldFont="No"
              />
              <Item
                Name="Snappoint - Advanced (Alert)"
                Foreground="${format(shade7)}"
                Background="${mix(accent6, shade0, 0.75)}"
                BoldFont="No"
              />
              <Item
                Name="Logpoint - Advanced (Disabled)"
                Foreground="${format(shade1)}"
                Background="${format(accent6)}"
                BoldFont="No"
              />
              <Item
                Name="Tracepoint (Disabled)"
                Foreground="${format(accent7)}"
                Background="0x02000000"
                BoldFont="No"
              />
              <Item
                Name="Snappoint (Alert)"
                Foreground="${format(shade7)}"
                Background="${mix(accent6, shade0, 0.75)}"
                BoldFont="No"
              />
              <Item
                Name="Snappoint (Disabled)"
                Foreground="${format(shade6)}"
                Background="${mix(accent6, shade0, 0.75)}"
                BoldFont="No"
              />
              <Item
                Name="Tracepoint - Mapped (Enabled)"
                Foreground="${format(accent2)}"
                Background="0x02000000"
                BoldFont="No"
              />
              <Item
                Name="Logpoint - Advanced (Enabled)"
                Foreground="${format(shade0)}"
                Background="${format(accent6)}"
                BoldFont="No"
              />
              <Item
                Name="hinted suggestion"
                Foreground="${format(shade3)}"
                Background="0x02000000"
                BoldFont="No"
              />
              <Item
                Name="Refactoring Dependent Field"
                Foreground="${format(shade5)}"
                Background="0x02000000"
                BoldFont="No"
              />
              <Item
                Name="Refactoring Current Field"
                Foreground="0x01000000"
                Background="${mix(accent4, shade0)}"
                BoldFont="No"
              />
              <Item
                Name="Code Snippet Dependent Field"
                Foreground="${format(accent7)}"
                Background="0x02000000"
                BoldFont="No"
              />
              <Item
                Name="Refactoring Background"
                Background="${format(shade0)}"
                BoldFont="No"
              />
              <Item
                Name="Warning Lines Path"
                Foreground="${format(shade0)}"
                Background="${format(accent1)}"
                BoldFont="No"
              />
              <Item
                Name="Definition Window Current Match"
                Foreground="${format(accent2)}"
                Background="0x02000000"
                BoldFont="No"
              />
              <Item
                Name="Definition Window Background"
                Background="${format(shade0)}"
                BoldFont="No"
              />
              <Item
                Name="Brace Matching (Rectangle)"
                Background="${mix(accent5, shade0)}"
                BoldFont="No"
              />
              <Item
                Name="Bookmark (Disabled)"
                Background="${mix(accent7, shade0)}"
                BoldFont="No"
              />
              <Item
                Name="Track Changes after save"
                Background="${format(accent3)}"
                BoldFont="No"
              />
              <Item
                Name="Track Changes before save"
                Background="${format(accent2)}"
                BoldFont="No"
              />
              <Item
                Name="Smart Tag"
                Foreground="${format(accent2)}"
                Background="0x02000000"
                BoldFont="No"
              />
              <Item
                Name="Code Snippet Field (Selected)"
                Foreground="0x01000000"
                Background="${format(shade3)}"
                BoldFont="No"
              />
              <Item
                Name="Code Snippet Field"
                Background="${format(shade2)}"
                BoldFont="No"
              />
              <Item
                Name="compiler warning"
                Foreground="${format(accent1)}"
                Background="0x02000000"
                BoldFont="No"
              />
              <Item
                Name="Current List Location"
                Foreground="${format(shade7)}"
                Background="${format(accent5)}"
                BoldFont="No"
              />
              <Item
                Name="Collapsible Text (Expanded)"
                Foreground="${format(shade5)}"
                Background="0x01000003"
                BoldFont="No"
              />
              <Item
                Name="Collapsible Text (Collapsed)"
                Foreground="${format(shade4)}"
                Background="0x01000003"
                BoldFont="No"
              />
              <Item
                Name="other error"
                Foreground="${format(accent7)}"
                Background="0x02000000"
                BoldFont="No"
              />
              <Item
                Name="syntax error"
                Foreground="${format(accent0)}"
                Background="0x02000000"
                BoldFont="No"
              />
              <Item
                Name="compiler error"
                Foreground="${format(accent0)}"
                Background="0x02000000"
                BoldFont="No"
              />
              <Item
                Name="Bookmark"
                Background="${format(accent7)}"
                BoldFont="No"
              />
              <Item
                Name="Task List Shortcut"
                Foreground="${format(shade0)}"
                Background="${format(accent5)}"
                BoldFont="No"
              />
              <Item
                Name="Read-Only Region"
                Background="${format(shade2)}"
                BoldFont="No"
              />
            </Items>
          </Category>
          <Category GUID="{75A05685-00A8-4DED-BAE5-E7A50BFA929A}" FontIsDefault="Yes">
            <Items>
              <Item
                Name="MarkerFormatDefinition/ScopeHighlight"
                Foreground="${mix(accent5, shade7)}"
                Background="${mix(accent5, shade0)}"
                BoldFont="No"
              />
              <Item
                Name="MarkerFormatDefinition/FindHighlight"
                Foreground="0x00000000"
                Background="${mix(accent2, shade0)}"
                BoldFont="No"
              />
              <Item
                Name="MarkerFormatDefinition/VerticalHighlight"
                Foreground="${format(shade7)}"
                Background="${format(shade0)}"
                BoldFont="No"
              />
              <Item
                Name="PeekFormatDefinition/PeekMark"
                Foreground="0x01000000"
                Background="${format(accent5)}"
                BoldFont="No"
              />
              <Item
                Name="PeekFormatDefinition/EOIMark"
                Foreground="0x01000000"
                Background="${format(accent5)}"
                BoldFont="No"
              />
              <Item
                Name="MarkerFormatDefinition/BreakpointInScrollBar"
                Foreground="0x01000000"
                Background="${format(accent0)}"
                BoldFont="No"
              />
              <Item
                Name="MarkerFormatDefinition/BookmarkInScrollBar"
                Foreground="0x01000000"
                Background="${format(shade4)}"
                BoldFont="No"
              />
              <Item
                Name="XML Doc Tag"
                Foreground="${format(accent3)}"
                Background="${format(shade0)}"
                BoldFont="No"
              />
              <Item
                Name="XML Doc Comment"
                Foreground="${format(shade3)}"
                Background="${format(shade0)}"
                BoldFont="No"
              />
              <Item
                Name="MarkerFormatDefinition/HighlightedReference"
                Foreground="${mix(accent5, shade7)}"
                Background="${mix(accent5, shade0)}"
                BoldFont="No"
              />
              <Item
                Name="deltadiff.overview.color"
                Foreground="${format(shade2)}"
                Background="${mix(accent4, shade0, 0.75)}"
                BoldFont="No"
              />
              <Item
                Name="deltadiff.add.word"
                Foreground="${format(accent3)}"
                Background="${mix(accent3, shade0, 0.65)}"
                BoldFont="No"
              />
              <Item
                Name="deltadiff.remove.word"
                Foreground="${format(accent0)}"
                Background="${mix(accent0, shade0, 0.65)}"
                BoldFont="No"
              />
              <Item
                Name="deltadiff.add.line"
                Foreground="0x01000000"
                Background="${mix(accent3, shade0, 0.75)}"
                BoldFont="No"
              />
              <Item
                Name="deltadiff.remove.line"
                Foreground="0x01000000"
                Background="${mix(accent0, shade0, 0.75)}"
                BoldFont="No"
              />
              <Item
                Name="Inactive Selected Text"
                Foreground="0x02000000"
                Background="${format(shade2)}"
                BoldFont="No"
              />
              <Item
                Name="Selected Text"
                Foreground="0x02000000"
                Background="${format(accent5)}"
                BoldFont="No"
              />
              <Item
                Name="Caret (Secondary)"
                Foreground="${format(accent7)}"
                Background="0x01000001"
                BoldFont="No"
              />
              <Item
                Name="Caret (Primary)"
                Foreground="${format(accent6)}"
                Background="0x01000001"
                BoldFont="No"
              />
              <Item
                Name="urlformat"
                Foreground="${format(accent5)}"
                Background="${format(shade0)}"
                BoldFont="No"
              />
              <Item
                Name="NavigableSymbolFormat"
                Foreground="${format(accent5)}"
                Background="${format(shade0)}"
                BoldFont="No"
              />
              <Item
                Name="CurrentLineActiveFormat"
                Foreground="${format(shade1)}"
                Background="${format(shade7)}"
                BoldFont="No"
              />
              <Item
                Name="Selected Text in High Contrast"
                Foreground="${format(shade7)}"
                Background="${format(shade0)}"
                BoldFont="No"
              />
              <Item
                Name="outlining.square"
                Foreground="${format(shade5)}"
                Background="${format(shade0)}"
                BoldFont="No"
              />
              <Item
                Name="outlining.verticalrule"
                Foreground="${format(shade4)}"
                Background="0x01000001"
                BoldFont="No"
              />
              <Item
                Name="outlining.collapsehintadornment"
                Foreground="${format(shade6)}"
                Background="${format(shade0)}"
                BoldFont="No"
              />
              <Item
                Name="Visible Whitespace"
                Foreground="${format(shade1)}"
                Background="0x01000001"
                BoldFont="No"
              />
              <Item
                Name="Track reverted changes"
                Foreground="0x02000000"
                Background="${format(accent5)}"
                BoldFont="No"
              />
              <Item
                Name="Track Changes after save"
                Foreground="0x02000000"
                Background="${format(accent3)}"
                BoldFont="No"
              />
              <Item
                Name="Track Changes before save"
                Foreground="0x02000000"
                Background="${format(accent2)}"
                BoldFont="No"
              />
              <Item
                Name="Line Number"
                Foreground="${format(shade2)}"
                Background="${format(shade0)}"
                BoldFont="No"
              />
              <Item
                Name="BraceCompletionClosingBrace"
                Foreground="0x01000000"
                Background="${format(accent6)}"
                BoldFont="No"
              />
              <Item
                Name="OverviewMarginCaret"
                Foreground="${format(shade5)}"
                Background="0x01000001"
                BoldFont="No"
              />
              <Item
                Name="OverviewMarginVisible"
                Foreground="${format(shade4)}"
                Background="${format(shade0)}"
                BoldFont="No"
              />
              <Item
                Name="OverviewMarginBackground"
                Foreground="0x01000000"
                Background="${format(shade1)}"
                BoldFont="No"
              />
              <Item
                Name="OverviewMarginCollapsedRegion"
                Foreground="0x01000000"
                Background="${format(shade5)}"
                BoldFont="No"
              />
              <Item
                Name="OverviewMarginScrollButtonsMouseDown"
                Foreground="${mix(accent5, shade0, 0.25)}"
                Background="${format(shade1)}"
                BoldFont="No"
              />
              <Item
                Name="OverviewMarginScrollButtonsMouseOver"
                Foreground="${format(accent5)}"
                Background="${format(shade1)}"
                BoldFont="No"
              />
              <Item
                Name="OverviewMarginScrollButtons"
                Foreground="${format(shade5)}"
                Background="${format(shade1)}"
                BoldFont="No"
              />
              <Item
                Name="hinted suggestion"
                Foreground="${format(shade3)}"
                Background="0x02000000"
                BoldFont="No"
              />
              <Item
                Name="compiler warning"
                Foreground="${format(accent1)}"
                Background="0x02000000"
                BoldFont="No"
              />
              <Item
                Name="other error"
                Foreground="${format(accent7)}"
                Background="0x02000000"
                BoldFont="No"
              />
              <Item
                Name="compiler error"
                Foreground="${format(accent0)}"
                Background="0x02000000"
                BoldFont="No"
              />
              <Item
                Name="syntax error"
                Foreground="${format(accent0)}"
                Background="0x02000000"
                BoldFont="No"
              />
              <Item
                Name="Block Structure Adornments"
                Foreground="0x01000000"
                Background="${format(shade3)}"
                BoldFont="No"
              />
              <Item
                Name="SymbolReferenceClassificationFormat"
                Foreground="${format(accent4)}"
                Background="${format(shade0)}"
                BoldFont="Yes"
              />
              <Item
                Name="SymbolDefinitionClassificationFormat"
                Foreground="${format(accent5)}"
                Background="${format(shade0)}"
                BoldFont="No"
              />
              <Item
                Name="Number"
                Foreground="${format(accent0)}"
                Background="${format(shade0)}"
                BoldFont="No"
              />
              <Item
                Name="Type"
                Foreground="${format(accent4)}"
                Background="${format(shade0)}"
                BoldFont="No"
              />
              <Item
                Name="String"
                Foreground="${format(accent3)}"
                Background="${format(shade0)}"
                BoldFont="No"
              />
              <Item
                Name="Markup Node"
                Foreground="${format(accent3)}"
                Background="${format(shade0)}"
                BoldFont="No"
              />
              <Item
                Name="Markup Attribute Value"
                Foreground="${format(shade7)}"
                Background="${format(shade0)}"
                BoldFont="No"
              />
              <Item
                Name="Markup Attribute"
                Foreground="${format(accent5)}"
                Background="${format(shade0)}"
                BoldFont="No"
              />
              <Item
                Name="Literal"
                Foreground="${format(accent3)}"
                Background="${format(shade0)}"
                BoldFont="No"
              />
              <Item
                Name="Operator"
                Foreground="${format(shade6)}"
                Background="${format(shade0)}"
                BoldFont="No"
              />
              <Item
                Name="Preprocessor Keyword"
                Foreground="${format(shade6)}"
                Background="${format(shade0)}"
                BoldFont="No"
              />
              <Item
                Name="Keyword"
                Foreground="${format(accent5)}"
                Background="${format(shade0)}"
                BoldFont="No"
              />
              <Item
                Name="Identifier"
                Foreground="${format(shade7)}"
                Background="${format(shade0)}"
                BoldFont="No"
              />
              <Item
                Name="Excluded Code"
                Foreground="${format(shade3)}"
                Background="${format(shade0)}"
                BoldFont="No"
              />
              <Item
                Name="Comment"
                Foreground="${format(shade3)}"
                Background="${format(shade0)}"
                BoldFont="No"
              />
              <Item
                Name="Peek Highlighted Text Unfocused"
                Foreground="0x01000000"
                Background="${format(shade2)}"
                BoldFont="No"
              />
              <Item
                Name="Peek Highlighted Text"
                Foreground="0x01000000"
                Background="${format(accent6)}"
                BoldFont="No"
              />
              <Item
                Name="Peek Label Text"
                Foreground="${format(shade6)}"
                Background="0x01000001"
                BoldFont="No"
              />
              <Item
                Name="Peek Focused Border"
                Foreground="${format(accent5)}"
                Background="0x01000001"
                BoldFont="No"
              />
              <Item
                Name="Peek History Hovered"
                Foreground="0x01000000"
                Background="${format(accent5)}"
                BoldFont="No"
              />
              <Item
                Name="Peek History Selected"
                Foreground="0x01000000"
                Background="${format(accent5)}"
                BoldFont="No"
              />
              <Item
                Name="Peek Background Unfocused"
                Foreground="0x01000000"
                Background="${format(shade1)}"
                BoldFont="No"
              />
              <Item
                Name="Peek Background"
                Foreground="0x01000000"
                Background="${mix(accent5, shade0, 0.9)}"
                BoldFont="No"
              />
              <Item
                Name="brace matching"
                Foreground="${format(shade7)}"
                Background="${mix(accent5, shade0)}"
                BoldFont="No"
              />
              <Item
                Name="xml literal - text"
                Foreground="${format(shade6)}"
                Background="${format(shade0)}"
                BoldFont="No"
              />
              <Item
                Name="xml literal - processing instruction"
                Foreground="${format(shade5)}"
                Background="${format(shade0)}"
                BoldFont="No"
              />
              <Item
                Name="xml literal - name"
                Foreground="${format(accent4)}"
                Background="${format(shade0)}"
                BoldFont="No"
              />
              <Item
                Name="xml literal - entity reference"
                Foreground="${format(accent5)}"
                Background="${format(shade0)}"
                BoldFont="No"
              />
              <Item
                Name="xml literal - embedded expression"
                Foreground="${format(shade2)}"
                Background="${format(accent2)}"
                BoldFont="No"
              />
              <Item
                Name="xml literal - delimiter"
                Foreground="${format(accent3)}"
                Background="${format(shade0)}"
                BoldFont="No"
              />
              <Item
                Name="xml literal - comment"
                Foreground="${format(shade3)}"
                Background="${format(shade0)}"
                BoldFont="No"
              />
              <Item
                Name="xml literal - cdata section"
                Foreground="${format(accent2)}"
                Background="${format(shade0)}"
                BoldFont="No"
              />
              <Item
                Name="xml literal - attribute value"
                Foreground="${format(shade7)}"
                Background="${format(shade0)}"
                BoldFont="No"
              />
              <Item
                Name="xml literal - attribute quotes"
                Foreground="${format(accent5)}"
                Background="${format(shade0)}"
                BoldFont="No"
              />
              <Item
                Name="xml literal - attribute name"
                Foreground="${format(shade6)}"
                Background="${format(shade0)}"
                BoldFont="No"
              />
              <Item
                Name="regex - other escape"
                Foreground="${format(accent1)}"
                Background="${format(shade0)}"
                BoldFont="No"
              />
              <Item
                Name="regex - self escaped character"
                Foreground="${format(accent2)}"
                Background="${format(shade0)}"
                BoldFont="Yes"
              />
              <Item
                Name="regex - text"
                Foreground="${format(accent7)}"
                Background="${format(shade0)}"
                BoldFont="No"
              />
              <Item
                Name="regex - alternation"
                Foreground="${format(accent4)}"
                Background="${format(shade0)}"
                BoldFont="No"
              />
              <Item
                Name="regex - grouping"
                Foreground="${format(accent4)}"
                Background="${format(shade0)}"
                BoldFont="No"
              />
              <Item
                Name="regex - quantifier"
                Foreground="${format(accent0)}"
                Background="${format(shade0)}"
                BoldFont="No"
              />
              <Item
                Name="regex - anchor"
                Foreground="${format(accent7)}"
                Background="${format(shade0)}"
                BoldFont="No"
              />
              <Item
                Name="regex - character class"
                Foreground="${format(accent5)}"
                Background="${format(shade0)}"
                BoldFont="No"
              />
              <Item
                Name="regex - comment"
                Foreground="${format(shade3)}"
                Background="${format(shade0)}"
                BoldFont="No"
              />
              <Item
                Name="xml doc comment - text"
                Foreground="${format(shade6)}"
                Background="${format(shade0)}"
                BoldFont="No"
              />
              <Item
                Name="xml doc comment - processing instruction"
                Foreground="${format(shade5)}"
                Background="${format(shade0)}"
                BoldFont="No"
              />
              <Item
                Name="xml doc comment - name"
                Foreground="${format(accent5)}"
                Background="${format(shade0)}"
                BoldFont="No"
              />
              <Item
                Name="xml doc comment - entity reference"
                Foreground="${format(accent4)}"
                Background="${format(shade0)}"
                BoldFont="No"
              />
              <Item
                Name="xml doc comment - delimiter"
                Foreground="${format(accent3)}"
                Background="${format(shade0)}"
                BoldFont="No"
              />
              <Item
                Name="xml doc comment - comment"
                Foreground="${format(shade3)}"
                Background="${format(shade0)}"
                BoldFont="No"
              />
              <Item
                Name="xml doc comment - cdata section"
                Foreground="${format(accent2)}"
                Background="${format(shade0)}"
                BoldFont="No"
              />
              <Item
                Name="xml doc comment - attribute value"
                Foreground="${format(shade7)}"
                Background="${format(shade0)}"
                BoldFont="No"
              />
              <Item
                Name="xml doc comment - attribute quotes"
                Foreground="${format(shade5)}"
                Background="${format(shade0)}"
                BoldFont="No"
              />
              <Item
                Name="xml doc comment - attribute name"
                Foreground="${format(shade6)}"
                Background="${format(shade0)}"
                BoldFont="No"
              />
              <Item
                Name="label name"
                Foreground="${format(shade7)}"
                Background="${format(shade0)}"
                BoldFont="No"
              />
              <Item
                Name="namespace name"
                Foreground="${format(accent6)}"
                Background="${format(shade0)}"
                BoldFont="No"
              />
              <Item
                Name="event name"
                Foreground="${format(shade7)}"
                Background="${format(shade0)}"
                BoldFont="No"
              />
              <Item
                Name="property name"
                Foreground="${format(shade7)}"
                Background="${format(shade0)}"
                BoldFont="No"
              />
              <Item
                Name="extension method name"
                Foreground="${format(accent2)}"
                Background="${format(shade0)}"
                BoldFont="No"
              />
              <Item
                Name="method name"
                Foreground="${format(accent2)}"
                Background="${format(shade0)}"
                BoldFont="No"
              />
              <Item
                Name="parameter name"
                Foreground="${format(accent5)}"
                Background="${format(shade0)}"
                BoldFont="No"
              />
              <Item
                Name="local name"
                Foreground="${format(accent5)}"
                Background="${format(shade0)}"
                BoldFont="No"
              />
              <Item
                Name="constant name"
                Foreground="${format(shade7)}"
                Background="${format(shade0)}"
                BoldFont="No"
              />
              <Item
                Name="enum member name"
                Foreground="${format(shade7)}"
                Background="${format(shade0)}"
                BoldFont="No"
              />
              <Item
                Name="field name"
                Foreground="${format(shade7)}"
                Background="${format(shade0)}"
                BoldFont="No"
              />
              <Item
                Name="type parameter name"
                Foreground="${format(accent1)}"
                Background="${format(shade0)}"
                BoldFont="No"
              />
              <Item
                Name="struct name"
                Foreground="${format(accent3)}"
                Background="${format(shade0)}"
                BoldFont="No"
              />
              <Item
                Name="module name"
                Foreground="${format(accent4)}"
                Background="${format(shade0)}"
                BoldFont="No"
              />
              <Item
                Name="interface name"
                Foreground="${format(accent7)}"
                Background="${format(shade0)}"
                BoldFont="No"
              />
              <Item
                Name="enum name"
                Foreground="${format(accent3)}"
                Background="${format(shade0)}"
                BoldFont="No"
              />
              <Item
                Name="delegate name"
                Foreground="${format(accent4)}"
                Background="${format(shade0)}"
                BoldFont="No"
              />
              <Item
                Name="class name"
                Foreground="${format(accent4)}"
                Background="${format(shade0)}"
                BoldFont="No"
              />
              <Item
                Name="operator - overloaded"
                Foreground="${mix(accent2, shade7, 0.8)}"
                Background="${format(shade0)}"
                BoldFont="No"
              />
              <Item
                Name="keyword - control"
                Foreground="${format(accent6)}"
                Background="${format(shade0)}"
                BoldFont="No"
              />
              <Item
                Name="string - escape character"
                Foreground="${format(accent4)}"
                Background="${format(shade0)}"
                BoldFont="No"
              />
              <Item
                Name="string - verbatim"
                Foreground="${format(accent3)}"
                Background="${format(shade0)}"
                BoldFont="No"
              />
              <Item
                Name="punctuation"
                Foreground="${format(shade7)}"
                Background="${format(shade0)}"
                BoldFont="No"
              />
              <Item
                Name="preprocessor text"
                Foreground="${format(shade7)}"
                Background="${format(shade0)}"
                BoldFont="No"
              />
              <Item
                Name="Inline Rename Field Text"
                Foreground="${format(accent3)}"
                Background="${format(shade0)}"
                BoldFont="No"
              />
              <Item
                Name="Edit and Continue"
                Foreground="${format(accent6)}"
                Background="0x02000000"
                BoldFont="No"
              />
              <Item
                Name="RoslynActiveStatementTag"
                Foreground="${format(shade0)}"
                Background="${format(shade3)}"
                BoldFont="No"
              />
              <Item
                Name="RoslynRenameFixupTag"
                Foreground="${format(accent2)}"
                Background="${format(shade0)}"
                BoldFont="No"
              />
              <Item
                Name="RoslynRenameFieldBackgroundAndBorderTag"
                Foreground="${format(shade0)}"
                Background="${format(accent4)}"
                BoldFont="No"
              />
              <Item
                Name="RoslynRenameConflictTag"
                Foreground="${format(accent0)}"
                Background="${format(shade0)}"
                BoldFont="No"
              />
              <Item
                Name="RenameTrackingTag"
                Foreground="${format(shade7)}"
                Background="${format(shade0)}"
                BoldFont="No"
              />
              <Item
                Name="RoslynPreviewWarningTag"
                Foreground="${format(accent2)}"
                Background="${format(shade0)}"
                BoldFont="No"
              />
              <Item
                Name="RoslynConflictTag"
                Foreground="${format(shade7)}"
                Background="${format(shade0)}"
                BoldFont="No"
              />
              <Item
                Name="MarkerFormatDefinition/HighlightedWrittenReference"
                Foreground="${mix(accent5, shade7)}"
                Background="${mix(accent5, shade0)}"
                BoldFont="No"
              />
              <Item
                Name="MarkerFormatDefinition/HighlightedDefinition"
                Foreground="${mix(accent3, shade7)}"
                Background="${mix(accent3, shade0)}"
                BoldFont="No"
              />
              <Item
                Name="CodeAnalysisCurrentStatementSelection"
                Foreground="${format(accent0)}"
                Background="${format(shade1)}"
                BoldFont="No"
              />
              <Item
                Name="CodeAnalysisLineTraceSelection"
                Foreground="${format(shade1)}"
                Background="${format(shade1)}"
                BoldFont="No"
              />
              <Item
                Name="CodeAnalysisKeyEventSelection"
                Foreground="${mix(accent2, shade0)}"
                Background="${mix(accent2, shade0)}"
                BoldFont="No"
              />
              <Item
                Name="CodeAnalysisWarningSelection"
                Foreground="${mix(accent2, shade0)}"
                Background="${mix(accent2, shade0)}"
                BoldFont="No"
              />
              <Item
                Name="UnnecessaryCode"
                Foreground="${format(shade6)}"
                Background="${format(shade0)}"
                BoldFont="No"
              />
              <Item
                Name="mergeEditor.WordDiffBox"
                Foreground="${format(shade7)}"
                Background="${format(shade0)}"
                BoldFont="No"
              />
              <Item
                Name="mergeEditor.SelectionBox"
                Foreground="0x00FFFFFF"
                Background="${format(accent5)}"
                BoldFont="No"
              />
              <Item
                Name="mergeEditor.ConflictMarginIndicator"
                Foreground="0x00FFFFFF"
                Background="${format(accent0)}"
                BoldFont="No"
              />
              <Item
                Name="mergeEditor.MarginIndicator"
                Foreground="0x00FFFFFF"
                Background="${format(shade4)}"
                BoldFont="No"
              />
              <Item
                Name="mergeEditor.NegativeSpace"
                Foreground="0x00FFFFFF"
                Background="${format(shade5)}"
                BoldFont="No"
              />
              <Item
                Name="mergeEditor.ConflictNegativeSpace"
                Foreground="0x00FFFFFF"
                Background="${format(accent0)}"
                BoldFont="No"
              />
              <Item
                Name="mergeEditor.DeletedNegativeSpace"
                Foreground="0x00FFFFFF"
                Background="${format(accent3)}"
                BoldFont="No"
              />
              <Item
                Name="mergeEditor.NotAcceptedLine"
                Foreground="0x00FFFFFF"
                Background="${format(shade1)}"
                BoldFont="No"
              />
              <Item
                Name="mergeEditor.ConflictLine"
                Foreground="0x00FFFFFF"
                Background="${format(accent1)}"
                BoldFont="No"
              />
              <Item
                Name="mergeEditor.AcceptedSimilarLine"
                Foreground="0x00FFFFFF"
                Background="${mix(accent4, shade0)}"
                BoldFont="No"
              />
              <Item
                Name="mergeEditor.AcceptedLine"
                Foreground="0x00FFFFFF"
                Background="${mix(accent4, shade0)}"
                BoldFont="No"
              />
              <Item
                Name="SymbolLineClassificationFormat"
                Foreground="${format(accent5)}"
                Background="${format(shade0)}"
                BoldFont="No"
              />
              <Item
                Name="SourceLineClassificationFormat"
                Foreground="${format(shade7)}"
                Background="${format(shade0)}"
                BoldFont="No"
              />
              <Item
                Name="InstructionLineClassificationFormat"
                Foreground="${format(shade4)}"
                Background="${format(shade0)}"
                BoldFont="No"
              />
              <Item
                Name="FileLineClassificationFormat"
                Foreground="${format(accent0)}"
                Background="${format(shade0)}"
                BoldFont="No"
              />
              <Item
                Name="Stale Code"
                Foreground="${format(shade5)}"
                Background="${format(shade0)}"
                BoldFont="No"
              />
              <Item
                Name="Interactive Window Error Output"
                Foreground="${format(accent0)}"
                Background="${format(shade0)}"
                BoldFont="No"
              />
              <Item
                Name="CodeReview.UnselectedComment.AnchorPoint"
                Foreground="${format(accent5)}"
                Background="${format(shade1)}"
                BoldFont="No"
              />
              <Item
                Name="CodeReview.SelectedComment.AnchorPoint"
                Foreground="${format(accent5)}"
                Background="${format(shade1)}"
                BoldFont="No"
              />
              <Item
                Name="MarkerFormatDefinition/CommentHighlight"
                Foreground="${format(shade7)}"
                Background="${mix(accent5, shade0)}"
                BoldFont="No"
              />
              <Item
                Name="MarkerFormatDefinition/CommentMark"
                Foreground="${format(shade7)}"
                Background="${mix(accent4, shade0)}"
                BoldFont="No"
              />
              <Item
                Name="MarkerFormatDefinition/FilteredScrollBarComment"
                Foreground="0x01000000"
                Background="${format(accent4)}"
                BoldFont="No"
              />
              <Item
                Name="MarkerFormatDefinition/ScrollBarComment"
                Foreground="0x01000000"
                Background="${format(accent3)}"
                BoldFont="No"
              />
              <Item
                Name="Test Summary - No Source"
                Foreground="${format(shade7)}"
                Background="${format(shade0)}"
                BoldFont="No"
              />
              <Item
                Name="Test Summary - Stack"
                Foreground="${format(accent0)}"
                Background="${format(shade0)}"
                BoldFont="No"
              />
              <Item
                Name="Test Summary - Label"
                Foreground="${format(shade7)}"
                Background="${format(shade0)}"
                BoldFont="No"
              />
              <Item
                Name="Test Summary - Header"
                Foreground="${format(shade7)}"
                Background="${format(shade0)}"
                BoldFont="No"
              />
              <Item
                Name="Test Summary - Default"
                Foreground="${format(shade7)}"
                Background="${format(shade0)}"
                BoldFont="No"
              />
              <Item
                Name="TextMate.Classifier"
                Foreground="${format(shade7)}"
                Background="${mix(accent6, shade0)}"
                BoldFont="No"
              />
            </Items>
          </Category>
          <Category
            GUID="{B36B0228-DBAD-4DB0-B9C7-2AD3E572010F}"
            FontName="Segoe UI"
            FontSize="9"
            CharSet="1"
            FontIsDefault="No"
          >
            <Items>
              <Item
                Name="Odd Row Items"
                Foreground="0x00000000"
                Background="0x00FFFFFF"
                BoldFont="No"
              />
              <Item
                Name="Even Row Items"
                Foreground="0x00000000"
                Background="0x00FFFFFF"
                BoldFont="No"
              />
              <Item
                Name="Not Downloaded"
                Foreground="0x00999999"
                Background="0x00FFFFFF"
                BoldFont="No"
              />
              <Item
                Name="Target Only"
                Foreground="0x00000000"
                Background="0x00FFFFFF"
                BoldFont="No"
              />
              <Item
                Name="Source Only"
                Foreground="0x00000000"
                Background="0x00FFFFFF"
                BoldFont="No"
              />
              <Item
                Name="Identical content"
                Foreground="0x00000000"
                Background="0x00FFFFFF"
                BoldFont="No"
              />
              <Item
                Name="Different content"
                Foreground="${format(accent0)}"
                Background="0x00FFFFFF"
                BoldFont="No"
              />
            </Items>
          </Category>
          <Category GUID="{58E96763-1D3B-4E05-B6BA-FF7115FD0B7B}" FontIsDefault="Yes">
            <Items>
              <Item
                Name="Visible Whitespace"
                Foreground="${format(shade1)}"
                Background="0x00FFFFFF"
                BoldFont="No"
              />
              <Item
                Name="Indicator Margin"
                Foreground="0x02000000"
                Background="${format(shade0)}"
                BoldFont="No"
              />
              <Item
                Name="Inactive Selected Text"
                Foreground="0x02000000"
                Background="${format(shade2)}"
                BoldFont="No"
              />
              <Item
                Name="Selected Text"
                Foreground="0x02000000"
                Background="${format(accent5)}"
                BoldFont="No"
              />
              <Item
                Name="Plain Text"
                Foreground="${format(shade7)}"
                Background="${format(shade0)}"
                BoldFont="No"
              />
            </Items>
          </Category>
          <Category GUID="{E0187991-B458-4F7E-8CA9-42C9A573B56C}" FontIsDefault="Yes">
            <Items>
              <Item
                Name="XSLT Keyword"
                Foreground="${format(accent5)}"
                Background="${format(shade0)}"
                BoldFont="No"
              />
              <Item
                Name="XML Attribute Quotes"
                Foreground="${format(shade5)}"
                Background="${format(shade0)}"
                BoldFont="No"
              />
              <Item
                Name="XML Attribute Value"
                Foreground="${format(shade7)}"
                Background="${format(shade0)}"
                BoldFont="No"
              />
              <Item
                Name="XML Processing Instruction"
                Foreground="${format(shade5)}"
                Background="${format(shade0)}"
                BoldFont="No"
              />
              <Item
                Name="XML CData Section"
                Foreground="${format(accent2)}"
                Background="${format(shade0)}"
                BoldFont="No"
              />
              <Item
                Name="XML Attribute"
                Foreground="${format(accent5)}"
                Background="${format(shade0)}"
                BoldFont="No"
              />
              <Item
                Name="XML Name"
                Foreground="${format(accent5)}"
                Background="${format(shade0)}"
                BoldFont="No"
              />
              <Item
                Name="XML Comment"
                Foreground="${format(shade3)}"
                Background="${format(shade0)}"
                BoldFont="No"
              />
              <Item
                Name="XML Delimiter"
                Foreground="${format(shade4)}"
                Background="${format(shade0)}"
                BoldFont="No"
              />
              <Item
                Name="XML Keyword"
                Foreground="${format(accent5)}"
                Background="${format(shade0)}"
                BoldFont="No"
              />
              <Item
                Name="XML Text"
                Foreground="${format(shade6)}"
                Background="${format(shade0)}"
                BoldFont="No"
              />
              <Item
                Name="XAML Markup Extension Parameter Value"
                Foreground="${format(shade5)}"
                Background="${format(shade0)}"
                BoldFont="No"
              />
              <Item
                Name="XAML Markup Extension Parameter Name"
                Foreground="${format(accent2)}"
                Background="${format(shade0)}"
                BoldFont="No"
              />
              <Item
                Name="XAML Markup Extension Class"
                Foreground="${format(accent2)}"
                Background="${format(shade0)}"
                BoldFont="No"
              />
              <Item
                Name="XAML Attribute Quotes"
                Foreground="${format(shade3)}"
                Background="${format(shade0)}"
                BoldFont="No"
              />
              <Item
                Name="XAML Attribute Value"
                Foreground="${format(accent5)}"
                Background="${format(shade0)}"
                BoldFont="No"
              />
              <Item
                Name="XAML Processing Instruction"
                Foreground="${format(shade5)}"
                Background="${format(shade0)}"
                BoldFont="No"
              />
              <Item
                Name="XAML CData Section"
                Foreground="${format(accent3)}"
                Background="${format(shade0)}"
                BoldFont="No"
              />
              <Item
                Name="XAML Attribute"
                Foreground="${format(accent5)}"
                Background="${format(shade0)}"
                BoldFont="No"
              />
              <Item
                Name="XAML Name"
                Foreground="${format(shade6)}"
                Background="${format(shade0)}"
                BoldFont="No"
              />
              <Item
                Name="XAML Comment"
                Foreground="${format(shade3)}"
                Background="${format(shade0)}"
                BoldFont="No"
              />
              <Item
                Name="XAML Delimiter"
                Foreground="${format(shade4)}"
                Background="${format(shade0)}"
                BoldFont="No"
              />
              <Item
                Name="XAML Keyword"
                Foreground="${format(accent5)}"
                Background="${format(shade0)}"
                BoldFont="No"
              />
              <Item
                Name="XAML Text"
                Foreground="${format(shade6)}"
                Background="${format(shade0)}"
                BoldFont="No"
              />
              <Item
                Name="Register NAT"
                Foreground="${format(shade4)}"
                Background="${format(shade0)}"
                BoldFont="No"
              />
              <Item
                Name="Register Data Changed"
                Foreground="${format(accent0)}"
                Background="${format(shade0)}"
                BoldFont="No"
              />
              <Item
                Name="Memory Unreadable"
                Foreground="${format(shade0)}"
                Background="${format(accent0)}"
                BoldFont="No"
              />
              <Item
                Name="Memory Address"
                Foreground="${format(shade5)}"
                Background="${format(shade0)}"
                BoldFont="No"
              />
              <Item
                Name="Memory Changed"
                Foreground="${format(accent0)}"
                Background="${format(shade0)}"
                BoldFont="No"
              />
              <Item
                Name="Memory Data"
                Foreground="${format(shade7)}"
                Background="${format(shade0)}"
                BoldFont="No"
              />
              <Item
                Name="Number"
                Foreground="${format(accent0)}"
                Background="${format(shade0)}"
                BoldFont="No"
              />
              <Item
                Name="String"
                Foreground="${format(accent3)}"
                Background="${format(shade0)}"
                BoldFont="No"
              />
              <Item
                Name="Identifier"
                Foreground="${format(shade7)}"
                Background="${format(shade0)}"
                BoldFont="No"
              />
              <Item
                Name="Comment"
                Foreground="${format(shade3)}"
                Background="${format(shade0)}"
                BoldFont="No"
              />
              <Item
                Name="Keyword"
                Foreground="${format(accent5)}"
                Background="${format(shade0)}"
                BoldFont="No"
              />
            </Items>
          </Category>
          <Category GUID="{A9A5637F-B2A8-422E-8FB5-DFB4625F0111}" FontIsDefault="Yes">
            <Items>
              <Item
                Name="Plain Text"
                Foreground="${format(shade7)}"
                Background="${format(shade0)}"
                BoldFont="No"
              />
            </Items>
          </Category>
        </Categories>
      </FontsAndColors>
    </Category>
  </Category>
</UserSettings>`;

export const render = (colors) =>
  Object.entries(colors).map(async ([name, colors]) => ({
    name: `themer-${name}.vssettings`,
    contents: Buffer.from(renderTheme(colors, name === 'dark'), 'utf8'),
  }));

export const renderInstructions = (paths) => `
1. Select Tools > Import and Export Settings...
2. Choose the "Import selected environment settings" option
3. Choose whether or not to save a backup of current settings
4. Click "Browse..." and choose the generated theme file (${paths
  .map((p) => `'${p}'`)
  .join(' or ')})
5. Click "Finish"
`;
