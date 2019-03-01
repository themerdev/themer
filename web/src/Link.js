import React from "react";
import ColorState from "./ColorState";

export default props => (
  <ColorState>
    {({ getColor }) => (
      <a style={{ color: getColor("accent5", "shade7") }} { ...props }>
        { props.children }
      </a>
    )}
  </ColorState>
);
