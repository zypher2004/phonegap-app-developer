import React from 'react';
import { connect } from 'react-redux';

import {
  Button,
  TextInput,
  TabBar,
} from 'phonegap-topcoat-react';

import MainHeader from 'components/MainHeader';

const Main = React.createClass({

  displayName: 'Main',

  propTypes: {
    history: React.PropTypes.object,
  },

  handleButtonClick(button) {
    console.log(`${button} button clicked`);
  },

  handleIconButtonClick(buttonName) {
    console.log(`${buttonName} icon button clicked`);
  },

  handleTabBarButtonClick(button) {
    console.log(`${button} tab clicked`);
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
        { /* The below will probably be split off into another container */ }
        { /* ...as the targets of the TabBar will probably be child routes */ }
        { /* Also, as these are broken up into components, they will get */ }
        { /* ...proper classNames instead of inline styles */ }
        <div style={ { padding: '10px' } } className="connect-tab">
          <Button
            full
            clickHandler={ () => this.handleButtonClick('scan') }
          >
            <img src="img/ic_fullscreen_black_24px.svg" alt="scan icon" />
            <span> Scan a QR Code</span>
          </Button>
          <div style={ { textAlign: 'center', margin: '10px 0 20px 0' } }>
            - or -
          </div>
          <label htmlFor="connectURL">Enter server address
            <TextInput name="connectURL" full style={ { margin: '10px 0' } } />
          </label>
          <Button
            full
            cta
            clickHandler={ () => this.handleButtonClick('connect') }
          >
            Connect
          </Button>
        </div>
      </div>
    );
  },
});

function mapStateToProps(state) {
  return { ...state };
}

export default connect(mapStateToProps)(Main);
