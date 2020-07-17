import {extend} from '../../utils/common';

const initialState = {
  offers: []
};

const ActionTypes = {
  LOAD_OFFERS: `LOAD_OFFERS`
};

const ActionCreator = {
  loadOffers: (data) => ({
    type: ActionTypes.LOAD_OFFERS,
    payload: data
  })
};

const AsyncActions = {
  loadOffers: () => (dispatch, getState, api) => {
    return api.get(`/hotels`)
      .then((response) => {
        dispatch(ActionCreator.loadOffers(response.data));
      });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.LOAD_OFFERS:
      return extend(state, {
        offers: action.payload
      });
  }

  return state;
};

export {ActionTypes, AsyncActions, ActionCreator, reducer};
