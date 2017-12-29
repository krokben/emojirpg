import React, { Component } from 'react';
import BEMHelper from 'react-bem-helper';
import './style.css';

const bem = new BEMHelper({name: 'run'});

export default class Run extends Component {
  render() {
    return (
      <div {...bem()}>
        <span role="img" aria-label="attack">🏃🏿‍♀️</span>
      </div>
    );
  }
}
