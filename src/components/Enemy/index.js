import React, { Component } from 'react';
import BEMHelper from 'react-bem-helper';
import './style.css';

const bem = new BEMHelper({name: 'enemy'});

export default class Enemy extends Component {
  render() {
    return (
      <div {...bem()}>
        <span role="img" aria-label={this.props.enemy.name}>
          {this.props.enemy.emoji}
        </span>
        <div {...bem('label-no', 'lvl')}>
          <label {...bem('label-text', 'lvl')}>lvl</label>
          {this.props.enemy.lvl}
        </div>
        <div {...bem('label-no', 'hp')}>
          {this.props.enemy.hp}
          <label {...bem('label-text')}>hp</label>
        </div>
        <div {...bem('label-no', 'atk')}>
          {this.props.enemy.atk}
          <label {...bem('label-text')}>atk</label>
        </div>
      </div>
    );
  }
}
