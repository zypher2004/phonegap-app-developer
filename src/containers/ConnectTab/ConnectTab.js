import React from 'react';
import { connect } from 'react-redux';

import ConnectPane from 'components/ConnectPane';

const ConnectTab = React.createClass({

  displayName: 'ConnectTab',

  propTypes: {
    history: React.PropTypes.object,
  },

  handleButtonClick(button) {
    console.log(`${button} button clicked`);
  },

  render() {
    // TODO other handlers like those for the combobox will be passed as well
    return (
      <ConnectPane handleButtonClick={ this.handleButtonClick } />
    );
  },
});

function mapStateToProps(state) {
  return { ...state };
}

export default connect(mapStateToProps)(ConnectTab);
