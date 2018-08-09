export default () => `
.panel-heading {
  border-bottom: 1px solid @panel-heading-border-color;
  background-color: @panel-heading-background-color;
}

.inset-panel {
  background-color: @inset-panel-background-color;
  .panel-heading {
    background-color: lighten(@inset-panel-background-color, 4%);
  }
}

atom-panel.modal {
  border: 1px solid @overlay-border-color;
  border-top: none;
  box-shadow: 0 2px 8px 1px hsla(0,0%,0%,.3);
}
`;
