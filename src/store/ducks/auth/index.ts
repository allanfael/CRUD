import producer, { Draft } from 'immer';
import { Reducer } from 'redux';

import { UserState, UserRegisterTypes } from './types';

const INITIAL_STATE: UserState = {
  user: {
    username: '',
  },
  signed: false,
};

const auth: Reducer<UserState> = (currentState = INITIAL_STATE, action) => {
  return producer(currentState, (draft: Draft<UserState>) => {
    switch (action.type) {
      case UserRegisterTypes.USER_REGISTER:
        draft.user.username = action.payload.username;
        draft.signed = true;
        break;
      default:
        break;
    }
  });
};

export default auth;
