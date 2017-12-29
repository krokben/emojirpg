import React, { Component } from 'react';
import BEMHelper from 'react-bem-helper';
import './style.css';
import Enemy from './../Enemy';
import Attack from './../Attack';
import Defend from './../Defend';
import Item from './../Item';
import Run from './../Run';

const bem = new BEMHelper({name: 'game'});

export default class Game extends Component {
  render() {
    return (
      <div {...bem()}>
        <Enemy
          enemy={this.props.enemy}
          hero={this.props.hero}
        />
        <Attack
          enemy={this.props.enemy}
          hero={this.props.hero}
          enemyActions={this.props.enemyActions}
          heroActions={this.props.heroActions}
        />
        <Defend />
        <Item />
        <Run />
      </div>
    );
  }
}
