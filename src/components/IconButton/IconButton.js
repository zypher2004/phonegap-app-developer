import React from 'react';
import classNames from 'classnames';
import Tappable from 'react-tappable';

import './index.css';

const IconButton = (props) => {
  const quiet = !!props.quiet;
  const cx = classNames({
    'topcoat-icon-button': !quiet,
    'topcoat-icon-button--quiet': quiet,
    'pg-icon-button': true,
  });
  return (
    <Tappable component="button" className={ cx }>
      { props.children || <span className="topcoat-icon">&nbsp;</span> }
    </Tappable>
  );
};

IconButton.propTypes = {
  children: React.PropTypes.any,
  quiet: React.PropTypes.bool,
};

export default IconButton;
