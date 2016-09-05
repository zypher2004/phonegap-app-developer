import React from 'react';
import { connect } from 'react-redux';

import SavedPane from 'components/SavedPane';

const SavedTab = React.createClass({

  displayName: 'SavedTab',

  propTypes: {
    history: React.PropTypes.object,
  },

  // There _will_ be a button here at some point...
  handleButtonClick(button) {
    console.log(`${button} clicked`);
  },

  render() {
    return (
      <SavedPane />
    );
  },
});

function mapStateToProps(state) {
  return { ...state };
}

export default connect(mapStateToProps)(SavedTab);
