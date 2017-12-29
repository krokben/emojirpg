import { combineReducers } from 'redux';
import appReducer from './appReducer';
import heroReducer from './heroReducer';
import enemyReducer from './enemyReducer';

const rootReducer = combineReducers({
  app: appReducer,
  hero: heroReducer,
  enemy: enemyReducer,
});

export default rootReducer;
