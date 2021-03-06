import { CALL_API } from '../middlewares/api';
import * as Actions from '../actions/constants';

export const currentGithubScopeVersion = Actions.CURRENT_SCOPE_VERSION;

export const createGithubUserRequest = (account, code, state, scopeVersion = currentGithubScopeVersion) => ({
  [CALL_API]: {
    types: [ Actions.CREATE_GITHUB_USER_REQUEST, Actions.CREATE_GITHUB_USER_SUCCESS, Actions.CREATE_GITHUB_USER_FAILURE ],
    endpoint: `users`,
    schema: null,
    method: 'POST',
    payload: {
      account,
      code,
      state,
      scopeVersion
    },
    additionalParams: {},
    absolute: false,
  }
});

export const createGithubUser = (account, code, state) => dispatch => dispatch(createGithubUserRequest(account, code, state));

export const getUserRequest = (account) => ({
  [CALL_API]: {
    types: [ Actions.GET_USER_REQUEST, Actions.GET_USER_SUCCESS, Actions.GET_USER_FAILURE ],
    endpoint: `users/${account}`,
    schema: null,
    method: 'GET',
    payload: {},
    additionalParams: {},
    absolute: false
  }
});

export const getUser = (account) => dispatch => dispatch(getUserRequest(account));

export const banUserRequest = (account, banned, bannedBy) => ({
  [CALL_API]: {
    types: [ Actions.BAN_USER_REQUEST, Actions.BAN_USER_SUCCESS, Actions.BAN_USER_FAILURE ],
    endpoint: `users/${account}/ban`,
    schema: null,
    method: 'POST',
    payload: {
      account,
      banned,
      bannedBy
    },
    additionalParams: {},
    absolute: false
  }
});

export const banUser = (account, banned = 1, bannedBy = "<anonymous-mod>") => dispatch => dispatch(banUserRequest(account, banned, bannedBy));