module.exports = () => `
.tooltip {
  .tooltip-inner {
    line-height: 1;
    padding: .75em;
    white-space: nowrap;
    max-width: none;
  }

  .keystroke {
    padding: .15em .4em;
    margin: 0 -.3em 0 .25em;
    border-radius: max(2px, @component-border-radius / 2);
    color: @text-color-selected;
    background: @background-color-selected;
  }
}
`;
