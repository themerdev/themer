export default () => `
.status          { color: @text-color; }
.status-added    { color: @text-color-success; }
.status-ignored  { color: @text-color-subtle; }
.status-modified { color: @text-color-warning; }
.status-removed  { color: @text-color-error; }
.status-renamed  { color: @text-color-info; }
`;
