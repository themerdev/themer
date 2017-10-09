export default () => `
.btn {
  color: lighten(@text-color, 6%);
  background-color: @button-background-color;
  &:hover,
  &:focus {
    color: @text-color-highlight;
    background-color: @button-background-color-hover;
  }
  &:active {
    color: fade(@text-color-selected, 66%);
    background-color: darken(@button-background-color, 2%);
  }
  &.selected {
    color: @text-color-selected;
    background-color: @button-background-color-selected;
  }
  &:focus,
  &:focus:active {
    outline: none;
  }
}

.btn.btn-primary { .btn-color(@background-color-info); }
.btn.btn-info    { .btn-color(@background-color-info); }
.btn.btn-success { .btn-color(@background-color-success); }
.btn.btn-warning { .btn-color(@background-color-warning); }
.btn.btn-error   { .btn-color(@background-color-error); }

.btn-color(@bg) {
  color: @text-color-selected;
  background-color: @bg;
  &:hover,
  &:focus {
    background-color: lighten(@bg, 4%);
  }
  &:active {
    background-color: darken(@bg, 4%);
  }
  &.selected {
    background-color: lighten(@bg, 4%);
  }
  &.selected:focus,
  &.selected:hover {
    background-color: lighten(@bg, 8%);
  }
}

.btn-group > .btn {
  border-color: hsla(0,0%,0%,.2);;
}
`;
