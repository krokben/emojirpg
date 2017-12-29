import React, { Component } from 'react';
import BEMHelper from 'react-bem-helper';
import './style.css';

const bem = new BEMHelper({name: 'attack'});

export default class Attack extends Component {
  handleClick = () => {
    this.props.enemyActions.takeDamage(this.props.hero.atk);
    this.props.heroActions.takeDamage(this.props.enemy.atk);
  }

  render() {
    return (
      <div {...bem()} onClick={this.handleClick}>
        <span role="img" aria-label="attack">🗡️</span>
      </div>
    );
  }
}
