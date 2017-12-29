const heroActions = {
  takeDamage(dmg) {
    return {
      type: 'HERO_TAKE_DAMAGE',
      dmg,
    };
  },
}

export default heroActions;
