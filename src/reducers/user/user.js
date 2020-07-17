import {extend} from '../../utils/common';

const initialState = {
  authStatus: `NO_AUTH`,
};

const ActionType = {
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
};

const ActionCreator = {
  requireAuth: (status) => {
    return {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: status,
    };
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return extend(state, {
        authStatus: action.payload,
      });
  }

  return state;
};


export {ActionCreator, ActionType, reducer};
