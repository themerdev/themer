export default () => `
.key-binding {
  display: inline-block;
  margin-left: 1px;
  padding: 0 (@component-padding / 2);
  line-height: 2;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  font-size: .8em;
  letter-spacing: 1px;
  border-radius: @component-border-radius;
  background-color: @app-background-color;
}
`;
