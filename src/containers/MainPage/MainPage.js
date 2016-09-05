import React from 'react';
import { connect } from 'react-redux';

import {
  TabBar,
} from 'phonegap-topcoat-react';

import MainHeader from 'components/MainHeader';

const MainPage = React.createClass({

  displayName: 'MainPage',

  propTypes: {
    children: React.PropTypes.any.isRequired,
    history: React.PropTypes.object,
  },

  contextTypes: {
    router: React.PropTypes.object.isRequired,
  },

  handleIconButtonClick(buttonName) {
    console.log(`${buttonName} icon button clicked`);
  },

  handleTabBarButtonClick(tab) {
    const { router } = this.context;
    router.push(`/main/${tab}`);
    console.log(`${tab} tab clicked`);
  },

  render() {
    return (
      <div className="page">
        <MainHeader handleIconButtonClick={ this.handleIconButtonClick } />
        <TabBar
          name="app-load-options"
          clickHandler={ this.handleTabBarButtonClick }
        >
          <span key="connect">Connect</span>
          <span key="saved">Saved Projects</span>
        </TabBar>
        { /* Nested route: the children are the containers for each tab */ }
        { this.props.children }
      </div>
    );
  },
});

function mapStateToProps(state) {
  return { ...state };
}

export default connect(mapStateToProps)(MainPage);
