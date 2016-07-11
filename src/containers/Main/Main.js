import React from 'react';
import { connect } from 'react-redux';

import Button from 'components/Button';

const Main = React.createClass({

  displayName: 'Main',

  propTypes: {
    history: React.PropTypes.object,
  },

  handleButtonClick() {
    console.log('button clicked');
  },

  render() {
    return (
      <div className="page">
        <Button clickHandler={ this.handleButtonClick }>A Button</Button>
      </div>
    );
  },
});

function mapStateToProps(state) {
  return { ...state };
}

export default connect(mapStateToProps)(Main);
