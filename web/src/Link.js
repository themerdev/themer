import { useContext } from 'react';
import { pickBy } from 'lodash';
import ThemeContext from './ThemeContext';
import useHistory from './useHistory';

const Link = ({ children, ...props }) => {
  const { getActiveColorOrFallback } = useContext(ThemeContext);
  const { push } = useHistory();
  return (
    <a
      style={{ color: getActiveColorOrFallback(['accent5']) }}
      onClick={(evt) => {
        evt.preventDefault();
        push(evt.target.href);
        if (props.onClick) {
          props.onClick(evt);
        }
      }}
      {...pickBy(props, (_, key) => key !== 'onClick')}
    >
      {children}
    </a>
  );
};

export default Link;
