import React, { Component } from 'react';
import BEMHelper from 'react-bem-helper';
import './style.css';

const bem = new BEMHelper({name: 'item'});

export default class Item extends Component {
  render() {
    return (
      <div {...bem()}>
        <span role="img" aria-label="attack">🥖</span>
      </div>
    );
  }
}
