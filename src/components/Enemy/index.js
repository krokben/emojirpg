import React, { Component } from 'react';
import BEMHelper from 'react-bem-helper';
import './style.css';

const bem = new BEMHelper({name: 'enemy'});

export default class Enemy extends Component {
  render() {
    return (
      <div {...bem()}>
        <span role="img" aria-label="monkey">🐒</span>
      </div>
    );
  }
}
