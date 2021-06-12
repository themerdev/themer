module.exports = () => `
atom-text-editor[mini] {
  padding-left: (@component-padding / 2);
  color: @text-color;
  border-radius: @component-border-radius;
  background-color: @input-background-color;

  &.is-focused {
    background-color: @input-background-color;
    border: 1px solid @accent4;
  }

  .placeholder-text {
    color: @text-color-subtle;
  }
  .selection .region {
    background-color: @background-color-selected;
  }
}
`;
