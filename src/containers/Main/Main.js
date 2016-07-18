import React from 'react';
import { connect } from 'react-redux';

import Button from 'components/Button';
import IconButton from 'components/IconButton';
import TabBar from 'components/TabBar';

const Main = React.createClass({

  displayName: 'Main',

  propTypes: {
    history: React.PropTypes.object,
  },

  handleButtonClick() {
    console.log('button clicked');
  },

  handleIconButtonClick() {
    console.log('icon button clicked');
  },

  handleTabBarButtonClick(button) {
    console.log(button);
  },

  render() {
    return (
      <div className="page">
        <IconButton quiet clickHandler={ this.handleIconButtonClick }>
          <span className="topcoat-icon">&nbsp;</span>
        </IconButton>
        <TabBar name="app-load-options" clickHandler={ this.handleTabBarButtonClick }>
          <span key="connect">Connect</span>
          <span key="saved">Saved Projects</span>
        </TabBar>
        <Button full cta clickHandler={ this.handleButtonClick }>Connect</Button>
      </div>
    );
  },
});

function mapStateToProps(state) {
  return { ...state };
}

export default connect(mapStateToProps)(Main);
