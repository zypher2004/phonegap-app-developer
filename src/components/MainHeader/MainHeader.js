import React from 'react';
import {
  IconButton,
} from 'phonegap-topcoat-react';

import './index.css';

const MainHeader = (props) => (
  <div className="main-header">
    <IconButton
      quiet
      clickHandler={ () => props.handleIconButtonClick('settings') }
      style={ { background: 'url(img/ic_settings_black_24px.svg) center center no-repeat' } }
      title="Settings"
    />
    <div className="logo">
      <img src="img/PhoneGap-Symbol-Black.svg" alt="logo" />
    </div>
    <IconButton
      quiet
      clickHandler={ () => props.handleIconButtonClick('help') }
      style={ { background: 'url(img/ic_help_black_24px.svg) center center no-repeat' } }
      title="Help"
    />
  </div>
);

MainHeader.propTypes = {
  handleIconButtonClick: React.PropTypes.func,
};

export default MainHeader;
