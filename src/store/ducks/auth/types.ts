export enum UserRegisterTypes {
  USER_REGISTER = '@register/USER_REGISTER_REQUEST',
}

export interface User {
  username: string;
}

export interface UserState {
  user: User;
  signed: boolean;
}
