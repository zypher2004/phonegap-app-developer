import React from 'react';
import { connect } from 'react-redux';
import { save, load, scanQRCode, downloadZip, cleanAddress } from 'utils/deploy';

import ConnectPane from 'components/ConnectPane';

const ConnectTab = React.createClass({

  displayName: 'ConnectTab',

  propTypes: {
    history: React.PropTypes.object,
  },

  getInitialState() {
    return { data: {} };
  },

  componentDidMount() {
    // load in last saved address
    load(loaded => {
      const addr = loaded.address;
      this.setState({ data: addr });
    });
  },

  connectToServer(address) {
    const config = { address };
    save(config, () => console.log(`Saved server address ${address}`));
    downloadZip(config);
  },

  handleButtonClick(button, data) {
    console.log(`${button} button clicked`);
    let address;

    switch (button) {
      case 'scan':
        scanQRCode(result => {
          address = cleanAddress(result.text);
          this.setState({ data: address });
          this.connectToServer(this.state.data);
        },
        error => {
          navigator.notification.alert(`Unable to scan: ${error}`);
        });
        break;
      case 'connect':
        address = cleanAddress(data);
        this.setState({ data: address });
        this.connectToServer(address);
        break;
      default:
        console.log(button);
    }
  },

  handleTextChange(e) {
    this.setState({ data: e.target.value });
  },

  render() {
    // TODO other handlers like those for the combobox will be passed as well
    return (
      <ConnectPane
        connectURL={ this.state.data }
        handleButtonClick={ this.handleButtonClick }
        handleOnChange={ this.handleTextChange }
      />
    );
  },
});

function mapStateToProps(state) {
  return { ...state };
}

export default connect(mapStateToProps)(ConnectTab);
