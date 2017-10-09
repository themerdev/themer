export default () => `
.text-smaller {
  font-size: smaller;
}

.text-subtle    { color: @text-color-subtle; }
.text-highlight { color: @text-color-highlight; }

.text-info    { color: @text-color-info; }
.text-success { color: @text-color-success; }
.text-warning { color: @text-color-warning; }
.text-error   { color: @text-color-error; }

.highlight         { .highlight-mixin(@background-color-highlight); }
.highlight-info    { .highlight-mixin(@background-color-info); }
.highlight-warning { .highlight-mixin(@background-color-warning); }
.highlight-error   { .highlight-mixin(@background-color-error); }
.highlight-success { .highlight-mixin(@background-color-success); }

.highlight-mixin(@color) {
  padding: 1px 4px;
  color: @text-color-highlight;
  border-radius: @component-border-radius;
  background-color: @color;
}

.background-message {
  font-weight: bold;
  color: @text-color-subtle;
}
`;
