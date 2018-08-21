module.exports = () => `
body {
  font-size: @font-size;
  color: @text-color;
  background-color: @app-background-color;
}

atom-pane {
  border-right: 1px solid @base-border-color;
  &:last-child {
    border-right: none;
  }
}
`;
