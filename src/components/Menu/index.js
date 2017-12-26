import React, { Component } from 'react';
import BEMHelper from 'react-bem-helper';
import './style.css';

const bem = new BEMHelper({name: 'menu'});

export default class Menu extends Component {
  render() {
    return (
      <ul {...bem()}>
        <li {...bem('item')}>calculator</li>
      </ul>
    );
  }
}
