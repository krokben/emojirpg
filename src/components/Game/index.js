import React, { Component } from 'react';
import BEMHelper from 'react-bem-helper';
import './style.css';
import Enemy from './../Enemy';

const bem = new BEMHelper({name: 'game'});

export default class Game extends Component {
  render() {
    return (
      <div {...bem()}>
        <Enemy />
      </div>
    );
  }
}
