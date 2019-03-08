import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";

export default props => {
  const { getActiveColorOrFallback } = useContext(ThemeContext);
  return (
    <a style={{ color: getActiveColorOrFallback(['accent5']) }} { ...props }>
      { props.children }
    </a>
  );
};
