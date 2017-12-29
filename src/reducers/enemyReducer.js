export default function enemyReducer(enemy = {}, action) {
  switch (action.type) {
    case 'ENEMY_TAKE_DAMAGE':
      return {
        ...enemy,
        hp: enemy.hp - action.dmg,
      };
    default:
      return enemy;
  }
}
