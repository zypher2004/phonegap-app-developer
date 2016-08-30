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
    >
      <img src="img/ic_settings_black_24px.svg" alt="setings icon" />
    </IconButton>
    <div className="logo">
      <img src="img/PhoneGap-Symbol-Black.svg" alt="logo" />
    </div>
    <IconButton
      quiet
      clickHandler={ () => props.handleIconButtonClick('help') }
    >
      <img src="img/ic_help_black_24px.svg" alt="help icon" />
    </IconButton>
  </div>
);

MainHeader.propTypes = {
  handleIconButtonClick: React.PropTypes.func,
};

export default MainHeader;
