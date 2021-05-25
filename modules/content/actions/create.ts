import { API_ENDPOINT, Content } from '@interfaces';
import createAsyncThunk from '@utils/createAsyncThunk';
import axios, { AxiosError } from 'axios';
import {
  CONTENT_CREATE,
  CONTENT_CREATE_SUCCESS,
  CONTENT_CREATE_ERROR,
} from 'modules/actionTypes';
import { createAsyncAction } from 'typesafe-actions';

export const createRequest = async (content: Content) => {
  const accessToken = localStorage.getItem('accessToken');
  const result = await axios.post<Content>(`${API_ENDPOINT}/content`, content, {
    headers: { authorization: accessToken },
  });
  return result.data;
};

export const createAsync = createAsyncAction(
  CONTENT_CREATE,
  CONTENT_CREATE_SUCCESS,
  CONTENT_CREATE_ERROR
)<null, Content, AxiosError>();

export const createThunk = createAsyncThunk(createAsync, createRequest);