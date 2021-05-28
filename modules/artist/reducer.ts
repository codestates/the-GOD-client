import { createReducer } from 'typesafe-actions';
import { ArtistState } from '@interfaces';
import { ArtistAction } from './actions';
import {
  ARTIST_GET,
  ARTIST_GET_ERROR,
  ARTIST_GET_SUCCESS,
  USER_CONTENT_GET,
  USER_CONTENT_GET_ERROR,
  USER_CONTENT_GET_SUCCESS,
  USER_CONTENT_PATH_GET,
  USER_CONTENT_PATH_GET_ERROR,
  USER_CONTENT_PATH_GET_SUCCESS,
  USER_FOLLOW_GET,
  USER_FOLLOW_GET_ERROR,
  USER_FOLLOW_GET_SUCCESS,
  USER_INFO_GET,
  USER_INFO_GET_ERROR,
  USER_INFO_GET_SUCCESS,
} from '../actionTypes';

// default Store
const initialState: ArtistState = {
  userProfile: {
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
  bookmarks: {
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

const user = createReducer<ArtistState, ArtistAction>(initialState, {
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
  [ARTIST_GET]: (state) => ({
    ...state,
    bookmark: {
      loading: true,
      error: null,
      data: null,
    },
  }),
  [ARTIST_GET_SUCCESS]: (state, action) => ({
    ...state,
    bookmarks: {
      loading: false,
      error: null,
      data: action.payload.result,
    },
  }),
  [ARTIST_GET_ERROR]: (state, action) => ({
    ...state,
    bookmarks: {
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
