import { action } from 'typesafe-actions';

import { User, UserRegisterTypes } from './types';

export const userRegister = ({ username }: User) =>
  action(UserRegisterTypes.USER_REGISTER, { username });
