import React from 'react';
import classNames from 'classnames';

import './index.css';

const Button = (props) => {
  const cx = classNames({
    full: true,
    pgbutton: true,
    'topcoat-button': true,
  });
  return (
    <button className={ cx } onClick={ props.clickHandler }>
      { props.children || <span>&nbsp;</span> }
    </button>
  );
};

Button.propTypes = {
  children: React.PropTypes.any,
  clickHandler: React.PropTypes.func,
};

export default Button;
