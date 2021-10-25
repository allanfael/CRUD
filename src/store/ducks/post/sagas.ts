import { all, call, put, takeLatest, select } from 'redux-saga/effects';
import { Alert } from 'react-native';

// Api
import api from '@services/codeLeap-api/post';

import * as navigationService from '@navigator/NavigatorService';

import {
  getPostFailure,
  getPostSuccess,
  createPostFailure,
  createPostSuccess,
  updatePostSuccess,
  updatePostFailure,
  deletePostSuccess,
  deletePostFailure,
} from './actions';

import { PostTypes, Post } from './types';

interface PostProps {
  payload: {
    id?: number;
    title: string;
    content: string;
  };
}

const user = (state) => state.auth.user.username;

// Get post
export function* postRequest() {
  try {
    const response = yield api.getPost();

    yield call(postSuccess, { response });
  } catch (error) {
    yield call(postFailure, { error });
  }
}

export function* postFailure({ error }) {
  yield put(getPostFailure());
}

export function* postSuccess({ response }) {
  const data = response?.data?.results;

  const posts = data.map((item) => {
    const post: Post = {
      id: item.id,
      username: item.username,
      createAt: item.created_datetime,
      title: item.title,
      content: item.content,
    };
    return post;
  });
  yield put(getPostSuccess(posts));
}

// Create Post
export function* createNewPostRequest({ payload }: PostProps) {
  const username = yield select(user);

  const { title, content } = payload;

  const createdAt = new Date().toISOString();

  try {
    yield api.createPost({
      username,
      title,
      content,
      created_datetime: createdAt,
    });

    yield call(createNewPostSuccess);
  } catch (error) {
    yield call(createPostFailure);
  }
}

export function* createNewPostSuccess() {
  yield put(createPostSuccess());

  yield call(postRequest);

  navigationService.navigate('HomeScreen');

  Alert.alert('Success', 'Post created successfully');
}

export function* createNewPostFailure() {
  yield put(createPostFailure());
}

// Edit Post
export function* editPostRequest({ payload }: PostProps) {
  const { id, title, content } = payload;

  try {
    yield api.editPost({ id, title, content });

    yield call(editPostSuccess);
  } catch (error) {
    yield call(editPostFailure);
  }
}

export function* editPostSuccess() {
  yield put(updatePostSuccess());

  yield call(postRequest);

  navigationService.navigate('HomeScreen');

  Alert.alert('Success', 'Post updated successfully');
}

export function* editPostFailure() {
  yield put(updatePostFailure());
}

// Delete Post
export function* deletePostRequest({ payload }: PostProps) {
  const { id } = payload;

  try {
    yield api.deletePost({ id });

    yield call(deleteSuccess);
  } catch (error) {
    yield call(editFailure);
  }
}

export function* deleteSuccess() {
  yield put(deletePostSuccess());

  yield call(postRequest);

  navigationService.navigate('HomeScreen');

  Alert.alert('Success', 'Post deleted successfully');
}

export function* editFailure() {
  yield put(deletePostFailure());
}

export default all([
  takeLatest(PostTypes.GET_POST_REQUEST, postRequest),
  takeLatest(PostTypes.CREATE_POST_REQUEST, createNewPostRequest),
  takeLatest(PostTypes.UPDATE_POST_REQUEST, editPostRequest),
  takeLatest(PostTypes.DELETE_POST_REQUEST, deletePostRequest),
]);
