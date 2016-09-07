import React from 'react';
import { connect } from 'react-redux';
import { save, load, scanQRCode, downloadZip, cleanAddress } from 'utils/deploy';

import ConnectPane from 'components/ConnectPane';

const ConnectTab = React.createClass({

  displayName: 'ConnectTab',

  propTypes: {
    history: React.PropTypes.object,
  },

  connectToServer(address) {
    let config = { address }
    save(config, () => console.log(`Saved server address ${address}`));
    downloadZip(config);
  },

  componentDidMount() {
    // load in last saved address
    load(loaded => {
      const addr = loaded.address;
      this.setState( { data : addr } );
    });
  },

  getInitialState() {
    return { data : {} };
  },

  handleButtonClick(button, data) {
    console.log(`${button} button clicked`);
    let address;

    switch(button) {
      case "scan":
        scanQRCode(result => {
          address = cleanAddress(result.text);
          this.setState( { data : address });
          this.connectToServer(this.state.data);
        },
        error => {
          alert(`Unable to scan: ${error}`);
        });
        break;
      case "connect":
        address = cleanAddress(data);
        this.connectToServer(data);
        break;
    }
  },

  handleTextChange(e) {
    this.setState( { data: e.target.value } );
  },

  render() {
    // TODO other handlers like those for the combobox will be passed as well
    return (
      <ConnectPane connectURL={ this.state.data } handleButtonClick={ this.handleButtonClick } handleOnChange={ this.handleTextChange }/>
    );
  },
});

function mapStateToProps(state) {
  return { ...state };
}

export default connect(mapStateToProps)(ConnectTab);
