import React from 'react';

import './index.css';

// TODO This will probably be refactored to accept children
const SavedPane = (props) => (
  <div className="saved-pane">
    <p>
      You have no saved projects
    </p>
  </div>
);

SavedPane.propTypes = {
  handleButtonClick: React.PropTypes.func.isRequired,
};

export default SavedPane;

