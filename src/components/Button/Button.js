import React from 'react';
import classNames from 'classnames';
import Tappable from 'react-tappable';

import './index.css';

const Button = (props) => {
  const cta = props.cta || false;
  const cx = classNames({
    full: props.full || false,
    'pg-button': true,
    'topcoat-button': !cta,
    'topcoat-button--cta': cta,
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
  clickHandler: React.PropTypes.func.isRequired,
  cta: React.PropTypes.bool,
  full: React.PropTypes.bool,
};

export default Button;
