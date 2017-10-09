export default (colors) => `
// Text Colors
@text-color:           hsl(0,0%,66%);
@text-color-subtle:    hsl(0,0%,50%);
@text-color-highlight: hsl(0,0%,94%);
@text-color-selected:  hsl(0,0%,100%);

@text-color-info:    hsl(219,  79%, 66%);
@text-color-success: hsl(140,  44%, 62%);
@text-color-warning: hsl( 36,  60%, 72%);
@text-color-error:   hsl(  9, 100%, 64%);

// Background colors
@background-color-info:    hsl(208, 100%, 50%);
@background-color-success: hsl(160,  70%, 36%);
@background-color-warning: hsl(32,   60%, 50%);
@background-color-error:   hsl(0,    70%, 50%);

@background-color-highlight: lighten(@base-background-color, 5%);
@background-color-selected:  lighten(@base-background-color, 10%);
@app-background-color:       darken(@base-background-color, 5%);

// Base colors
@base-background-color: hsl(222,6%,22%);
@base-border-color:     darken(@base-background-color, 8%);

// Component colors
@pane-item-background-color: @base-background-color;
@pane-item-border-color:     @base-border-color;

@input-background-color: @app-background-color;
@input-border-color:     @base-border-color;

@tool-panel-background-color: @base-background-color;
@tool-panel-border-color:     @base-border-color;

@inset-panel-background-color: lighten(@base-background-color, 4%);
@inset-panel-border-color:     @base-border-color;

@panel-heading-background-color: lighten(@base-background-color, 4%);
@panel-heading-border-color:     @base-border-color;

@overlay-background-color: lighten(@base-background-color, 5%);
@overlay-border-color:     @base-border-color;

@button-background-color:          lighten(@base-background-color, 10%);
@button-background-color-hover:    lighten(@button-background-color, 12%);
@button-background-color-selected: @button-background-color-hover;
@button-border-color:              @base-border-color;

@tab-bar-background-color:    @base-background-color;
@tab-bar-border-color:        @base-border-color;
@tab-background-color:        @tab-bar-background-color;
@tab-background-color-active: lighten(@tab-bar-background-color, 10%);
@tab-border-color:            @base-border-color;

@tree-view-background-color: @base-background-color;
@tree-view-border-color:     @base-border-color;

// Site colors
@ui-site-color-1: hsl(208, 100%, 50%); // blue
@ui-site-color-2: hsl(160,  70%, 42%); // green
@ui-site-color-3: hsl(32,   60%, 50%); // orange
@ui-site-color-4: #D831B0;             // pink
@ui-site-color-5: #EBDD5B;             // yellow

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
