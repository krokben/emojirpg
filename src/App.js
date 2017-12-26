import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import appActions from './actions/appActions';
import Header from './components/Header';
import Menu from './components/Menu';

class App extends Component {
  render() {
    return (
      <div>
        <Header appActions={this.props.appActions} />
        {this.props.app.menu && <Menu app={this.props.app} appActions={this.props.appActions} />}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
    appActions: bindActionCreators(appActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
