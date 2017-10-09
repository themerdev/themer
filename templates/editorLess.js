export default () => `
atom-text-editor[mini] {
  padding-left: @component-padding/2;
  color: @text-color;
  border-radius: @component-border-radius;
  background-color: @input-background-color;

  &.is-focused {
    background-color: darken(@input-background-color, 5%);
  }

  .placeholder-text {
    color: @text-color-subtle;
  }
  .selection .region {
    background-color: @background-color-selected;
  }
}
`;
