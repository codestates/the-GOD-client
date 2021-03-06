import { createReducer } from 'typesafe-actions';
import { UserState } from '@interfaces';
import { UserAction } from './actions';
import {
  USER_BOOKMARK_GET,
  USER_BOOKMARK_GET_ERROR,
  USER_BOOKMARK_GET_SUCCESS,
  USER_BOOKMARK_UPDATE,
  USER_BOOKMARK_UPDATE_ERROR,
  USER_BOOKMARK_UPDATE_SUCCESS,
  USER_CONTENT_GET,
  USER_CONTENT_GET_ERROR,
  USER_CONTENT_GET_SUCCESS,
  USER_CONTENT_PATH_GET,
  USER_CONTENT_PATH_GET_ERROR,
  USER_CONTENT_PATH_GET_SUCCESS,
  USER_FOLLOW_GET,
  USER_FOLLOW_GET_ERROR,
  USER_FOLLOW_GET_SUCCESS,
  USER_FOLLOW_UPDATE,
  USER_FOLLOW_UPDATE_ERROR,
  USER_FOLLOW_UPDATE_SUCCESS,
  USER_INFO_GET,
  USER_INFO_GET_ERROR,
  USER_INFO_GET_SUCCESS,
  USER_NAME_UPDATE,
  USER_NAME_UPDATE_ERROR,
  USER_NAME_UPDATE_SUCCESS,
  USER_AVATAR_UPDATE,
  USER_AVATAR_UPDATE_ERROR,
  USER_AVATAR_UPDATE_SUCCESS,
} from '../actionTypes';

// default Store
const initialState: UserState = {
  userProfile: {
    data: null,
    loading: false,
    error: null,
  },
  profileImage: {
    data: null,
    loading: false,
    error: null,
  },
  username: {
    data: null,
    loading: false,
    error: null,
  },
  contents: {
    data: null,
    loading: false,
    error: null,
  },
  follows: {
    data: null,
    loading: false,
    error: null,
  },
  follow: {
    data: null,
    loading: false,
    error: null,
  },
  bookmarks: {
    data: null,
    loading: false,
    error: null,
  },
  bookmark: {
    data: null,
    loading: false,
    error: null,
  },
  paths: {
    data: null,
    loading: false,
    error: null,
  },
};

const user = createReducer<UserState, UserAction>(initialState, {
  [USER_INFO_GET]: (state) => ({
    ...state,
    userProfile: {
      loading: true,
      error: null,
      data: null,
    },
  }),
  [USER_INFO_GET_SUCCESS]: (state, action) => ({
    ...state,
    userProfile: {
      loading: false,
      error: null,
      data: action.payload.result,
    },
  }),
  [USER_INFO_GET_ERROR]: (state, action) => ({
    ...state,
    userProfile: {
      loading: false,
      error: action.payload.message,
      data: null,
    },
  }),
  [USER_NAME_UPDATE]: (state) => ({
    ...state,
    username: {
      loading: true,
      error: null,
      data: null,
    },
  }),
  [USER_NAME_UPDATE_SUCCESS]: (state, action) => ({
    ...state,
    username: {
      loading: false,
      error: null,
      data: action.payload,
    },
  }),
  [USER_NAME_UPDATE_ERROR]: (state, action) => ({
    ...state,
    username: {
      loading: false,
      error: action.payload.message,
      data: null,
    },
  }),
  [USER_AVATAR_UPDATE]: (state) => ({
    ...state,
    profileImage: {
      loading: true,
      error: null,
      data: null,
    },
  }),
  [USER_AVATAR_UPDATE_SUCCESS]: (state, action) => ({
    ...state,
    profileImage: {
      loading: false,
      error: null,
      data: action.payload.result,
    },
  }),
  [USER_AVATAR_UPDATE_ERROR]: (state, action) => ({
    ...state,
    profileImage: {
      loading: false,
      error: action.payload.message,
      data: null,
    },
  }),
  [USER_CONTENT_PATH_GET]: (state) => ({
    ...state,
    paths: {
      loading: true,
      error: null,
      data: null,
    },
  }),
  [USER_CONTENT_PATH_GET_SUCCESS]: (state, action) => ({
    ...state,
    paths: {
      loading: false,
      error: null,
      data: action.payload.result,
    },
  }),
  [USER_CONTENT_PATH_GET_ERROR]: (state, action) => ({
    ...state,
    paths: {
      loading: false,
      error: action.payload.response?.data.message,
      data: null,
    },
  }),
  [USER_BOOKMARK_GET]: (state) => ({
    ...state,
    bookmarks: {
      loading: true,
      error: null,
      data: null,
    },
  }),
  [USER_BOOKMARK_GET_SUCCESS]: (state, action) => ({
    ...state,
    bookmarks: {
      loading: false,
      error: null,
      data: action.payload.result,
    },
  }),
  [USER_BOOKMARK_GET_ERROR]: (state, action) => ({
    ...state,
    bookmarks: {
      loading: false,
      error: action.payload.response?.data.message,
      data: null,
    },
  }),
  [USER_BOOKMARK_UPDATE]: (state) => ({
    ...state,
    bookmark: {
      loading: true,
      error: null,
      data: null,
    },
  }),
  [USER_BOOKMARK_UPDATE_SUCCESS]: (state, action) => ({
    ...state,
    bookmark: {
      loading: false,
      error: null,
      data: action.payload.result, // ?????? ???????????? ??????
    },
  }),
  [USER_BOOKMARK_UPDATE_ERROR]: (state, action) => ({
    ...state,
    bookmark: {
      loading: false,
      error: action.payload.response?.data.message,
      data: null,
    },
  }),
  [USER_FOLLOW_GET]: (state) => ({
    ...state,
    follows: {
      loading: true,
      error: null,
      data: null,
    },
  }),
  [USER_FOLLOW_GET_SUCCESS]: (state, action) => ({
    ...state,
    follows: {
      loading: false,
      error: null,
      data: action.payload.result,
    },
  }),
  [USER_FOLLOW_GET_ERROR]: (state, action) => ({
    ...state,
    follows: {
      loading: false,
      error: action.payload.response?.data.message,
      data: null,
    },
  }),
  [USER_FOLLOW_UPDATE]: (state) => ({
    ...state,
    follow: {
      loading: true,
      error: null,
      data: null,
    },
  }),
  [USER_FOLLOW_UPDATE_SUCCESS]: (state, action) => ({
    ...state,
    follow: {
      loading: false,
      error: null,
      data: action.payload.result,
    },
  }),
  [USER_FOLLOW_UPDATE_ERROR]: (state, action) => ({
    ...state,
    follow: {
      loading: false,
      error: action.payload.response?.data.message,
      data: null,
    },
  }),
  [USER_CONTENT_GET]: (state) => ({
    ...state,
    contents: {
      loading: true,
      error: null,
      data: null,
    },
  }),
  [USER_CONTENT_GET_SUCCESS]: (state, action) => ({
    ...state,
    contents: {
      loading: false,
      error: null,
      data: action.payload.result,
    },
  }),
  [USER_CONTENT_GET_ERROR]: (state, action) => ({
    ...state,
    contents: {
      loading: false,
      error: action.payload.response?.data.message,
      data: null,
    },
  }),
});

export default user;
