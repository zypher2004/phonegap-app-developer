import React from 'react';
import { connect } from 'react-redux';
import TransitionGroup from 'react-addons-transition-group';
import classNames from 'classnames';

const App = React.createClass({

  displayName: 'App',

  propTypes: {
    children: React.PropTypes.object,
    dispatch: React.PropTypes.func.isRequired,
    location: React.PropTypes.object,
  },

  getInitialState() {
    return {
      error: {
        displayed: false,
        message: '',
      },
    };
  },

  render() {
    const {
      location: { pathname: key, action: direction },
    } = this.props;

    const props = {
      key,
      direction: direction.toLowerCase(),
    };

    const cx = classNames({
      app: true,
    });

    return (
      <div className={ cx }>
        <TransitionGroup className="transitiongroup">
          { React.cloneElement(this.props.children || <div />, props) }
        </TransitionGroup>
      </div>
    );
  },
});

function mapStateToProps(state) {
  return { ...state };
}

export default connect(mapStateToProps)(App);
