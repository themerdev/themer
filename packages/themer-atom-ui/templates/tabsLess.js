module.exports = () => `
.tab-bar {
  background-color: @tab-bar-background-color;
  border-bottom: 1px solid @base-border-color;

  .tab {
    color: @text-color;
    height: @tab-height;
    line-height: @tab-height;
    font-size: @font-size;
    border-right: 1px solid @tab-border-color;
    background-color: @tab-background-color;
    &.active {
      color: @text-color-selected;
      background-color: @tab-background-color-active;
    }

    &.modified:not(:hover) .close-icon {
      top: 50%;
      right: @component-padding + 4px; // 4px -> half of icon size
      margin-top: -3px;
      border-color: @text-color-info;
    }
    &.modified:hover .close-icon {
      color: currentColor;
    }

    .close-icon:hover {
      color: @text-color-error;
    }
    &.active .close-icon:hover {
      color: @text-color-error;
    }

    &.is-dragging {
      background: darken(@tab-background-color, 10%);
      border-color: transparent;
      opacity: .5;
      & .close-icon {
        visibility: hidden;
      }
    }
  }
}
`;
