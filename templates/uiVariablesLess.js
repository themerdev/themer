export default (colors) => `
// Base colors
@base-background-color: ${colors.shade0};
@base-border-color:     ${colors.shade1};

// Text Colors
@text-color:           ${colors.shade6};
@text-color-subtle:    ${colors.shade3};
@text-color-highlight: ${colors.shade7};
@text-color-selected:  ${colors.shade7};

@text-color-info:    ${colors.accent5};
@text-color-success: ${colors.accent3};
@text-color-warning: ${colors.accent1};
@text-color-error:   ${colors.accent0};

// Background colors
@background-color-info:    ${colors.accent5};
@background-color-success: ${colors.accent3};
@background-color-warning: ${colors.accent1};
@background-color-error:   ${colors.accent0};

@background-color-highlight: ${colors.shade1};
@background-color-selected:  ${colors.shade2};
@app-background-color:       @base-background-color;

// Component colors
@pane-item-background-color: @base-background-color;
@pane-item-border-color:     @base-border-color;

@input-background-color: @app-background-color;
@input-border-color:     @base-border-color;

@tool-panel-background-color: @base-background-color;
@tool-panel-border-color:     @base-border-color;

@inset-panel-background-color: ${colors.shade1};
@inset-panel-border-color:     ${colors.shade2};

@panel-heading-background-color: ${colors.shade1};
@panel-heading-border-color:     @base-border-color;

@overlay-background-color: ${colors.shade1};
@overlay-border-color:     @base-border-color;

@button-background-color:          ${colors.shade1};
@button-background-color-hover:    ${colors.shade2};
@button-background-color-selected: @button-background-color-hover;
@button-border-color:              @base-border-color;

@tab-bar-background-color:    @base-background-color;
@tab-bar-border-color:        @base-border-color;
@tab-background-color:        @tab-bar-background-color;
@tab-background-color-active: @base-border-color;
@tab-border-color:            @base-border-color;

@tree-view-background-color: @base-background-color;
@tree-view-border-color:     @base-border-color;

// Site colors
@ui-site-color-1: ${colors.accent5};
@ui-site-color-2: ${colors.accent3};
@ui-site-color-3: ${colors.accent1};
@ui-site-color-4: ${colors.accent7};
@ui-site-color-5: ${colors.accent2};

// Sizes
@font-size: 12px;
@input-font-size: 14px;

@disclosure-arrow-size: 12px;

@component-padding: 10px;
@component-icon-padding: 5px;
@component-icon-size: 16px;
@component-line-height: 25px;

@tab-height: 30px;

// Misc
@component-border-radius: 2px;
@font-family: '.SFNSText-Regular', 'SF UI Text', 'Lucida Grande', 'Segoe UI', Ubuntu, Cantarell, sans-serif;
`;
