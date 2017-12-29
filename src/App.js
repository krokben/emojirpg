import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import appActions from './actions/appActions';
import heroActions from './actions/heroActions';
import enemyActions from './actions/enemyActions';
import Header from './components/Header';
import Menu from './components/Menu';
import Game from './components/Game';

class App extends Component {
  render() {
    return (
      <div>
        <Header appActions={this.props.appActions} hero={this.props.hero} />
        {this.props.app.menu && <Menu app={this.props.app} appActions={this.props.appActions} />}
        <Game
          hero={this.props.hero}
          enemy={this.props.enemy}
          heroActions={this.props.heroActions}
          enemyActions={this.props.enemyActions}
        />
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
    heroActions: bindActionCreators(heroActions, dispatch),
    enemyActions: bindActionCreators(enemyActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
