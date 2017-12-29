import React, { Component } from 'react';
import BEMHelper from 'react-bem-helper';
import './style.css';

const bem = new BEMHelper({name: 'enemy'});

export default class Enemy extends Component {
  render() {
    return (
      <div {...bem()}>
        <span role="img" aria-label="monkey">🐒</span>
        <div {...bem('label-no', 'hp')}>10<span {...bem('label-text')}>hp</span></div>
        <div {...bem('label-no', 'atk')}>2<span {...bem('label-text')}>atk</span></div>
      </div>
    );
  }
}
