import { ActionType } from 'typesafe-actions';

import { createContentAsync, createSharedContentAsync } from './create';
import { updateContentAsync } from './update';
import {
  inputArtist,
  inputTitle,
  inputTags,
  inputDescription,
  inputImages,
  inputDates,
  inputTimes,
  inputMobile,
  inputLocation,
  inputPerks,
} from './form';
import {
  getSharedContentAsync,
  getContentAsync,
  getContentListAsync,
} from './read';
import { deleteContentAsync } from './delete';

const actions = {
  getContentAsync,
  getContentListAsync,
  getSharedContentAsync,
  createSharedContentAsync,
  updateContentAsync,
  deleteContentAsync,
  createContentAsync,
  inputArtist,
  inputTitle,
  inputTags,
  inputDescription,
  inputImages,
  inputDates,
  inputTimes,
  inputLocation,
  inputPerks,
  inputMobile,
};

export type ContentAction = ActionType<typeof actions>;

export * from './create';
export * from './update';
export * from './delete';
export * from './form';
