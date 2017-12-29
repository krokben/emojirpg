export default function heroReducer(hero = {}, action) {
  switch (action.type) {
    case 'HERO_TAKE_DAMAGE':
      return {
        ...hero,
        hp: hero.hp - action.dmg,
      };
    default:
      return hero;
  }
}
