import { combineReducers } from 'redux';

import auth from './auth';
import post from './post';

export const rootReducer = combineReducers({
  auth,
  post,
});

export type RootState = ReturnType<typeof rootReducer>;
