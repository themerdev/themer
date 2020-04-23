module.exports = () => `
.loading-spinner-large  { .loading-spinner(64px); }
.loading-spinner-medium { .loading-spinner(48px); }
.loading-spinner-small  { .loading-spinner(32px); }
.loading-spinner-tiny   { .loading-spinner(16px); }

.loading-spinner(@size) {
  display: block;
  width: @size;
  height: @size;
  background-image: url(images/octocat-spinner-128.gif);
  background-repeat: no-repeat;
  background-size: @size @size;
  &.inline-block {
    display: inline-block;
  }
}
`;
