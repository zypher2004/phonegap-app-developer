import React from 'react';
import classNames from 'classnames';
import Tappable from 'react-tappable';

import './index.css';

const Button = (props) => {
  const cx = classNames({
    full: true,
    pgbutton: true,
    'topcoat-button': true,
  });
  return (
    <Tappable
      component="button"
      className={ cx }
      onTap={ props.clickHandler }
    >
      { props.children || <span>&nbsp;</span> }
    </Tappable>
  );
};

Button.propTypes = {
  children: React.PropTypes.any,
  clickHandler: React.PropTypes.func,
};

export default Button;
