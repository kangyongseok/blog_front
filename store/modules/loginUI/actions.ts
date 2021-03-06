import { createAction } from 'typesafe-actions';
import { updateKey } from './types';


export const GET_AUTH = 'loginUI/GET_AUTH';
export const GET_LOGIN_MODAL = 'loginUI/GET_LOGIN_MODAL';
export const INITIALIZE = 'loginUI/INITIALIZE';

export const IS_LOGGED = 'loginUI/IS_LOGGED';

export const getAuth = createAction(GET_AUTH, ({ name, value }: updateKey) => ({
  name,
  value,
}))<updateKey>();

export const getLoginModal = createAction(GET_LOGIN_MODAL)();
export const initialize = createAction(INITIALIZE)();
export const getIsLogged = createAction(IS_LOGGED, (isLogged: boolean) => (isLogged))<boolean>();