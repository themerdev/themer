module.exports = () => `
.list-group {
  li {
    padding-left: @component-padding/2;

    &.selected {
      color: @text-color-selected;
      background-color: @background-color-selected;
      &:before{ display: none; }
    }
  }
}

.list-tree {
  .selected {
    color: @text-color-selected;
  }
}

.select-list {
  li {
    padding: @component-padding/2 @component-padding;
  }
  .status {
    float: right;
  }
}

.select-list.popover-list {
  @popover-list-padding: @component-padding/2;

  padding: @popover-list-padding;
  border-radius: @component-border-radius;
  background-color: @overlay-background-color;
  box-shadow: 0 2px 8px 1px hsla(0,0%,0%,.3);

  .list-group {
    margin-top: @popover-list-padding;
    li {
      padding-left: @popover-list-padding;
    }
  }
}
`;
