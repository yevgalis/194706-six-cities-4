import {extend} from '../../utils/common';
import {ActionCreator as AppActionCreator} from '../app/app';

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
        const data = response.data;
        const cities = data.map((obj) => obj.city);

        dispatch(ActionCreator.loadOffers(data));
        dispatch(AppActionCreator.setCity(data[0].city));
        dispatch(AppActionCreator.setCitiesList(cities));
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
