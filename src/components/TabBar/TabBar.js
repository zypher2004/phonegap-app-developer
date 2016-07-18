import React from 'react';
import classNames from 'classnames';
import Tappable from 'react-tappable';

import './index.css';

const TabBar = (props) => {
  const cx = classNames({
    full: props.full || false,
    'pg-tab-bar': true,
    'topcoat-tab-bar': true,
  });
  const tabs = props.children.map(child => (
    <label key={ child.key } className="topcoat-tab-bar__item">
      <input type="radio" name={ props.name } />
      <Tappable
        component="button"
        className="topcoat-tab-bar__button"
        onTap={ () => props.clickHandler(child.key) }
      >
        { child }
      </Tappable>
    </label>
  ));
  return (
    <div className={ cx }>
      { tabs }
    </div>
  );
};

TabBar.propTypes = {
  children: React.PropTypes.any,
  clickHandler: React.PropTypes.func.isRequired,
  full: React.PropTypes.bool,
  name: React.PropTypes.string.isRequired,
};

export default TabBar;

