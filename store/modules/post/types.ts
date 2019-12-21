import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type PostActions = ActionType<typeof actions>;

export type Post = {
  id?: number;
  title: string;
  date: string;
  content: string;
  imgUrl?: undefined | string;
  contentMd: string;
  reply?: [];
};

export type PostState = {
  postsList: Post[];
};
