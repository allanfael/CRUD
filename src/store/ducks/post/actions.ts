import { action } from 'typesafe-actions';

import { Post, PostTypes } from './types';

// Get Posts
export const getPostRequest = () => action(PostTypes.GET_POST_REQUEST);

export const getPostSuccess = (post: Post) =>
  action(PostTypes.GET_POST_SUCCESS, { post });

export const getPostFailure = () => action(PostTypes.GET_POST_FAILURE);

// Create Post
export const createPostRequest = ({ title, content }: Post) =>
  action(PostTypes.CREATE_POST_REQUEST, { title, content });

export const createPostSuccess = () => action(PostTypes.CREATE_POST_SUCCESS);

export const createPostFailure = () => action(PostTypes.CREATE_POST_FAILURE);

// Update Post
export const updatePostRequest = ({ id, title, content }: Post) =>
  action(PostTypes.UPDATE_POST_REQUEST, { id, title, content });

export const updatePostSuccess = () => action(PostTypes.UPDATE_POST_SUCCESS);

export const updatePostFailure = () => action(PostTypes.UPDATE_POST_FAILURE);

// Delete Post
export const deletePostRequest = (id: string) =>
  action(PostTypes.DELETE_POST_REQUEST, { id });

export const deletePostSuccess = () => action(PostTypes.DELETE_POST_SUCCESS);

export const deletePostFailure = () => action(PostTypes.DELETE_POST_FAILURE);
