export default (colors) => `
// Themer colors

@accent0: ${colors.accent0};
@accent1: ${colors.accent1};
@accent2: ${colors.accent2};
@accent3: ${colors.accent3};
@accent4: ${colors.accent4};
@accent5: ${colors.accent5};
@accent6: ${colors.accent6};
@accent7: ${colors.accent7};

@shade0: ${colors.shade0};
@shade1: ${colors.shade1};
@shade2: ${colors.shade2};
@shade3: ${colors.shade3};
@shade4: ${colors.shade4};
@shade5: ${colors.shade5};
@shade6: ${colors.shade6};
@shade7: ${colors.shade7};

// Base colors

@base-background-color: @shade0;
@base-border-color:     @shade1;

// Text Colors

@text-color:           @shade6;
@text-color-subtle:    @shade3;
@text-color-highlight: @shade7;
@text-color-selected:  @shade7;

@text-color-info:    @accent5;
@text-color-success: @accent3;
@text-color-warning: @accent1;
@text-color-error:   @accent0;

// Background colors

@background-color-info:    @accent5;
@background-color-success: @accent3;
@background-color-warning: @accent1;
@background-color-error:   @accent0;

@background-color-highlight: @shade1;
@background-color-selected:  @shade2;
@app-background-color:       @base-background-color;

// Component colors

@pane-item-background-color: @base-background-color;
@pane-item-border-color:     @base-border-color;

@input-background-color: @app-background-color;
@input-border-color:     @base-border-color;

@tool-panel-background-color: @base-background-color;
@tool-panel-border-color:     @base-border-color;

@inset-panel-background-color: @shade1;
@inset-panel-border-color:     @shade2;

@panel-heading-background-color: @shade1;
@panel-heading-border-color:     @base-border-color;

@overlay-background-color: @shade1;
@overlay-border-color:     @base-border-color;

@button-background-color:          @shade1;
@button-background-color-hover:    @shade2;
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

@ui-site-color-1: @accent5;
@ui-site-color-2: @accent3;
@ui-site-color-3: @accent1;
@ui-site-color-4: @accent7;
@ui-site-color-5: @accent2;

// Sizes

@font-size: 12px;
@input-font-size: 14px;

@disclosure-arrow-size: 12px;

@component-padding: 10px;
@component-icon-padding: 5px;
@component-icon-size: 16px;
@component-line-height: 25px;

@tab-height: 36px;

// Misc

@component-border-radius: 2px;
@font-family: '.SFNSText-Regular', 'SF UI Text', 'Lucida Grande', 'Segoe UI', Ubuntu, Cantarell, sans-serif;
`;
