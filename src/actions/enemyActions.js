const enemyActions = {
  takeDamage(dmg) {
    return {
      type: 'ENEMY_TAKE_DAMAGE',
      dmg,
    };
  },
}

export default enemyActions;
