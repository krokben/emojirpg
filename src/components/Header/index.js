import React, { Component } from 'react';
import BEMHelper from 'react-bem-helper';
import './style.css';

const bem = new BEMHelper({name: 'header'});

export default class Header extends Component {
  render() {
    return (
      <div {...bem()}>
        <span {...bem('logo')}>
          <span role="img" aria-label="emoji">
            🤣
          </span>
          .rpg
        </span>
        <span {...bem('trigram')} onClick={this.props.appActions.toggleMenu}>☰</span>
        <div {...bem('stats')}>
          <div {...bem('stat')}>
            <label {...bem('label-text', 'lvl')}>lvl</label>
            <span {...bem('label-no')}>{this.props.hero.lvl}</span>
          </div>
          <div {...bem('stat')}>
            <span {...bem('label-no')}>{this.props.hero.atk}</span>
            <label {...bem('label-text')}>atk</label>
          </div>
          <div {...bem('stat')}>
            <span {...bem('label-no')}>{this.props.hero.def}</span>
            <label {...bem('label-text')}>def</label>
          </div>
          <div {...bem('stat')}>
            <span {...bem('label-no')}>{this.props.hero.hp}</span>
            <label {...bem('label-text')}>hp</label>
          </div>
        </div>
      </div>
    );
  }
}
