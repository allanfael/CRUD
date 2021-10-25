import producer, { Draft } from 'immer';
import { Reducer } from 'redux';

import { PostState, PostTypes } from './types';

const INITIAL_STATE: PostState = {
  post: [],
  loading: false,
};

const post: Reducer<PostState> = (currentState = INITIAL_STATE, action) => {
  return producer(currentState, (draft: Draft<PostState>) => {
    switch (action.type) {
      // GET_POST
      case PostTypes.GET_POST_REQUEST:
        draft.loading = true;
        break;
      case PostTypes.GET_POST_SUCCESS:
        draft.post = action.payload.post;
        draft.loading = false;
        break;
      case PostTypes.GET_POST_FAILURE:
        draft.loading = false;
        break;
      // CREATE_POST
      case PostTypes.CREATE_POST_REQUEST:
        draft.loading = true;
        break;
      case PostTypes.CREATE_POST_SUCCESS:
        draft.loading = false;
        break;
      case PostTypes.CREATE_POST_FAILURE:
        draft.loading = false;
        break;
      // UPDATE_POST
      case PostTypes.UPDATE_POST_REQUEST:
        draft.loading = true;
        break;
      case PostTypes.UPDATE_POST_SUCCESS:
        draft.loading = false;
        break;
      case PostTypes.UPDATE_POST_FAILURE:
        draft.loading = false;
        break;
      // DELETE_POST
      case PostTypes.DELETE_POST_REQUEST:
        draft.loading = true;
        break;
      case PostTypes.DELETE_POST_SUCCESS:
        draft.loading = false;
        break;
      case PostTypes.DELETE_POST_FAILURE:
        draft.loading = false;
        break;
      default:
        break;
    }
  });
};

export default post;
