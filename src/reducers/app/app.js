import {extend} from '../../utils/common';

const initialState = {
  city: {
    name: `Paris`,
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 13
    }
  },
  property: null
};

const ActionTypes = {
  CHANGE_CITY: `CHANGE_CITY`,
  VIEW_PROPERTY: `VIEW_PROPERTY`,
};

const ActionCreator = {
  changeCity: (city) => ({
    type: ActionTypes.CHANGE_CITY,
    payload: city
  }),
  viewProperty: (id) => ({
    type: ActionTypes.VIEW_PROPERTY,
    payload: id
  })
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.CHANGE_CITY:
      return extend(state, {
        city: action.payload
      });
    case ActionTypes.VIEW_PROPERTY:
      return extend(state, {
        property: action.payload
      });
  }

  return state;
};

export {ActionTypes, ActionCreator, reducer};
