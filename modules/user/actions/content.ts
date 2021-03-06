import {
  API_ENDPOINT,
  GetBookmarkResponse,
  GetContentPathResponse,
  GetUserContentResponse,
  PutBookmarkResponse,
} from '@interfaces';
import axios, { AxiosError } from 'axios';
import { createAsyncAction } from 'typesafe-actions';
import createAsyncThunk from '@utils/createAsyncThunk';
import {
  USER_CONTENT_GET,
  USER_CONTENT_GET_SUCCESS,
  USER_CONTENT_GET_ERROR,
  USER_BOOKMARK_GET,
  USER_BOOKMARK_GET_SUCCESS,
  USER_BOOKMARK_GET_ERROR,
  USER_BOOKMARK_UPDATE,
  USER_BOOKMARK_UPDATE_SUCCESS,
  USER_BOOKMARK_UPDATE_ERROR,
  USER_CONTENT_PATH_GET,
  USER_CONTENT_PATH_GET_SUCCESS,
  USER_CONTENT_PATH_GET_ERROR,
} from '../../actionTypes';

export const getMyContentAsync = createAsyncAction(
  USER_CONTENT_GET,
  USER_CONTENT_GET_SUCCESS,
  USER_CONTENT_GET_ERROR
)<null, GetUserContentResponse, AxiosError>();

export const getPathAsync = createAsyncAction(
  USER_CONTENT_PATH_GET,
  USER_CONTENT_PATH_GET_SUCCESS,
  USER_CONTENT_PATH_GET_ERROR
)<null, GetContentPathResponse, AxiosError>();

export const getBookmarksAsync = createAsyncAction(
  USER_BOOKMARK_GET,
  USER_BOOKMARK_GET_SUCCESS,
  USER_BOOKMARK_GET_ERROR
)<null, GetBookmarkResponse, AxiosError>();

export const updateBookmarkAsync = createAsyncAction(
  USER_BOOKMARK_UPDATE,
  USER_BOOKMARK_UPDATE_SUCCESS,
  USER_BOOKMARK_UPDATE_ERROR
)<null, PutBookmarkResponse, AxiosError>();

export const getMyContentRequest = async () => {
  const token: string | null = localStorage.getItem('accessToken');
  const result = await axios.get<GetUserContentResponse>(
    `${API_ENDPOINT}/user/content`,
    {
      headers: {
        authorization: `bearer ${token}`,
      },
    }
  );
  return result.data;
};

export const getPathRequest = async () => {
  const token: string | null = localStorage.getItem('accessToken');
  const result = await axios.get<GetContentPathResponse>(
    `${API_ENDPOINT}/user/sharedcontent`,
    {
      headers: {
        authorization: `bearer ${token}`,
      },
    }
  );
  return result.data;
};

export const getBookmarksRequest = async () => {
  const token: string | null = localStorage.getItem('accessToken');
  const result = await axios.get<GetBookmarkResponse>(
    `${API_ENDPOINT}/user/bookmark`,
    {
      headers: {
        authorization: `bearer ${token}`,
      },
    }
  );
  return result.data;
};

export const updateBookmarkRequest = async (contentId: string) => {
  const token: string | null = localStorage.getItem('accessToken');
  const result = await axios.put<GetBookmarkResponse>(
    `${API_ENDPOINT}/user/bookmark`,
    { contentId },
    {
      headers: {
        authorization: `bearer ${token}`,
      },
    }
  );
  return result.data;
};

export const getMyContentThunk = createAsyncThunk(
  getMyContentAsync,
  getMyContentRequest
);
export const getPathThunk = createAsyncThunk(getPathAsync, getPathRequest);

export const getBookmarksThunk = createAsyncThunk(
  getBookmarksAsync,
  getBookmarksRequest
);

export const updateBookmarkThunk = createAsyncThunk(
  updateBookmarkAsync,
  updateBookmarkRequest
);
