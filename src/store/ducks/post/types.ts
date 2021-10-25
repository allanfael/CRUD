import { PostDTO } from '@dto/PostDTO';

export enum PostTypes {
  GET_POST_REQUEST = '@post/GET_POST_REQUEST',
  GET_POST_SUCCESS = '@post/GET_POST_SUCCESS',
  GET_POST_FAILURE = '@post/GET_POST_FAILURE',

  CREATE_POST_REQUEST = '@post/CREATE_POST_REQUEST',
  CREATE_POST_SUCCESS = '@post/CREATE_POST_SUCCESS',
  CREATE_POST_FAILURE = '@post/CREATE_POST_FAILURE',

  UPDATE_POST_REQUEST = '@post/UPDATE_POST_REQUEST',
  UPDATE_POST_SUCCESS = '@post/UPDATE_POST_SUCCESS',
  UPDATE_POST_FAILURE = '@post/UPDATE_POST_FAILURE',

  DELETE_POST_REQUEST = '@post/DELETE_POST_REQUEST',
  DELETE_POST_SUCCESS = '@post/DELETE_POST_SUCCESS',
  DELETE_POST_FAILURE = '@post/DELETE_POST_FAILURE',
}

export interface Post extends PostDTO {}

export interface PostState {
  post: Post[];
  loading: boolean;
}