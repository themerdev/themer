module.exports = () => `
.tree-view-resizer {
  border-right: 1px solid @base-border-color;
}

.tree-view {
  color: @text-color;
  background-color: @tree-view-background-color;

  .list-item.selected {
    color: @text-color-selected;
  }
}
`;
